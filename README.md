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


## Know Issues

1. `import` syntax is not supported for importing `deps.ts`, use `const deps = require('./deps')` instead.

The potential reasons is that TypeScript use `__importStart` as a wrapper for module importing, that would cause the conflicts with rollup bundle.
