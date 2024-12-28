import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import ProductReducer from './ProductReducer'
import OrderReducer from './OrderReducer'


const rootReducers = combineReducers({
    products: ProductReducer,
    orders: OrderReducer,
    form : reduxForm
})
  
export default rootReducers