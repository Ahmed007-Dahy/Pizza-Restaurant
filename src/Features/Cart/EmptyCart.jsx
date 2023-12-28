import LinkedButton from '../../UI/LinkedButton.jsx';

function EmptyCart() {
    return (
        <div className={'w-full'}>
            <LinkedButton to="/menu">&larr; Back to menu</LinkedButton>

            <p className={'mt-5 text-xl font-bold tracking-widest'}>
                Your cart is still empty. Start adding some pizzas :)
            </p>
        </div>
    );
}

export default EmptyCart;
