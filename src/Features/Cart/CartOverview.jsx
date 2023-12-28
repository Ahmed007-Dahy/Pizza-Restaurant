import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice.js';
import { formatCurrency } from '../../Utils/helpers.js';
import LinkedButton from '../../UI/LinkedButton.jsx';
import { Trans, useTranslation } from 'react-i18next';

function CartOverview() {
    const totalQuantityPizza = useSelector(getTotalCartQuantity);
    const totalPricePizza = useSelector(getTotalCartPrice);
    const { t } = useTranslation();
    if (!totalQuantityPizza) return null;
    return (
        <div className={'cartOverview'}>
            <p
                className={
                    'space-x-4 font-semibold text-stone-300 sm:space-x-6'
                }
            >
                <span>{totalQuantityPizza} pizzas</span>
                <span>{formatCurrency(totalPricePizza)}</span>
            </p>
            <LinkedButton to={'/cart'}>
                <Trans>{t('openCartButton')}</Trans> &rarr;
            </LinkedButton>
        </div>
    );
}

export default CartOverview;
