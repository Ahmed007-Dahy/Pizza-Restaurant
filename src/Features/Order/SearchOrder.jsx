import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SearchOrder() {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleSubmit(e) {
        e.preventDefault();
        if (!searchInput) return;
        navigate(`/order/${searchInput}`);
        setSearchInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={'input w-64'}
                type="search"
                placeholder={t('placeholder')}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </form>
    );
}

export default SearchOrder;
