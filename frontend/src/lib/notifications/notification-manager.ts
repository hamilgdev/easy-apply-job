import Toastify from 'toastify-js';

type NotificationType = 'default' | 'destructive' | 'success';

interface NotificationManagerProps {
  message: string;
  type?: NotificationType;
}

const notificationManagerStyle = (type: NotificationType) => {
  if (type === 'default') {
    return {
      color: '#1f2937',
      background: '#e5e7eb',
    }
  }

  if (type === 'destructive') {
    return {
      color: '#fef2f2',
      background: '#f87171',
    }
  }

  if (type === 'success') {
    return {
      color: '#f0fdf4',
      background: '#10b981',
    }
  }
}

export const NotificationManager = ({ message, type = 'default' }:
  NotificationManagerProps) => {
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'center',
    style: notificationManagerStyle(type),
  }).showToast();
};
