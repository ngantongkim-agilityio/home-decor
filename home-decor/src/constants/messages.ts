export const ERROR_MESSAGES = {
  DEFAULT_ERROR: 'Something went wrong. Please try again later',
  INVALID_CREDENTIALS: 'Invalid credentials.',
  USER_EXISTS: 'User already exists with this email address',

  // Validate
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  FIELD_INVALID: (fieldName: string) => `Invalid ${fieldName}`,
  INVALID_PASSWORD:
    'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number',
  MISMATCH_PASSWORD: 'Passwords do not match',
};
