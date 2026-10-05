export const ApiErrors = {
  INVALID_OTP: "invalid_otp",
} as const;

export type ApiErrorCode = typeof ApiErrors[keyof typeof ApiErrors];
