export interface WaitlistFormData {
  name: string;
  email: string;
  companyName: string;
  role: string;
  countryCode: string;
  phoneNumber: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

