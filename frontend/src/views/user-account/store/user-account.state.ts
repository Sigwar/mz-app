import { IContact, IUserAccountMenu } from '@/views/user-account/store/user-account.interface';

export const userAccountMenu: IUserAccountMenu = {
  userInfo: {
    displayName: '',
    photoURL: '',
    emailVerified: '',
    email: '',
    uid: '',
  },
  links: [
    {
      label: 'editAccount',
      nameUrl: 'User account edit',
    },
    {
      label: 'editProfile',
      nameUrl: 'User account information',
    },
    {
      label: 'items',
      nameUrl: 'User items',
    },
    {
      label: 'addItem',
      nameUrl: 'Add item',
    },
    {
      label: 'portfolio',
      nameUrl: 'User portfolio',
    },
    {
      label: 'message',
      nameUrl: 'Login',
    },
  ],
};

export const contactList: IContact[] = [
  {
    type: 'phone',
    icon: 'phone',
  },
  {
    type: 'email',
    icon: 'mail',
  },
  {
    type: 'facebook',
    icon: 'facebook',
  },
  {
    type: 'website',
    icon: 'domain',
  },
  {
    type: 'address',
    icon: 'pin',
  },
];

export interface IVueElementFormReference {
  validate: (arg: (valid: boolean) => void) => any;
  clearValidate: () => void;
}
