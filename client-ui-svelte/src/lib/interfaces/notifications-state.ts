import type { NotificationEvent } from '../enums/notification-event';
import type { Notification } from './notification';

export interface NotificationsState {
  items: Notification[];
  event: NotificationEvent;
}
