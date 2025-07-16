export class AppError extends Error {
	constructor(
		message: string,
		public statusCode: number = 500,
		public code?: string,
		public originalError?: unknown,
	) {
		super(message);
		this.name = 'AppError';
	}
}

export class ValidationError extends AppError {
	constructor(
		message: string,
		public field?: string,
		code?: string,
	) {
		super(message, 400, code);
		this.name = 'ValidationError';
	}
}

export class NetworkError extends AppError {
	constructor(
		message: string,
		statusCode: number = 503,
		originalError?: unknown,
	) {
		super(message, statusCode, 'NETWORK_ERROR', originalError);
		this.name = 'NetworkError';
	}
}

/**
 * Logs error with appropriate level and context
 * @param error - The error to log
 * @param context - Optional context for the error
 */
export function logError(error: unknown, context?: string): void {
	const timestamp = new Date().toISOString();
	const contextStr = context ? `[${context}] ` : '';

	if (error instanceof AppError) {
		console.error(`${timestamp} ${contextStr}${error.name}: ${error.message}`, {
			statusCode: error.statusCode,
			code: error.code,
			originalError: error.originalError,
		});
	} else if (error instanceof Error) {
		console.error(`${timestamp} ${contextStr}${error.name}: ${error.message}`, {
			stack: error.stack,
		});
	} else {
		console.error(`${timestamp} ${contextStr}Unknown error:`, error);
	}
}

/**
 * Formats error for user display (without sensitive information)
 * @param error - The error to format for user display (without sensitive information)
 * @returns An object containing the title and message for the error
 */
export function formatErrorForUser(error: unknown): {
	title: string;
	message: string;
	showDetails: boolean;
} {
	if (error instanceof ValidationError) {
		return {
			title: 'Validation Error',
			message: error.message,
			showDetails: process.env.NODE_ENV === 'development',
		};
	}

	if (error instanceof NetworkError) {
		return {
			title: 'Connection Problem',
			message: 'Unable to connect to our services. Please try again later.',
			showDetails: process.env.NODE_ENV === 'development',
		};
	}

	if (error instanceof AppError) {
		return {
			title: 'Application Error',
			message:
				error.statusCode >= 500
					? 'An internal error occurred. Please try again later.'
					: error.message,
			showDetails: process.env.NODE_ENV === 'development',
		};
	}

	if (error instanceof Error) {
		return {
			title: 'Unexpected Error',
			message:
				process.env.NODE_ENV === 'development'
					? error.message
					: 'Something went wrong. Please try again later.',
			showDetails: process.env.NODE_ENV === 'development',
		};
	}

	return {
		title: 'Unknown Error',
		message: 'An unexpected error occurred. Please try again later.',
		showDetails: false,
	};
}
