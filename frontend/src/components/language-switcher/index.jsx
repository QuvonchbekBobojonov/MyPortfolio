import {LANGUAGES, pathForLanguage, useLanguage} from '../../site-data';

// Oddiy havolalar: qidiruv tizimlari har bir til sahifasini topadi, bosilganda esa sahifa qayta yuklanmaydi.
function LanguageSwitcher() {
    const {lang, setLang} = useLanguage();

    return (
        <div className="language-switcher" role="group" aria-label="Language">
            {LANGUAGES.map((code) => (
                <a
                    key={code}
                    href={pathForLanguage(code)}
                    hrefLang={code}
                    className={code === lang ? 'active' : ''}
                    aria-current={code === lang ? 'page' : undefined}
                    onClick={(event) => {
                        event.preventDefault();
                        setLang(code);
                    }}
                >
                    {code.toUpperCase()}
                </a>
            ))}
        </div>
    );
}

export default LanguageSwitcher;
