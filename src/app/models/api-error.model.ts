export interface IApiStatus {
  statusCode: string;
  status: string;
}

export class ApiError {
  public status: string;
  public code: number;

  constructor(public url: string, status: IApiStatus) {
    this.status = status.status;
    this.code = parseInt(status.statusCode);
  }
}
