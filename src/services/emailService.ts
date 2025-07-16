import * as SendgridMail from '@sendgrid/mail';
import type {ContactForm, EmailTemplate} from '~/types/contact';
import {EmailSendingError, CONTACT_REASON_LABELS} from '~/types/contact';
import {logError} from '~/utils/errorHandling';

interface EmailConfig {
	apiKey: string;
	fromEmail: string;
	toEmail: string;
}

/**
 * Validates email configuration
 * @returns Validated email configuration
 * @throws EmailSendingError if configuration is invalid
 * @description Validates the email configuration by checking required environment variables.
 * Throws an EmailSendingError if any required variable is missing.
 */
function validateEmailConfig(): EmailConfig {
	const apiKey = process.env.APIKEY;
	const fromEmail = process.env.EMAIL_FROM;
	const toEmail = process.env.EMAIL_TO;

	if (!apiKey) {
		throw new EmailSendingError('Email API key is not configured.', 500);
	}

	if (!fromEmail) {
		throw new EmailSendingError('Email "from" address is not configured.', 500);
	}

	if (!toEmail) {
		throw new EmailSendingError('Email "to" address is not configured.', 500);
	}

	return {apiKey, fromEmail, toEmail};
}

/**
 * Formats form field for email display
 * @param key The key of the form field
 * @param value The value of the form field
 * @returns A formatted string for email display
 * @description Converts the field key to a human-readable format and formats the value.
 * If the field is an email, it creates a mailto link.
 */
function formatFieldForEmail(key: string, value: string): string {
	const displayKey = key
		.replace(/([A-Z])/g, ' $1')
		.toLowerCase()
		.replace(/^./, str => str.toUpperCase());

	if (key === 'email') {
		return `<p><b>${displayKey}</b>: <a href="mailto:${value}">${value}</a></p>`;
	}

	return `<p><b>${displayKey}</b>: ${value}</p>`;
}

/**
 * Creates email template from contact form data
 */
export function createEmailTemplate(
	contactForm: ContactForm,
	emailConfig: EmailConfig,
): EmailTemplate {
	const contactReasonLabel = CONTACT_REASON_LABELS[contactForm.contactReason];
	const subject = `Contact form message - ${contactForm.name} regarding ${contactReasonLabel}`;

	// Create text version
	const textParts = [
		`Contact form submission from ${contactForm.name}`,
		`Reason: ${contactReasonLabel}`,
		`Email: ${contactForm.email}`,
		`Message: ${contactForm.message}`,
	];

	// Add specific fields based on contact type
	if ('employer' in contactForm) {
		textParts.push(`Employer: ${contactForm.employer}`);
	}
	if ('compensation' in contactForm) {
		textParts.push(`Compensation: ${contactForm.compensation}`);
	}
	if ('workingModel' in contactForm && contactForm.workingModel) {
		textParts.push(`Working model: ${contactForm.workingModel}`);
	}
	if (
		'workingModelDescription' in contactForm &&
		contactForm.workingModelDescription
	) {
		textParts.push(
			`Working model description: ${contactForm.workingModelDescription}`,
		);
	}
	if ('dogsAllowed' in contactForm && contactForm.dogsAllowed) {
		textParts.push(`Dogs allowed: ${contactForm.dogsAllowed}`);
	}
	if ('benefits' in contactForm) {
		textParts.push(`Benefits: ${contactForm.benefits}`);
	}

	const text = textParts.join('\n');

	// Create HTML version
	const formEntries = Object.entries(contactForm)
		.filter(([key]) => key !== 'contactReason') // Contact reason is already in subject
		.map(([key, value]) => formatFieldForEmail(key, String(value)));

	const html = [
		`<h2>Contact Form Submission</h2>`,
		`<p><b>Subject</b>: ${contactReasonLabel}</p>`,
		...formEntries,
		`<hr>`,
		`<p><small>Sent via contact form on ${new Date().toLocaleString()}</small></p>`,
	].join('');

	return {
		to: emailConfig.toEmail,
		from: emailConfig.fromEmail,
		subject,
		text,
		html,
	};
}

/**
 * Sends email using SendGrid
 */
export async function sendContactEmail(
	contactForm: ContactForm,
): Promise<void> {
	try {
		const emailConfig = validateEmailConfig();

		// Set API key
		SendgridMail.setApiKey(emailConfig.apiKey);

		// Create email template
		const emailTemplate = createEmailTemplate(contactForm, emailConfig);

		// Send email
		const [response] = await SendgridMail.send(emailTemplate);

		// Check if email was accepted
		if (response.statusCode !== 202) {
			throw new EmailSendingError(
				`Email service returned unexpected status: ${response.statusCode}`,
				response.statusCode,
			);
		}
	} catch (error) {
		// Re-throw known errors
		if (error instanceof EmailSendingError) {
			throw error;
		}

		// Wrap unknown errors
		logError(error, 'sendContactEmail');
		throw new EmailSendingError(
			'Failed to send email due to an unexpected error',
			500,
			error,
		);
	}
}
