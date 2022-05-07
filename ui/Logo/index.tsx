import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { ILayout, Row } from 'ui';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';

export interface ILogo extends ILayout {
  image: string;
}

const Logo = ({ image, ...props }: ILogo): ReactElement => {
  const { t } = useTranslation('common');
  return (
    <Row ai={AlignItemsTypes.center} jc={JustifyContentTypes.center} {...props}>
      <img style={{ width: '100%' }} src={image} alt={t('Logo')} />
    </Row>
  );
};

export { Logo };
