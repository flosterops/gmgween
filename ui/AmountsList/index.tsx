import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { StyledAmountsList } from './styles';
import { amounts } from './helpers';

const AmountsList = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <StyledAmountsList>
      {amounts.map((amount) => (
        <li key={amount.id}>
          {t(`minimum_amounts.${amount.id}`)} -{' '}
          <a href={amount.link} target='_blank' rel='noreferrer'>
            {amount.name}
          </a>
        </li>
      ))}
    </StyledAmountsList>
  );
};

export { AmountsList };
