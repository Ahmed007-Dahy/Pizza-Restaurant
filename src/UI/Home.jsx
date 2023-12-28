import CreateUser from '../Features/User/CreateUser.jsx';
import { useSelector } from 'react-redux';
import Button from './Button.jsx';
import { Trans, useTranslation } from 'react-i18next';

function Home() {
    const userName = useSelector((state) => state.user.username);
    const { t } = useTranslation();

    return (
        <div className={'my-10 px-4 py-10 text-center sm:my-16'}>
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                <Trans>{t('headerHome')}</Trans>
                <br />
                <span className="text-teal-600">
                    <Trans>{t('descriptionOfHeader')}</Trans>
                </span>
            </h1>
            {userName === '' ? (
                <CreateUser />
            ) : (
                <Button type={'primary'} to={'/menu'}>
                    <Trans>{t('continueOrderingButton')}</Trans> {userName}
                </Button>
            )}
        </div>
    );
}

export default Home;
