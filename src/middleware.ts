import createMiddleware from 'next-intl/middleware';
import { Locale } from '@core/enums';

export default createMiddleware({
    locales: Object.values(Locale),
    defaultLocale: Locale.EN,
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
