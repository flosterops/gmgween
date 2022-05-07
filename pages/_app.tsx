import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { AppProps } from 'next/app';
import { Column } from 'ui';
import { ILayout } from 'ui/Layout';
import { GlobalStyle } from 'theme/global.theme';
import { appWithTranslation } from 'next-i18next';
import { gtmHelper } from '../helpers/gtm.helper';

const StyledPage = styled(Column)<ILayout>`
  height: 100%;
`;

interface IApplication extends AppProps {}

const Application = ({ Component, pageProps }: IApplication): ReactElement => {
  useEffect(() => {
    gtmHelper.generate();
  }, []);

  return (
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link href='https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap' rel='stylesheet' />
      <GlobalStyle />
      <StyledPage>
        <Component {...pageProps} />
      </StyledPage>
    </>
  );
};

export default appWithTranslation(Application);
