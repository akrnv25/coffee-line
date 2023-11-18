// todo: use env variables
export const coffeeCollection = {
  getById: (id) => fetch(`http://localhost:3200/api/coffee/${id}`)
    .then(r => r.json())
    .then(r => !r.error ? { data: r } : { error: r.error })
};
