export interface ContactFormProps {
  isSend?: boolean;
  loading?: boolean;
  onSubmit: (name: string, email: string, message: string) => void | Promise<void>;
}
