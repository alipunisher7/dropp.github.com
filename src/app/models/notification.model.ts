export enum NotificationTypes {
  success,
  warning,
  error
}

export interface INotification {
  type: NotificationTypes;
  title: String;
  info: String;
  time?: Number;
  undo?: Boolean;
}

export class Notification {
  private static numer = 0;
  private _type: NotificationTypes;

  public get typeName(): String {
    return NotificationTypes[this._type];
  };

  public set type(value: NotificationTypes) {
    this._type = value;
  }

  public title: String;
  public info: String;
  public time?: Number;
  public undo?: Boolean;
  public in: Boolean;

  constructor(notification: INotification) {
    this.type = notification.type;
    this.info = notification.info;
    this.title = notification.title;
    this.in = true;
    this.time = notification.time || 2000;
    this.undo = notification.undo || false;
  }
}
