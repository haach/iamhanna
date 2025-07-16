import type {ContactForm} from '~/types/contact';
import {ContactFormValidationError, ContactReason} from '~/types/contact';
import {APP_CONFIG} from '~/utils/constants';

const HTML_ESCAPE_MAP = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#x27;',
	'/': '&#x2F;',
} as const;

/**
 * Sanitizes input string by escaping HTML characters
 * @param input - The input string to sanitize
 * @description Sanitizes input string by escaping HTML characters.
 * If the input is not a string or is empty, it returns an empty string.
 * @returns The sanitized string or an empty string
 */
export function sanitizeHtml(input: string): string {
	if (!input || typeof input !== 'string') return '';

	const regex = /[&<>"'/]/g;
	return input.replace(
		regex,
		match => HTML_ESCAPE_MAP[match as keyof typeof HTML_ESCAPE_MAP],
	);
}

/**
 * Validates email format using a more robust regex
 * @param email - The email address to validate
 * @description Validates email format using a more robust regex.
 * It checks if the email matches the pattern of a valid email address.
 * @returns True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Validates required fields are present and not empty
 * @param value - The value to validate
 * @param fieldName - The name of the field being validated
 * @returns The validated string value
 */
export function validateRequiredField(
	value: unknown,
	fieldName: string,
): string {
	if (!value || (typeof value === 'string' && value.trim() === '')) {
		throw new ContactFormValidationError(
			`${fieldName} is required`,
			fieldName,
			'REQUIRED_FIELD_MISSING',
		);
	}

	const stringValue = String(value).trim();

	// Check length limits
	if (stringValue.length > APP_CONFIG.validation.maxFieldLength) {
		throw new ContactFormValidationError(
			`${fieldName} is too long (maximum ${APP_CONFIG.validation.maxFieldLength} characters)`,
			fieldName,
			'FIELD_TOO_LONG',
		);
	}

	return stringValue;
}

/**
 * Validates and sanitizes form data from FormData
 * @param formData - The FormData object containing contact form data
 * @throws ContactFormValidationError if validation fails
 * @description Validates and sanitizes contact form data from FormData.
 * @returns The validated and sanitized contact form data
 */
export function validateAndSanitizeContactForm(
	formData: FormData,
): ContactForm {
	const contactReason = validateRequiredField(
		formData.get('contactReason'),
		'contactReason',
	) as ContactReason;

	if (!Object.values(ContactReason).includes(contactReason)) {
		throw new ContactFormValidationError(
			'Invalid contact reason',
			'contactReason',
			'INVALID_CONTACT_REASON',
		);
	}

	const name = sanitizeHtml(
		validateRequiredField(formData.get('name'), 'name'),
	);
	const email = validateRequiredField(formData.get('email'), 'email');

	if (email.length > APP_CONFIG.validation.maxEmailLength) {
		throw new ContactFormValidationError(
			'Email address is too long',
			'email',
			'EMAIL_TOO_LONG',
		);
	}

	if (!isValidEmail(email)) {
		throw new ContactFormValidationError(
			'Invalid email format',
			'email',
			'INVALID_EMAIL_FORMAT',
		);
	}

	const message = sanitizeHtml(
		validateRequiredField(formData.get('message'), 'message'),
	);

	const baseForm = {
		contactReason,
		name,
		email: sanitizeHtml(email),
		message,
	};

	// Validate specific form types
	switch (contactReason) {
		case ContactReason.JOB:
			return {
				...baseForm,
				contactReason: ContactReason.JOB,
				employer: sanitizeHtml(
					validateRequiredField(formData.get('employer'), 'employer'),
				),
				compensation: sanitizeHtml(
					validateRequiredField(formData.get('compensation'), 'compensation'),
				),
				workingModel: validateRequiredField(
					formData.get('workingModel'),
					'workingModel',
				) as any,
				workingModelDescription: formData.get('workingModelDescription')
					? sanitizeHtml(String(formData.get('workingModelDescription')))
					: undefined,
				dogsAllowed: formData.get('dogsAllowed')
					? (String(formData.get('dogsAllowed')) as 'YES' | 'NO')
					: undefined,
				benefits: sanitizeHtml(
					validateRequiredField(formData.get('benefits'), 'benefits'),
				),
			};

		case ContactReason.FREELANCE:
			return {
				...baseForm,
				contactReason: ContactReason.FREELANCE,
				employer: sanitizeHtml(
					validateRequiredField(formData.get('employer'), 'employer'),
				),
				compensation: sanitizeHtml(
					validateRequiredField(formData.get('compensation'), 'compensation'),
				),
			};

		case ContactReason.HELLO:
			return {
				...baseForm,
				contactReason: ContactReason.HELLO,
			};

		default:
			throw new ContactFormValidationError(
				'Unsupported contact reason',
				'contactReason',
				'UNSUPPORTED_CONTACT_REASON',
			);
	}
}

/**
 * Formats field name for display in error messages
 * @param fieldName - The name of the field to format
 * @description Formats field name for display in error messages.
 * It converts camelCase to spaced lowercase and capitalizes the first letter.
 * @returns The formatted field name
 */
export function formatFieldName(fieldName: string): string {
	return fieldName
		.replace(/([A-Z])/g, ' $1')
		.toLowerCase()
		.replace(/^./, str => str.toUpperCase());
}
