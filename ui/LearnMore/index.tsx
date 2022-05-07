import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { Anchor, LearnMoreWrapper } from './styles';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';

export interface ILearnMore {
  onClick?: () => void;
}

const LearnMore = ({ onClick }: ILearnMore): ReactElement => {
  const { t } = useTranslation('common');

  return (
    <LearnMoreWrapper ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
      <Anchor onClick={onClick}>{t('learn_more')}</Anchor>
    </LearnMoreWrapper>
  );
};

export { LearnMore };
