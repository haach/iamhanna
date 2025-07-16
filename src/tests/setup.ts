import {afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});

// Mock environment variables for tests
process.env.NODE_ENV = 'test';

// Silence console.log during tests unless explicitly needed
const originalConsoleLog = console.log;
console.log = () => {};

// Restore console.log if needed (for debugging specific tests)
export const restoreConsoleLog = () => {
	console.log = originalConsoleLog;
};
