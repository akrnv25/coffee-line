import { PUBLIC_API_URL } from '$env/static/public';
import type { HttpResponse } from '$lib/interfaces/http-response';
import type { Coffee } from '$lib/api/coffee/coffee';

export const coffeeCollection = {
  getById: (id: number): Promise<HttpResponse<Coffee>> => fetch(`${PUBLIC_API_URL}/coffee/${id}`)
    .then(r => r.json())
    .then(r => !r.error ? { data: r } : { error: r.error })
};
