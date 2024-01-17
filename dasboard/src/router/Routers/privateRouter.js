const {adminRoute} = require('./adminRouter');
const {employeeRoutes} =require('./employeeRouter')

export const privateRoute = [
    ...adminRoute,
    ...employeeRoutes
    
];
