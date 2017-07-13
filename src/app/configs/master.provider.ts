import { API_URL } from './api.provider';

export class MasterApi {
  private masterApi = `${API_URL}/master`;

  public insertOperator = `${this.masterApi}/operators`;
  public removeOperator = (operatorId) => `${this.masterApi}/operators/${operatorId}`;
  public getTarrifUrl = `${this.masterApi}/ticketSubjects`;
  public insertTicketSubjectUrl = `${this.masterApi}/ticketSubjects`;
}
