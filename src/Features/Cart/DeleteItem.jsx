import Button from '../../UI/Button.jsx';
import { deleteItem } from './cartSlice.js';
import { useDispatch } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';

function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    return (
        <Trans>
            <Button onClick={() => dispatch(deleteItem(pizzaId))} type="cart">
                {t('deleteItemFromCart')}
            </Button>
        </Trans>
    );
}

export default DeleteItem;
