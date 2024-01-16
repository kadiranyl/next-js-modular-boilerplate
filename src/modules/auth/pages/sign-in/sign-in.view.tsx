'use client';

export type ViewModel = {
    onSubmitForm(formValue: never): void;
};

export function SignInView(vm: ViewModel) {
    return <>Sign In View</>;
}
