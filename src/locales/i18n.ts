import { getRequestConfig } from 'next-intl/server';
import { Locale } from '@core/enums';
import { importTranslation } from '@core/utils';

export default getRequestConfig(({ locale }) => {
    const emptyObj = () => ({});

    return importTranslation(locale as Locale)
        .then((res: any) => {
            const messages = res || emptyObj();
            return {
                messages,
            };
        })
        .catch((error: Error) => {
            console.error('Error importing translation:', error);
            return {
                messages: emptyObj(),
            };
        });
});
