import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function TranslateBox() {
    const [optionValue, setOptionValue] = useState(
        localStorage.getItem('LANG') || 'en',
    );
    const { i18n } = useTranslation();

    useEffect(() => {
        localStorage.setItem('LANG', optionValue);
        i18n.changeLanguage(optionValue);
    }, [optionValue, i18n]);

    function changeLanguages(e) {
        setOptionValue(e.target.value);
        i18n.changeLanguage(optionValue);
    }

    return (
        <div>
            <label className={'text-center'} htmlFor="lang">
                &nbsp;
            </label>
            <select
                value={optionValue}
                onChange={changeLanguages}
                className={
                    ' rounded-2xl bg-teal-800 px-3 py-1.5 text-white outline-none'
                }
                name="languages"
                id="lang"
            >
                <option value="en">English</option>
                <option value="ar">Arabic(اللغة العربية)</option>
            </select>
        </div>
    );
}

export default TranslateBox;
