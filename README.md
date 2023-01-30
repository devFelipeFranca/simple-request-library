# simple-request-library

A simple way to making HTTP requests based on axios no try catch.

Return example:
```json
{
  "success": true,
  "code": 200,
  "description": "OK",
  "headers": {},
  "data": {}
}
```


# Installation

npm:
	`npm install simple-request-library` 
	
yarn:
	`yarn add simple-request-library` 
	
pnpm:
	`pnpm install simple-request-library` 

# How to use

Examples:

- Commonjs
> provider.js
```javascript
const { request } = require("simple-request-library");

class ProviderExample {

  static instance;

  static getInstance() {
    if (!UserController.instance) {
        UserController.instance = new UserController();
    }
    return UserController.instance;
  }


  async index() {
    return request().get("http://url.exemple.com");
  }

  async create(body) {
    return request().post("http://url.exemple.com").send({
      ...body
    });
  }

  async search(searchObject) {
    return request().post("http://url.exemple.com", {
      statusCode: 200,
      headers: {"Content-Type": "application/json"}
      // ...another configs
    }).send({
      ...searchObject
    });
  }

  async update(body) {
    return request().put("http://url.exemple.com").send({
      ...body
    });
  }

  async updatePartial(body) {
    return request().patch("http://url.exemple.com").send({
      ...body
    });   
  }

  async remove(id) {
    return request().delete(`http://url.exemple.com/${id}`);
  }
}

module.exports = ProviderExample.getInstance();
```

- ES modules
> provider.js
```typescript
import { request } from "simple-request-library";

export const index = async () => request().get("http://url.exemple.com");

export const create = async (body) => request().post("http://url.exemple.com").send({
  ...body
});

export const search = async (searchObject) => request().post("http://url.exemple.com", {
    statusCode: 200,
    headers: {"Content-Type": "application/json"}
    // ...another configs
  }).send({
    ...searchObject
  });

export const update = async (body) => request().put("http://url.exemple.com").send({
  ...body
});

export const updatePartial = async (body) => request().patch("http://url.exemple.com").send({
  ...body
});

export const remove = async (id) => request().delete(`http://url.exemple.com/${id}`);
```
- AxiosInstance example:
> api.ts
```typescript
import { request, createAxiosInstance } from "simple-request-library";

const instance = createAxiosInstance({ 
  baseURL:  'https://some-domain.com/api/',
  timeout:  1000,
  headers:  {'X-Custom-Header':  'foobar'} 
});

export const { get, post, put, patch, delete } = request(instance)
```

To more infos about AxiosInstance follow the official documentation: https://axios-http.com/docs/instance

# Retry method
- You can set a time to retry the same request. (time default is 1 second)
> provider.ts
```typescript
import { request } from "simple-request-library";

const getAllExpenseHistoric = async (searchParams) => {
  return request().post("http://url.exemple.com").send({
    ...searchParams
  }).retry().whenTimeoutError(10e3 /* 10 seconds to retry */)
}
```
Another "when" methods:

- whenInternalServerError()
- whenServiceUnavailableError()

# whenAnyError method
- When passing a callback, you will receive the response as a parameter and you can manipulate it as you prefer, being able to return the same.
> provider.ts
```typescript
import { request } from "simple-request-library";

const index = async () => request().get("http://url.exemple.com")
    .whenAnyError((response) => {
      /*
        Do anything with response...
      */
      return response
    })
```
# debugger method
- The debugger method will show a `console.debug()` with information about the Promise of the last method and show a `console.time()` containing the resolution time.
> provider.ts
```typescript
import { request } from "simple-request-library";

const index = async () => request().get("http://url.exemple.com").debugger()
```