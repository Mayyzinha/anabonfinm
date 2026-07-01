import { type ClassValue, clsx } from 'clsx';

// Mantém classes condicionais organizadas. O fallback evita depender de libs extras em runtime.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
