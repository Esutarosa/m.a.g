import { createToast } from 'vercel-toast';

import 'vercel-toast/css';

const DEFAULT_DURATION = 4000;

export const toastSuccess = (
  message: string | HTMLElement,
  duration = DEFAULT_DURATION,
) => createToast(message, {
  timeout: duration,
  type: 'success',
  action: {
    text: 'OK',
    callback(toast) {
      toast.destroy();
    },
  },
});

export const toastWarning = (
  message: string | HTMLElement,
  duration = DEFAULT_DURATION,
) => createToast(message, {
  timeout: duration,
  type: 'warning',
  action: {
    text: 'OK',
    callback(toast) {
      toast.destroy();
    },
  },
});

export const toastError = (
  message: string | HTMLElement,
  duration = DEFAULT_DURATION,
) => createToast(message, {
  timeout: duration,
  type: 'error',
  action: {
    text: 'OK',
    callback(toast) {
      toast.destroy();
    },
  },
});