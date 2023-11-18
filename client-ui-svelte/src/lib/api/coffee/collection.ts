import { PUBLIC_API_URL } from '$env/static/public';

export const coffeeCollection = {
  getById: (id) => fetch(`${PUBLIC_API_URL}/coffee/${id}`)
    .then(r => r.json())
    .then(r => !r.error ? { data: r } : { error: r.error })
};
