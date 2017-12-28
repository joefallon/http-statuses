# http-statuses

An easy to use [HTTP statuses](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) 
utility for common HTTP status codes written in [TypeScript](https://www.typescriptlang.org/).

By [Joe Fallon](http://blog.joefallon.net)

http-statuses has the following features:

*   Full suite of unit tests
*   Can be fully understood in just a few moments
*   Written in TypeScript

## Installation

The easiest way to install MyDAL is with npm. 

```
npm install http-statuses --save
```

## Usage

```typescript
import HttpStatuses from 'http-statuses';

console.log(HttpStatuses.SUCCESS_200_OK);            //--> 200
console.log(HttpStatuses.SUCCESS_201_CREATED);       //--> 201
console.log(HttpStatuses.SUCCESS_204_NO_CONTENT);    //--> 204
console.log(HttpStatuses.REDIRECT_301_MOVED_PERM);   //--> 301
console.log(HttpStatuses.REDIRECT_302_FOUND);        //--> 302
console.log(HttpStatuses.REDIRECT_304_NOT_MODIFIED); //--> 304
console.log(HttpStatuses.ERR_400_BAD_REQUEST);       //--> 400
console.log(HttpStatuses.ERR_401_UNAUTHORIZED);      //--> 401
console.log(HttpStatuses.ERR_403_FORBIDDEN);         //--> 403
console.log(HttpStatuses.ERR_404_NOT_FOUND);         //--> 404
console.log(HttpStatuses.ERR_409_CONFLICT);          //--> 409
console.log(HttpStatuses.ERR_500_SERVER_ERR);        //--> 500

console.log(HttpStatuses.getMessage(HttpStatuses.SUCCESS_200_OK));            //--> OK
console.log(HttpStatuses.getMessage(HttpStatuses.SUCCESS_201_CREATED));       //--> Created
console.log(HttpStatuses.getMessage(HttpStatuses.SUCCESS_204_NO_CONTENT));    //--> No Content
console.log(HttpStatuses.getMessage(HttpStatuses.REDIRECT_301_MOVED_PERM));   //--> Moved Permanently
console.log(HttpStatuses.getMessage(HttpStatuses.REDIRECT_302_FOUND));        //--> Found
console.log(HttpStatuses.getMessage(HttpStatuses.REDIRECT_304_NOT_MODIFIED)); //--> Not Modified
console.log(HttpStatuses.getMessage(HttpStatuses.ERR_400_BAD_REQUEST));       //--> Bad Request
console.log(HttpStatuses.getMessage(HttpStatuses.ERR_401_UNAUTHORIZED));      //--> Unauthorized
console.log(HttpStatuses.getMessage(HttpStatuses.ERR_403_FORBIDDEN));         //--> Forbidden

console.log(HttpStatuses.getMessage(HttpStatuses.ERR_404_NOT_FOUND));         //--> Not Found
console.log(HttpStatuses.getMessage(HttpStatuses.ERR_409_CONFLICT));          //--> Conflict
console.log(HttpStatuses.getMessage(HttpStatuses.ERR_500_SERVER_ERR));        //--> Internal Server Error

```