import { createOrder } from '../../Services/apiRestaurant.js';
import { redirect } from 'react-router-dom';
import store from '../../store.jsx';
import { clearCart } from '../Cart/cartSlice.js';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,9}$/.test(
        str,
    );

export async function actionOrder({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const processedOrder = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'true',
    };
    const errorsMsg = {};
    if (!isValidPhone(processedOrder.phone)) {
        errorsMsg.phone = 'You must Enter valid phone number';
    }
    if (Object.keys(errorsMsg).length > 0) return errorsMsg;

    const newOrder = await createOrder(processedOrder);
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);
}
