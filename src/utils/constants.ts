export enum STORAGE_ITEMS {
	CV_SECTIONS = 'CV_SECTIONS',
	DARK_MODE = 'DARK_MODE',
}

export const APP_CONFIG = {
	// Environment
	isDevelopment: process.env.NODE_ENV === 'development',
	isProduction: process.env.NODE_ENV === 'production',

	// Email configuration
	email: {
		apiKey: process.env.APIKEY,
		fromEmail: process.env.EMAIL_FROM,
		toEmail: process.env.EMAIL_TO,
	},

	// Form validation
	validation: {
		maxFieldLength: 5000,
		maxEmailLength: 254,
		requiredFields: {
			common: ['contactReason', 'name', 'email', 'message'],
			job: ['employer', 'compensation', 'workingModel', 'benefits'],
			freelance: ['employer', 'compensation'],
		},
	},

	// URLs
	urls: {
		github: 'https://github.com/haach',
		linkedin: 'https://www.linkedin.com/in/hanna-achenbach/',
		codewars: 'https://www.codewars.com/users/haach',
	},
} as const;
