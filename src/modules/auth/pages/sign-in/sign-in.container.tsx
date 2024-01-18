'use client';

import { AuthService } from '@modules/auth/services';
import { SignInView, ViewModel } from './sign-in.view';

export function SignInContainer() {
	const onSubmitForm = (formValue: never) => {
		AuthService.login(formValue).then(() => {});
	};

	const vm: ViewModel = {
		onSubmitForm,
	};

	return <SignInView {...vm} />;
}
