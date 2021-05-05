# Rocket.Chat Apps NPM Bundle Example

## Get Started

First of all, install the dependencies by the comamnd:

```bash
npm i # install dependencies
```

Then, run the command to bundle npm dependencies:

```bash
npm start # bundle npm dependencies into deps.ts
```

You will notice that a new file called `deps.ts` was generated in the root folder.

import it in your mainClass file and use it!

```js
...
const { _ } = require('./deps.ts')
...
console.log(_.VERSION, _.toUpper('abcd'))
...
```

Edit `.rcappsconfig` and replace username and password to your own, the run the command

```bash
rc-apps deploy
```

to check the result!

## Add new dependencies

NOTE: Currently, only utilities libs are supported, like Ramda, moment.js etc.

1. First, install one of the dependencies you want with, here we use Ramda as an example:

```
npm i lodash
```

2. Then, re-export it in the `index.js` file so that we can bundle it into `deps.ts` later:

```js
// index.js
export { default as _ } from 'lodash'
```

3. Lastly, import it in your source file by:

```
const { _ } = require('./deps');
console.log(_.VERSION, _.range(1, 100));
```

4. Deploy the app to check whether it works:

```
npm start
```

and you will see the following message in the terminal:

```
I20210505-22:40:49.479(8)?
I20210505-22:40:52.949(8)? 4.17.21 [
I20210505-22:40:52.949(8)?    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
I20210505-22:40:52.949(8)?   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
I20210505-22:40:52.949(8)?   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
I20210505-22:40:52.949(8)?   37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
I20210505-22:40:52.949(8)?   49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
I20210505-22:40:52.949(8)?   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
I20210505-22:40:52.949(8)?   73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
I20210505-22:40:52.950(8)?   85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
I20210505-22:40:52.950(8)?   97, 98, 99
I20210505-22:40:52.950(8)? ]
```


## Know Issues

1. `import` syntax is not supported for importing `deps.ts`, use `const deps = require('./deps')` instead.

The potential reasons is that TypeScript use `__importStart` as a wrapper for module importing, that would cause the conflicts with rollup bundle.
