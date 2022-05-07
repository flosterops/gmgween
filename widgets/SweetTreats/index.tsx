import React, { ReactElement, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AmountsList, Column, Description, LayoutTags, Row, TitleTags } from 'ui';
import { AlignItemsTypes, AlignTextTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import {
  AdditionalContent,
  AdditionalContentWrapper,
  CloseMore,
  ContentWrapper,
  ImageWrapper,
  ListWrapper,
  MobileImageWrapper,
  SectionWrapper,
  SpendingChancesWrapper,
  SweetSubtitle,
  SweetTitle,
  TextWrapper,
} from './styles';
// @ts-ignore
import spookyRaffle from 'public/assets/images/spooky_raffle.png';
import { LearnMore } from 'ui/LearnMore';
import { BatDescription } from 'ui/BatDescription';
import { colors } from 'theme/colors.theme';

const SweetTreats = (): ReactElement => {
  const { t } = useTranslation('sweet-treats');
  const additionalContentRef = useRef<HTMLDivElement>(null);
  const [additionalContentHeight, setAdditionalContentHeight] = useState(0);

  return (
    <SectionWrapper tagName={LayoutTags.section} htmlId='sweet-treats'>
      <ContentWrapper ai={AlignItemsTypes.center}>
        <SweetTitle tagName={TitleTags.h2} fontSize={FontSizeTypes.xxl} textAlign={AlignTextTypes.center} uppercase>
          {t('section_title')}
        </SweetTitle>
      </ContentWrapper>

      <ContentWrapper ai={AlignItemsTypes.center}>
        <TextWrapper mtop='2.604vw'>
          <Description>{t('main_paragraph_1')}</Description>
          <Description>{t('main_paragraph_2')}</Description>
          <Description>{t('main_paragraph_3')}</Description>

          <SpendingChancesWrapper jc={JustifyContentTypes.center} mtop='1.5vw'>
            <SweetSubtitle
              tagName={TitleTags.h3}
              fontSize={FontSizeTypes.xl}
              textAlign={AlignTextTypes.center}
              color={colors.orange}
              uppercase
            >
              {t('spending_chances')}
            </SweetSubtitle>
            <MobileImageWrapper padding='10px 0' ai={AlignItemsTypes.flexEnd}>
              <img src={spookyRaffle.src} alt='Spooky Raffle' />
            </MobileImageWrapper>
          </SpendingChancesWrapper>

          <ListWrapper mtop='1.5vw'>
            <Column pleft='4vw'>
              <Row ai={AlignItemsTypes.center}>
                <BatDescription>{t('when_heading')}</BatDescription>
              </Row>
              <Description>{t('when_paragraph_1')}</Description>

              <Row ai={AlignItemsTypes.center}>
                <BatDescription>{t('how_to_heading')}</BatDescription>
              </Row>
              <Description>{t('how_to_paragraph_1')}</Description>

              <Row ai={AlignItemsTypes.center}>
                <BatDescription>{t('prizes_heading')}</BatDescription>
              </Row>
              <Description>{t('prizes_paragraph_1')}</Description>
              <Description>{t('prizes_paragraph_2')}</Description>
            </Column>
            <ImageWrapper ai={AlignItemsTypes.flexEnd}>
              <img src={spookyRaffle.src} alt='Spooky Raffle' />
            </ImageWrapper>
          </ListWrapper>
        </TextWrapper>
      </ContentWrapper>

      <LearnMore
        onClick={() => {
          const height = additionalContentHeight === 0 ? additionalContentRef.current?.scrollHeight || 0 : 0;
          setAdditionalContentHeight(height);
        }}
      />

      <AdditionalContent height={additionalContentHeight} ref={additionalContentRef}>
        <AdditionalContentWrapper>
          <Description>{t('minimum_paragraph_1')}</Description>
          <AmountsList />
          <Description>{t('minimum_paragraph_2')}</Description>
          <Description>{t('minimum_paragraph_3')}</Description>
          <Description>{t('minimum_paragraph_4')}</Description>
          <Description>{t('minimum_paragraph_5')}</Description>
          <Description>{t('minimum_paragraph_6')}</Description>
          <Description>{t('minimum_paragraph_7')}</Description>
        </AdditionalContentWrapper>
        <Column ai={AlignItemsTypes.center}>
          <CloseMore onClick={() => setAdditionalContentHeight(0)}>X</CloseMore>
        </Column>
      </AdditionalContent>
    </SectionWrapper>
  );
};

export { SweetTreats };
