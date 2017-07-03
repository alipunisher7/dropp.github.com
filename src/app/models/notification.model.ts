export enum NotificationTypes {
  success,
  warning,
  error
}

export interface INotification {
  type: NotificationTypes;
  title: string;
  info: string;
  time?: number;
  undo?: boolean;
}

export class Notification {
  private static numer = 0;
  private _type: NotificationTypes;

  public get typeName(): string {
    return NotificationTypes[this._type];
  };

  public set type(value: NotificationTypes) {
    this._type = value;
  }

  public title: string;
  public info: string;
  public time?: number;
  public undo?: boolean;
  public in: boolean;

  constructor(notification: INotification) {
    this.type = notification.type;
    this.info = notification.info;
    this.title = notification.title;
    this.in = true;
    this.time = notification.time || 2000;
    this.undo = notification.undo || false;
  }
}
