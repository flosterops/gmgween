import React, { ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/promo_invite_bg.jpg';
import { GameLogo, GameLogoLink, LogosWrapper, PromoInviteWrapper, PromoTitle, PromoTitleContainer, SubTitle } from './styles';
import { colors } from 'theme/colors.theme';
import { Description, Row, Title, TitleTags } from 'ui';
import { AlignItemsTypes, AlignTextTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { logos } from './helpers';
import { Trans, useTranslation } from 'next-i18next';

const PromoInvite = (): ReactElement => {
  const { t } = useTranslation('promo-invite');
  return (
    <PromoInviteWrapper image={bg.src} padding='7.208vw'>
      <PromoTitleContainer pleft='18.2vw'>
        <Row componentWidth='100%' jc={JustifyContentTypes.center}>
          <PromoTitle tagName={TitleTags.h2} color={colors.white} fontSize={FontSizeTypes.xxl} textAlign={AlignTextTypes.center} uppercase>
            <Trans t={t} i18nKey='title'>
              Are you ready to <br />
              trick or treat this halloween?
            </Trans>
          </PromoTitle>
        </Row>
        <SubTitle color={colors.white} fontSize={FontSizeTypes.m} mtop='2.604vw'>
          {t('promo_1')}
        </SubTitle>
        <SubTitle color={colors.white} fontSize={FontSizeTypes.m} mtop='1.042vw'>
          <Trans t={t} i18nKey='promo_2'>
            Watch our spooktacular <a href='/#'>#gamigoween</a> stream on Twitch an enjoy awesome GIVEAWAYS!
          </Trans>
        </SubTitle>
      </PromoTitleContainer>
      <PromoTitleContainer ai={AlignItemsTypes.center} pleft='18vw' mtop='2vw'>
        <Description fontSize={FontSizeTypes.l} color={colors.orange} mtop='10px' uppercase>
          {t('when')}
        </Description>
        <Title tagName={TitleTags.h3} color={colors.orange} fontSize={FontSizeTypes.xxl} mtop='10px'>
          {t('promo_3')}
        </Title>
        <Description color={colors.orange} mtop='10px' fontSize={FontSizeTypes.l}>
          {t('promo_4')}
        </Description>
        <Description fontSize={FontSizeTypes.l} color={colors.orange} mtop='2vw' uppercase>
          {t('where')}
        </Description>
        <Title tagName={TitleTags.h3} color={colors.orange} fontSize={FontSizeTypes.xxl}>
          {t('promo_5')}
        </Title>
        <SubTitle color={colors.white} fontSize={FontSizeTypes.m} mtop='2vw'>
          {t('promo_6')}
        </SubTitle>
        <LogosWrapper ai={AlignItemsTypes.center} jc={JustifyContentTypes.center} pleft='10vw' mtop='2vw'>
          {logos.map((logo): ReactElement => {
            return logo.link ? (
              <GameLogoLink key={logo.id} href={logo.link} target='_blank'>
                <GameLogo image={logo.image.src} hoverImage={logo.hoverImage.src} />
              </GameLogoLink>
            ) : (
              <GameLogo key={logo.id} image={logo.image.src} />
            );
          })}
        </LogosWrapper>
      </PromoTitleContainer>
    </PromoInviteWrapper>
  );
};

export { PromoInvite };
