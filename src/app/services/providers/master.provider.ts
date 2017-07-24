import { API_URL } from 'configs';
const masterApi = `${API_URL}/master`;

export class MasterApi {

  public insertOperatorUrl = `${masterApi}/operators`;
  public removeOperatorUrl = (operatorId) => `${masterApi}/operators/${operatorId}`;

  public insertTicketSubjectUrl = `${masterApi}/ticketSubjects`;
  public getTicketSubjectsUrl = `${masterApi}/ticketSubjects`;

  public insertVoucherUrl = `${masterApi}/vouchers`;
  public getVouchersUrl = `${masterApi}/vouchers`;
  public searchOperatorsUrl = `${masterApi}/operators`;
  public banOperatorUrl = `${masterApi}/banOperator`;
  public unBanOperatorUrl = `${masterApi}/unBanOperator`;
}
