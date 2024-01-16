'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Routes } from '@core/constants';

export type ViewModel = {
	onSubmitForm(formValue: never): void;
};

export function SignInView(vm: ViewModel) {
	const t = useTranslations('MODULES.AUTH.PAGES.SIGN_IN');
	return (
		<>
			<form onSubmit={vm.onSubmitForm}>
				<input placeholder={t('FORM.EMAIL')} />
				<input placeholder={t('FORM.PASSWORD')} />
				<button>{t('CTA.SUBMIT')}</button>
			</form>
			<Link href={Routes.FORGOT_PASSWORD}>
				{t('CTA.FORGOT_PASSWORD')}
			</Link>
		</>
	);
}
