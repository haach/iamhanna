import {redirect} from '@remix-run/node';
import type {ContactForm} from '~/types/contact';
import {ContactFormValidationError, EmailSendingError} from '~/types/contact';
import {validateAndSanitizeContactForm} from '~/utils/validation';
import {sendContactEmail} from '~/services/emailService';
import {logError} from '~/utils/errorHandling';

export interface ContactFormActionResult {
	success: boolean;
	error?: {
		message: string;
		field?: string;
		code?: string;
	};
}

/**
 * Handles contact form submission
 * @param request The request object containing form data for the contact form submission.
 * @returns A redirect response to the success page or an error page.
 */
export async function handleContactFormSubmission(
	request: Request,
): Promise<Response> {
	try {
		const formData = await request.formData();

		// Validate and sanitize form data
		const contactForm: ContactForm = validateAndSanitizeContactForm(formData);

		// Send email
		await sendContactEmail(contactForm);

		// Redirect to success page
		return redirect('/contact/success');
	} catch (error) {
		logError(error, 'handleContactFormSubmission');

		if (error instanceof ContactFormValidationError) {
			// For validation errors, we could potentially return the error to display inline
			// For now, redirect to error page with validation context
			return redirect('/contact/error?type=validation');
		}

		if (error instanceof EmailSendingError) {
			// For email sending errors, redirect to error page
			return redirect('/contact/error?type=email');
		}

		// For unexpected errors, redirect to generic error page
		return redirect('/contact/error');
	}
}

/**
 * This function is used to get error messages for display based on error type.
 * @param errorType The type of error that occurred during form submission.
 * @returns A user-friendly error message.
 */
export function getErrorMessage(errorType?: string): string {
	switch (errorType) {
		case 'validation':
			return 'Please check your form inputs and try again.';
		case 'email':
			return 'There was a problem sending your message. Please try again later.';
		default:
			return 'An unexpected error occurred. Please try again.';
	}
}
