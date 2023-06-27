import { ValidatorFn } from "@angular/forms";

export const appEmailValidator: ValidatorFn = (control) => {
    const emailRegex = new RegExp('[^@]{6,}@gmail\.(com|bg)');
    if (control.value && !emailRegex.test(control.value)) {
        return { invalidEmail: true };
    }
    return null;
}