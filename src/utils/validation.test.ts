import {describe, it, expect} from 'vitest';
import {
	sanitizeHtml,
	isValidEmail,
	validateRequiredField,
} from '~/utils/validation';
import {ContactFormValidationError} from '~/types/contact';

describe('validation utilities', () => {
	describe('sanitizeHtml', () => {
		it('should escape HTML characters', () => {
			expect(sanitizeHtml('<script>alert("xss")</script>')).toBe(
				'&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;',
			);
		});

		it('should handle empty strings', () => {
			expect(sanitizeHtml('')).toBe('');
			expect(sanitizeHtml(null as any)).toBe('');
			expect(sanitizeHtml(undefined as any)).toBe('');
		});

		it('should escape all dangerous characters', () => {
			expect(sanitizeHtml('&<>"\'/')).toBe('&amp;&lt;&gt;&quot;&#x27;&#x2F;');
		});
	});

	describe('isValidEmail', () => {
		it('should validate correct email addresses', () => {
			expect(isValidEmail('test@example.com')).toBe(true);
			expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true);
			expect(isValidEmail('test123@test-domain.org')).toBe(true);
		});

		it('should reject invalid email addresses', () => {
			expect(isValidEmail('invalid')).toBe(false);
			expect(isValidEmail('@domain.com')).toBe(false);
			expect(isValidEmail('test@')).toBe(false);
			expect(isValidEmail('test@domain')).toBe(false);
			expect(isValidEmail('')).toBe(false);
		});
	});

	describe('validateRequiredField', () => {
		it('should return trimmed string for valid input', () => {
			expect(validateRequiredField('  hello  ', 'test')).toBe('hello');
			expect(validateRequiredField('valid input', 'test')).toBe('valid input');
		});

		it('should throw error for empty or missing values', () => {
			expect(() => validateRequiredField('', 'test')).toThrow(
				ContactFormValidationError,
			);
			expect(() => validateRequiredField('   ', 'test')).toThrow(
				ContactFormValidationError,
			);
			expect(() => validateRequiredField(null, 'test')).toThrow(
				ContactFormValidationError,
			);
			expect(() => validateRequiredField(undefined, 'test')).toThrow(
				ContactFormValidationError,
			);
		});

		it('should throw error for fields that are too long', () => {
			const longString = 'a'.repeat(5001); // Exceeds APP_CONFIG.validation.maxFieldLength
			expect(() => validateRequiredField(longString, 'test')).toThrow(
				ContactFormValidationError,
			);
		});
	});
});
