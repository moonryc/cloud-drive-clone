import { showNotification } from '@mantine/notifications';
import { environment } from '../../environments/environment';

type DevToast = (message: string, loading?: boolean) => void;

export const devToast: DevToast = (message, loading = false) => {
  if (environment.production) {
    return;
  }

  showNotification({
    title: '⚠️  DEV-TOAST ⚠️',
    message,
    color: 'orange',
    radius: 'md',
  });
};
