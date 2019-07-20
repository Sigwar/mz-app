export interface IRegistration {
  registrationForm: IRegistrationForm;
  registrationFormErrors: IFieldFormError;
    icons: IIcon[];
}

export interface IIcon {
    icon: string;
    style: IIconStyle;
}

export interface IIconStyle {
    top: string;
    left: string;
    width?: string;
    height?: string;
}

export interface IFieldFormError {
  name: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  passwordRepeat: boolean;
}

export interface IRegistrationForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
  rule: boolean;
  newsletter: boolean;
}
