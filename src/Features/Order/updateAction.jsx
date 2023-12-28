import { updateOrder } from '../../Services/apiRestaurant.js';

export async function updateAction({ params }) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    
    return null;
}
