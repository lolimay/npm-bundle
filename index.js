// full import (not recommended)
export { default as _ } from 'lodash'

// import on demand (recommended)
import { identity, map } from 'ramda'
export const R = { identity, map }
