const { request, createAxiosInstance } = require('../dist');

(async () => {
  await request(
    createAxiosInstance({
      baseURL: 'https://my-expenses-sand.vercel.app/api',
    })
  )
    .get('/expenses', {
      headers: { 'content-type': 'application/json' },
    })
    .retry()
    .whenTimeoutError()
    .debugger()
    .whenAnyError((response) => {
      console.log({
        ...response.data,
      });
    })
    .debugger();
})();
