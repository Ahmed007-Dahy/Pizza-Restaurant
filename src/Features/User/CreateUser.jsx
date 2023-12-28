import { useState } from 'react';
import Button from '../../UI/Button.jsx';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice.js';
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

function CreateUser() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleSubmit(e) {
        e.preventDefault();
        if (!username) return;
        dispatch(updateName(username));
        navigate('/menu');
        setUsername('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className={'mb-4 text-sm text-teal-600 md:text-base'}>
                <Trans>{t('headingOfCreateUser')}</Trans>
            </p>

            <input
                className={'input mb-4'}
                type="text"
                placeholder={t('placeholderOfCreateUser')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && username.length >= 3 && (
                <div className={'flex justify-center'}>
                    <Trans>
                        <Button type={'primary'}>
                            {t('buttonOfCreateUser')}
                        </Button>
                    </Trans>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
