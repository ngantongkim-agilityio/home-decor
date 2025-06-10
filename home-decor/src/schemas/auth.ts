import { z } from 'zod';

// Constants
import { ERROR_MESSAGES } from '@/constants';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: ERROR_MESSAGES.FIELD_REQUIRED('Email') })
    .email({ message: ERROR_MESSAGES.FIELD_INVALID('Email') }),
  password: z
    .string()
    .min(1, { message: ERROR_MESSAGES.FIELD_REQUIRED('Password') }),
});

export const SignupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, ERROR_MESSAGES.FIELD_REQUIRED('First Name'))
      .max(100)
      .trim(),
    lastName: z
      .string()
      .min(1, ERROR_MESSAGES.FIELD_REQUIRED('Last Name'))
      .max(100)
      .trim(),
    email: z
      .string()
      .min(1, { message: ERROR_MESSAGES.FIELD_REQUIRED('Email') })
      .email({ message: ERROR_MESSAGES.FIELD_INVALID('Email') }),
    password: z
      .string()
      .min(8)
      .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message: ERROR_MESSAGES.INVALID_PASSWORD,
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR_MESSAGES.MISMATCH_PASSWORD,
    path: ['confirmPassword'],
  });
