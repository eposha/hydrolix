import type { FC } from 'react';

import { InfoWrapper } from 'styles/notifications';

import Info from '../Info';

interface Props {
  errors: FieldErrors;
}

const FieldsErrors: FC<Props> = ({ errors }) => {
  const renderErrors = (errors: FieldErrors) => {
    const renderedErrors = [];
    if (errors) {
      for (const key in errors) {
        renderedErrors.push(<Info key={key} message={errors[key].message}></Info>);
      }
    }

    return renderedErrors;
  };

  if (errors) {
    return <InfoWrapper>{renderErrors(errors)}</InfoWrapper>;
  } else {
    return null;
  }
};

export default FieldsErrors;
