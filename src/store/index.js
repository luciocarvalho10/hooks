import { allReducer } from "./reducers/index"

const initializer = {
  user: null,
  cart: [],
  products: [],
  number: 0, //foco...
}

export { initializer, allReducer}