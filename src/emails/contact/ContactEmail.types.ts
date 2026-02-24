export interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactEmailTemplate {
  subject: string;
  text: string;
  html: string;
}
