# I am hanna - portfolio

![i am hanna preview](https://repository-images.githubusercontent.com/476819218/92624caf-77dd-4725-b156-d450aab267e3)

## Tech stack

React on Remix and deployed to vercel. For my CSS I used Tailwind and some React Icons.

## Recent Improvements (2025)

This project underwent a comprehensive refactoring to improve code quality, maintainability, and error handling:

### 🔧 Code Quality Improvements

- **Proper TypeScript types** for all contact form data and email handling
- **Separation of concerns** with dedicated services and utilities
- **Consistent error handling** with custom error classes and logging
- **Input validation and sanitization** with proper security measures
- **Configuration management** through centralized constants

### 📧 Email Service Refactoring

- Extracted email logic into dedicated service (`src/services/emailService.ts`)
- Improved email template generation with better HTML structure
- Better error handling for SendGrid API failures
- Proper environment variable validation

### 🛡️ Security & Validation

- HTML sanitization to prevent XSS attacks
- Email format validation with robust regex
- Field length limits to prevent abuse
- Proper form data validation with detailed error messages

### 🏗️ Architecture

- **Services layer**: `src/services/` for business logic
- **Types**: `src/types/` for TypeScript definitions
- **Utils**: `src/utils/` for shared utilities
- **Hooks**: `src/hooks/` for reusable React logic

## Development

To run Remix locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

### Environment Variables

Create a `.env` file with the following variables for the contact form to work:

```env
APIKEY=your_sendgrid_api_key
EMAIL_FROM=from@yourdomain.com
EMAIL_TO=to@yourdomain.com
```
