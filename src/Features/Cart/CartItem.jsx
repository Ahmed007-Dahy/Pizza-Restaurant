import { formatCurrency } from '../../Utils/helpers.js';
import DeleteItem from './DeleteItem.jsx';
import UpdateItemQuantity from './UpdateItemQuantity.jsx';

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice, imageUrl } = item;

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <img className={`h-32 w-auto`} src={imageUrl} alt={name} />
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className=" flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateItemQuantity pizzaId={pizzaId} />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    );
}

export default CartItem;
