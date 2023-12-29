import LinkedButton from '../../UI/LinkedButton.jsx';
import Button from '../../UI/Button.jsx';
import CartItem from './CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice.js';
import { getUsername } from '../User/userSlice.js';
import EmptyCart from './EmptyCart.jsx';
import { Trans, useTranslation } from 'react-i18next';

function Cart() {
    const username = useSelector(getUsername);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    if (!cart.length) {
        return <EmptyCart />;
    }

    function transHandler(keyName) {
        return <Trans>{t(`${keyName}`)}</Trans>;
    }

    return (
        <div className="px-4 py-3">
            <LinkedButton to={'/menu'}>
                &larr;{transHandler('backToMenuButton')}
            </LinkedButton>

            <h2 className="mt-7 text-xl font-semibold">
                {transHandler('yourCart')}, {username}
            </h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>
            <div className="mt-6 flex space-x-2">
                <Button type={'primary'} to="/order/new">
                    {transHandler('orderPizza')}
                </Button>
                <Button
                    onClick={() => {
                        // dispatch(clearName());
                        dispatch(clearCart());
                    }}
                    type={'primary'}
                >
                    {transHandler('clearCart')}
                </Button>
            </div>
        </div>
    );
}

export default Cart;
