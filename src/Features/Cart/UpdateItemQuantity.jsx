import Button from '../../UI/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
    decreaseItemQuantity,
    getCurrentItemQuantity,
    increaseItemQuantity,
} from './cartSlice.js';

function UpdateItemQuantity({ pizzaId }) {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentItemQuantity(pizzaId));
    return (
        <div className={'flex items-center gap-2.5 md:gap-3'}>
            <Button
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
                type={'round'}
            >
                -
            </Button>
            <span className={'text-lg font-bold'}>{currentQuantity}</span>
            <Button
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
                type={'round'}
            >
                +
            </Button>
        </div>
    );
}

export default UpdateItemQuantity;
