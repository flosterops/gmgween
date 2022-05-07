import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { AmountsList, Description, LayoutTags, Title, TitleTags } from 'ui';
import { AlignItemsTypes, AlignTextTypes, FontSizeTypes } from 'models/layout.model';
import { ContentWrapper, RulesSubTitle, RulesTitle, SectionWrapper, TextWrapper } from './styles';
import { colors } from 'theme/colors.theme';

const Rules = (): ReactElement => {
  const { t } = useTranslation('official-rules');

  return (
    <SectionWrapper tagName={LayoutTags.section} htmlId='rules'>
      <ContentWrapper ai={AlignItemsTypes.center}>
        <RulesTitle tagName={TitleTags.h2} fontSize={FontSizeTypes.xxl} textAlign={AlignTextTypes.center} uppercase>
          {t('section_title')}
        </RulesTitle>

        <TextWrapper ai={AlignItemsTypes.flexEnd}>
          <div>
            <RulesSubTitle tagName={TitleTags.h4} fontSize={FontSizeTypes.l} color={colors.orange} mtop='2.604vw'>
              {t('scare_and_share_heading')}
            </RulesSubTitle>
            <Description>{t('scare_and_share_paragraph_1')}</Description>
            <Description>{t('scare_and_share_paragraph_2')}</Description>
            <Description>{t('scare_and_share_paragraph_3')}</Description>
            <Description>{t('scare_and_share_paragraph_4')}</Description>
            <Description>{t('scare_and_share_paragraph_5')}</Description>
            <Description>{t('scare_and_share_paragraph_6')}</Description>
            <Description>{t('scare_and_share_paragraph_7')}</Description>
            <Description>{t('scare_and_share_paragraph_8')}</Description>
            <Description>{t('scare_and_share_paragraph_9')}</Description>

            <RulesSubTitle tagName={TitleTags.h4} fontSize={FontSizeTypes.l} color={colors.orange} mtop='2.604vw'>
              {t('sweet_treats_heading')}
            </RulesSubTitle>
            <Description>{t('sweet_treats_paragraph_1')}</Description>
            <Description>{t('sweet_treats_paragraph_2')}</Description>
            <Description>{t('sweet_treats_paragraph_3')}</Description>
            <AmountsList />
            <Description>{t('sweet_treats_paragraph_4')}</Description>
            <Description>{t('prizes_heading')}</Description>
            <Title tagName={TitleTags.h5}>{t('prize_1_heading')}</Title>
            <Description>{t('prize_1_paragraph')}</Description>
            <Title tagName={TitleTags.h5}>{t('prize_2_heading')}</Title>
            <Description>{t('prize_2_paragraph')}</Description>
            <Description>{t('sweet_treats_paragraph_5')}</Description>
            <Description>{t('sweet_treats_paragraph_6')}</Description>
            <Description>{t('sweet_treats_paragraph_7')}</Description>
            <Description>{t('sweet_treats_paragraph_8')}</Description>
            <Description>{t('sweet_treats_paragraph_9')}</Description>
          </div>
        </TextWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export { Rules };
