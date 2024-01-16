import '@assets/styles/global.scss';

import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Locale } from '@core/enums';
import { importTranslation } from '@core/utils';

type Props = {
    children: React.ReactNode;
    params: Record<'locale', Locale>;
};

export default async function RootLayout({
    children,
    params: { locale },
}: Props) {
    const messages = await importTranslation(locale);

    if (!messages) {
        notFound();
    }

    return (
        <html lang="en">
            <body>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
