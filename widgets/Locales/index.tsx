import React, { ReactElement, useState } from 'react';
import { Column } from 'ui';
import { IConfig } from 'models/config.model';
import { useTranslation } from 'next-i18next';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { colors } from 'theme/colors.theme';
import { DropDownLocales, DropDownLocaleWrapper, LocalesContainer, StyledLocale } from './styles';
import config from './config.json';
import { useRouter } from 'next/router';

interface ILocalesConfig extends IConfig {
  language: string;
  text: string;
}

const Locales = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = async (language: string): Promise<void> => {
    await i18n.changeLanguage(language);
    await router.push('/', '/', { locale: language });
    setVisible(!visible);
  };

  return (
    <LocalesContainer
      componentWidth='80px'
      componentHeight='80px'
      jc={JustifyContentTypes.center}
      ai={AlignItemsTypes.center}
      onClick={(): void => setVisible(!visible)}
    >
      <Column ai={AlignItemsTypes.center}>
        <StyledLocale fontSize={FontSizeTypes.m} selected={true} color={colors.white}>
          {i18n.language.toUpperCase()}
        </StyledLocale>
      </Column>
      {visible && (
        <DropDownLocales bg={colors.dark}>
          {(config as ILocalesConfig[]).map(
            (locale: ILocalesConfig): ReactElement => (
              <DropDownLocaleWrapper
                key={locale.id}
                onClick={(): Promise<void> => changeLanguage(locale.language)}
                jc={JustifyContentTypes.center}
              >
                <StyledLocale selected={i18n.language === locale.language}>{t(locale.text).toUpperCase()}</StyledLocale>
              </DropDownLocaleWrapper>
            )
          )}
        </DropDownLocales>
      )}
    </LocalesContainer>
  );
};

export { Locales };
