import LinkedButton from '../../UI/LinkedButton.jsx';
import { Trans, useTranslation } from 'react-i18next';

function EmptyCart() {
    const { t } = useTranslation();

    function transHandler(keyName) {
        return <Trans>{t(`${keyName}`)}</Trans>;
    }

    return (
        <div className={'w-full'}>
            <LinkedButton to="/menu">
                &larr; {transHandler('backToMenuButton')}
            </LinkedButton>

            <p className={'mt-5 text-xl font-bold tracking-widest'}>
                {transHandler('emptyCartText')}
            </p>
        </div>
    );
}

export default EmptyCart;
