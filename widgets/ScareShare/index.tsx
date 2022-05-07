import React, { ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/share_scare_bg.jpg';
import { Column, Row, TitleTags } from 'ui';
import { colors } from 'theme/colors.theme';
import { AlignItemsTypes, AlignTextTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { SubTitle } from 'widgets/PromoInvite/styles';
import { ScareShareContainer, ScareShareWrapper, StyledTitle } from './styles';
import { BatDescription } from 'ui/BatDescription';
import { Trans, useTranslation } from 'next-i18next';

interface IScareShareElement {
  title: ReactElement;
  subTitle: ReactElement;
}

const ScareShareElement = ({ title, subTitle }: IScareShareElement) => (
  <Column>
    <Row ai={AlignItemsTypes.center}>
      <BatDescription>{title}</BatDescription>
    </Row>
    <SubTitle color={colors.white} fontSize={FontSizeTypes.m}>
      {subTitle}
    </SubTitle>
  </Column>
);

const ScareShare = (): ReactElement => {
  const { t } = useTranslation('share-scare');
  const fbMainPostUrl =
    'https://www.facebook.com/gamigo.group/posts/10159655152509655?__cft__[0]=AZWxbaKsEDvKKZJv06ZhxS-Nc5rvbM6zBIyPJlJERfAxL86X6Wu8MVcZMDd8tgWsKDWH1cG9tdTWriN9OSNvx8CosaY7FdV7RGSGq81RTuLER7r1Xm4pLOX5nTfSfIznuGhCWA7KftEC-4g05qbFB4OnUKo1gFvJ6cvAN2g0gf-e_Y1qMVvwqtExjkyXO1vwFEA&__tn__=%2CO%2CP-R';

  return (
    <ScareShareWrapper image={bg.src} padding='8.854vw' htmlId='scare-and-share'>
      <ScareShareContainer pleft='27.2vw'>
        <Row componentWidth='100%' jc={JustifyContentTypes.center}>
          <StyledTitle tagName={TitleTags.h2} color={colors.white} fontSize={FontSizeTypes.xxl} textAlign={AlignTextTypes.center} uppercase>
            {t('title')}
          </StyledTitle>
        </Row>
        <SubTitle color={colors.white} fontSize={FontSizeTypes.m} mtop='2.604vw'>
          {t('share_1')}
        </SubTitle>
        <Column pleft='80px' mtop='20px'>
          <ScareShareElement title={t('when')} subTitle={t('share_2')} />
          <ScareShareElement
            title={t('where_to_share')}
            subTitle={
              <Trans t={t} i18nKey='share_3'>
                Post on Facebook by commenting to our
                <a href={fbMainPostUrl} target='_blank' rel='noreferrer'>
                  main post
                </a>
                or post your creation on Twitter and/or Instagram.
              </Trans>
            }
          />
          <ScareShareElement title={t('how_to_enter')} subTitle={t('share_4')} />
          <ScareShareElement
            title={t('prizes')}
            subTitle={
              <Trans t={t} i18nKey='share_5'>
                <span>100 Euro</span> voucher worth of gamigo game cash currency for up to 2 winners per game.
              </Trans>
            }
          />
        </Column>
        <SubTitle color={colors.white} fontSize={FontSizeTypes.m} nowrap>
          {t('share_6')}
        </SubTitle>
        <SubTitle color={colors.white} fontSize={FontSizeTypes.m} nowrap>
          <Trans t={t} i18nKey='share_7'>
            Winners will be announced on <span>Friday, November 22, 2021.</span>
          </Trans>
        </SubTitle>
      </ScareShareContainer>
    </ScareShareWrapper>
  );
};

export { ScareShare };
