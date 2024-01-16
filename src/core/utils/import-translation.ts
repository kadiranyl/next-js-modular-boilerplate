import { Locale } from '@core/enums';

export async function importTranslation(locale: Locale) {
    return import(`../../locales/${locale.toString()}.json`).then(
        (msgs) => msgs.default,
    );
}
