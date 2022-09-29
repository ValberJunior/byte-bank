export interface ITransactionParams {
  id?: number | string;
  value: number;
  destination: string | number;
  data?: string | Date
}
