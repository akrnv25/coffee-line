export interface HttpResponse<T> {
  data?: T;
  error?: { code: number; text: string };
}
