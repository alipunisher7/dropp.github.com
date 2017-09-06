export interface ISettings {
  smsSender: boolean;
  exceptionOccurrenceEmail: boolean;
  weeklyEmailReport: boolean;
  dailyEmailReport: boolean;
  dailySmsReport: boolean;
  allowCompetitors: boolean;
  monthlyEmailReport: boolean;
  exceptionOccurrenceSms: boolean;
  weeklySmsReport: boolean;
  emailSender: boolean;
  PCriticalAndroidUpdate: string;
  PAndroidUpdate: string;
  DCriticalAndroidUpdate: string;
  DCriticalIOSUpdate: string;
  PIOSUpdate: string;
  PCriticalIOSUpdate: string;
  DAndroidUpdate: string;
  DIOSUpdate: string;
  usageCreditPerMin: number;
  usageCreditPerHour: number;
  usageCreditPerDay: number;
}
