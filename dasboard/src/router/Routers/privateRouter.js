const {adminRoute} = require('./adminRouter');
const {SellerRoute} = require('./SellerRouter');

export const privateRoute = [
    ...adminRoute,
    ...SellerRoute,
];
