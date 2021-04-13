Hods - Pagination
===

Component to allow separating long tables into separate tables


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/pagination
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Pagination from '@hods/pagination';

export const MyComponent = props => (
  <Pagination
    results="[number_of_results]"
    resultsPerPage="[number_of_results_in_each_page]"
    page="[page_currently_viewed]"
  />
);

export default MyComponent;
```


Working on this package
-----------------------

Before working on this package you must install its dependencies using
the following command:

```shell
pnpm install
```


### Testing

```shell
npm test
```


### Building

```shell
npm run build
```


### Clean-up

```shell
npm run clean
```
