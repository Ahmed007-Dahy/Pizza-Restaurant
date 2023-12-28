import { Link } from 'react-router-dom';
import SearchOrder from '../Features/Order/SearchOrder.jsx';
import UserName from '../Features/User/UserName.jsx';
import TranslateBox from './TranslateBox.jsx';
import { Trans, useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return (
        <header className={'header'}>
            <Trans>
                <Link
                    className={'text-xl font-bold tracking-widest outline-none'}
                    to={'/'}
                >
                    {t('logo')}
                </Link>
            </Trans>
            <SearchOrder />
            <TranslateBox />
            <UserName />
        </header>
    );
}

export default Header;
