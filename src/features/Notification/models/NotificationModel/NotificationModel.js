import { observable, action } from 'mobx';


export class NotificationModel {
    @observable notifications = [];

    @action setNotification = ({ id, type, message }) => {
      this.notifications.push({ id, type, message });
    }

    @action unsetNotification = (_id) => {
      this.notifications.filter(({ id }) => id !== _id);
    }

    @action clearAllNotifications = () => {
      this.notifications = [];
    }
}
