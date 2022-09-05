import en from 'locales/en';

declare global {
  // Translations

  type TranslationType = typeof en;

  // Users

  interface Organization {
    uuid: string;
    name: string;
    type: string;
    cloud: string;
    kubernetes: boolean;
  }

  interface User {
    uuid: string;
    email: string;
    orgs: Organization[];
    groups: string[];
    auth_token: {
      access_token: string;
      expires_in: number;
      token_type: string;
    };
  }

  interface Option {
    value: string;
    label: string | JSX.Element;
  }

  type NotificationType = 'success' | 'warning' | 'info' | 'error';

  type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

  interface IToast {
    id?: string;
    type: NotificationType;
    title?: string;
    text: string;
  }

  type FieldValues = Record<string, any>;

  type FieldError = {
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
  };

  type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
    TFieldValues,
    FieldError
  >;

  interface ResponceError {
    code: number;
    error: {
      _error?: {
        code: number;
        message: string;
      };
    };
  }

  // TODO: think about it
  interface ChangePasswordResponceError {
    code: number;
    error: {
      current_password?: string[];
    };
  }

  interface DropDownItem {
    title: string;
    icon?: JSX.Element;
    handler: () => void;
  }
}

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
}
