export interface IServiceType {
  ECO: number
  LUX: number
  MOTOR_DELIVERY: number
  MOTOR_TRANSPORT: number
  NORMAL: number
  SUV: number
  TAXI: number
}

export class ServiceType {
  public ECO: number
  public LUX: number
  public MOTOR_DELIVERY: number
  public MOTOR_TRANSPORT: number
  public NORMAL: number
  public SUV: number
  public TAXI: number;

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
