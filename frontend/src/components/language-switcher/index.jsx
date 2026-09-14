import {LANGUAGES, useLanguage} from '../../site-data';

function LanguageSwitcher() {
    const {lang, setLang} = useLanguage();

    return (
        <div className="language-switcher" role="group" aria-label="Language">
            {LANGUAGES.map((code) => (
                <button
                    key={code}
                    type="button"
                    className={code === lang ? 'active' : ''}
                    aria-pressed={code === lang}
                    onClick={() => setLang(code)}
                >
                    {code.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LanguageSwitcher;
