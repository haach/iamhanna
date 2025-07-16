export enum ContactReason {
	UNSET = 'UNSET',
	HELLO = 'HELLO',
	JOB = 'JOB',
	FREELANCE = 'FREELANCE',
}

export const CONTACT_REASON_LABELS = {
	[ContactReason.UNSET]: 'UNSET',
	[ContactReason.HELLO]: 'Just saying hi',
	[ContactReason.JOB]: 'Job opportunity',
	[ContactReason.FREELANCE]: 'Freelance project',
} as const;

export enum WorkingModel {
	REMOTE = 'REMOTE',
	HYBRID = 'HYBRID',
	OTHER = 'OTHER',
}

export const WORKING_MODEL_LABELS = {
	[WorkingModel.REMOTE]: 'Remote',
	[WorkingModel.HYBRID]: 'Hybrid',
	[WorkingModel.OTHER]: 'Other',
} as const;

export interface BaseContactForm {
	contactReason: ContactReason;
	name: string;
	email: string;
	message: string;
}

export interface JobOpportunityForm extends BaseContactForm {
	contactReason: ContactReason.JOB;
	employer: string;
	compensation: string;
	workingModel: WorkingModel;
	workingModelDescription?: string;
	dogsAllowed?: 'YES' | 'NO';
	benefits: string;
}

export interface FreelanceOpportunityForm extends BaseContactForm {
	contactReason: ContactReason.FREELANCE;
	employer: string;
	compensation: string;
}

export interface HelloForm extends BaseContactForm {
	contactReason: ContactReason.HELLO;
}

export type ContactForm =
	| JobOpportunityForm
	| FreelanceOpportunityForm
	| HelloForm;

export interface EmailTemplate {
	to: string;
	from: string;
	subject: string;
	text: string;
	html: string;
}

export class ContactFormValidationError extends Error {
	constructor(
		message: string,
		public field?: string,
		public code?: string,
	) {
		super(message);
		this.name = 'ContactFormValidationError';
	}
}

export class EmailSendingError extends Error {
	constructor(
		message: string,
		public statusCode?: number,
		public originalError?: unknown,
	) {
		super(message);
		this.name = 'EmailSendingError';
	}
}
