import { formatCurrency } from '../../Utils/helpers.js';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="space-y-4 py-3">
            <div className="flex items-center justify-between gap-4 text-xl">
                <p>
                    <span className="font-bold">{quantity}&times;</span> {name}
                </p>
                <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div>
            <p className={'text-lg capitalize italic text-stone-500'}>
                {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
            </p>
        </li>
    );
}

export default OrderItem;
