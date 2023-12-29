import { formatCurrency } from '../../Utils/helpers.js';
import Button from '../../UI/Button.jsx';
import { FaCartArrowDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentItemQuantity } from '../Cart/cartSlice.js';
import DeleteItem from '../Cart/DeleteItem.jsx';
import UpdateItemQuantity from '../Cart/UpdateItemQuantity.jsx';
import { Trans, useTranslation } from 'react-i18next';

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentItemQuantity(id));
    const isItemInCart = currentQuantity > 0;
    const { t } = useTranslation();

    function handleAddPizza() {
        const newPizzaItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
            imageUrl,
        };
        dispatch(addItem(newPizzaItem));
    }

    return (
        <li className={'flex gap-4 py-2'}>
            <img
                className={`h-32 w-auto ${
                    soldOut ? 'opacity-70 grayscale' : ''
                }`}
                src={imageUrl}
                alt={name}
            />

            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className={'text-sm'}>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {isItemInCart && (
                        <div className={'flex items-center gap-2.5 md:gap-3'}>
                            <UpdateItemQuantity pizzaId={id} />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}
                    {!soldOut && !isItemInCart && (
                        <Trans>
                            <Button type={'cart'} onClick={handleAddPizza}>
                                <FaCartArrowDown />
                                {t('buttonOfCart')}
                            </Button>
                        </Trans>
                    )}
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
