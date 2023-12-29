import authReducer from './Reducers/authReducer';
import categoryReducer from './Reducers/categoryReducer';
import productReducer from './Reducers/EmplyeeReducer';
import sellerReducer from './Reducers/SupervisorReducer';
import dashboardIndexReducer from './Reducers/dashboardIndexReducer';

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    seller: sellerReducer,
    dashboardIndex: dashboardIndexReducer
}
export default rootReducer