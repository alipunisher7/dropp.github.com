export interface IServiceType {
  ECO: Number
  LUX: Number
  MOTOR_DELIVERY: Number
  MOTOR_TRANSPORT: Number
  NORMAL: Number
  SUV: Number
  TAXI: Number
}

export class ServiceType {
  public ECO: Number
  public LUX: Number
  public MOTOR_DELIVERY: Number
  public MOTOR_TRANSPORT: Number
  public NORMAL: Number
  public SUV: Number
  public TAXI: Number;

  constructor(serviceType: IServiceType | any) {
    this.ECO = serviceType.ECO || 0;
    this.LUX = serviceType.LUX || 0;
    this.MOTOR_DELIVERY = serviceType.MOTOR_DELIVERY || 0;
    this.MOTOR_TRANSPORT = serviceType.MOTOR_TRANSPORT || 0;
    this.NORMAL = serviceType.NORMAL || 0;
    this.SUV = serviceType.SUV || 0;
    this.TAXI = serviceType.TAXI || 0;
  }

}
