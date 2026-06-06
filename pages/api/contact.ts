import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type ContactRequestBody = {
	first_name?: string;
	last_name?: string;
	email?: string;
	subject?: string;
	message?: string;
};

type ContactResponse = {
	message: string;
};

const CONTACT_TO_EMAIL =
	process.env.CONTACT_TO_EMAIL || "sat.garg03+contact@gmail.com";

function getString(value: unknown) {
	return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ContactResponse>
) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).json({ message: "Method not allowed" });
	}

	const apiKey = process.env.RESEND_API_KEY;
	const fromEmail = process.env.CONTACT_FROM_EMAIL;

	if (!apiKey || !fromEmail) {
		return res.status(500).json({ message: "Email service is not configured" });
	}

	const body = req.body as ContactRequestBody;
	const firstName = getString(body.first_name);
	const lastName = getString(body.last_name);
	const email = getString(body.email);
	const subject = getString(body.subject);
	const message = getString(body.message);

	if (!firstName || !lastName || !email || !subject || !message) {
		return res.status(400).json({ message: "Please fill out every field" });
	}

	const resend = new Resend(apiKey);
	const fullName = `${firstName} ${lastName}`;
	const emailSubject = `Portfolio contact: ${subject}`;
	const htmlMessage = escapeHtml(message).replace(/\n/g, "<br />");

	const { error } = await resend.emails.send({
		from: `Portfolio Contact <${fromEmail}>`,
		to: CONTACT_TO_EMAIL,
		replyTo: email,
		subject: emailSubject,
		text: [
			`Name: ${fullName}`,
			`Email: ${email}`,
			`Subject: ${subject}`,
			"",
			message,
		].join("\n"),
		html: `
			<h2>New portfolio contact</h2>
			<p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
			<p><strong>Email:</strong> ${escapeHtml(email)}</p>
			<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
			<p><strong>Message:</strong></p>
			<p>${htmlMessage}</p>
		`,
	});

	if (error) {
		return res.status(500).json({ message: "Unable to send message" });
	}

	return res.status(200).json({ message: "Message sent" });
}
