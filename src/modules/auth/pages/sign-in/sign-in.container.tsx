'use client';

import { SignInView, ViewModel } from './sign-in.view';

export function SignInContainer() {
    const onSubmitForm = (formValue: never) => {
        console.log(formValue);
    };

    const vm: ViewModel = {
        onSubmitForm,
    };

    return <SignInView {...vm} />;
}
