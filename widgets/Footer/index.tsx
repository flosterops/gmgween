import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { Description, LayoutTags, Row } from 'ui';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { ContentWrapper, PrivacyLink, StyledFooter } from './styles';

const Footer = (): ReactElement => {
  const { t } = useTranslation('footer');

  return (
    <StyledFooter ai={AlignItemsTypes.center} tagName={LayoutTags.footer}>
      <ContentWrapper jc={JustifyContentTypes.spaceBetween}>
        <Row componentWidth='auto'>
          <PrivacyLink href={t('imprint_link')} target="_blank">{t('imprint')}</PrivacyLink>
          <PrivacyLink href={t('terms_of_use_link')} target="_blank">{t('terms_of_use')}</PrivacyLink>
          <PrivacyLink href={t('privacy_policy_link')} target="_blank">{t('privacy_policy')}</PrivacyLink>
        </Row>
        <Row componentWidth='auto'>
          <Description uppercase>
            &copy; {new Date().getFullYear()} {t('gamigo_group')}
          </Description>
        </Row>
      </ContentWrapper>
    </StyledFooter>
  );
};

export { Footer };
