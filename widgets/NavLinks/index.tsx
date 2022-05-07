import React, { ReactElement } from 'react';
import { IConfig } from 'models/config.model';
import config from './config.json';
import { Row } from 'ui';
import { useTranslation } from 'next-i18next';
import { StyledNavLink } from './styles';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';

export interface INavLinksConfig extends IConfig {
  anchor: string;
  text: string;
}

const NavLinks = (): ReactElement => {
  const { t } = useTranslation('common');
  return (
    <>
      {(config as INavLinksConfig[]).map(
        (link: INavLinksConfig): ReactElement => (
          <Row key={link.id} margin='0 10px' componentWidth='auto' jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            <StyledNavLink href={`#${link.anchor}`}>{t(link.text).toUpperCase()}</StyledNavLink>
          </Row>
        )
      )}
    </>
  );
};

export { NavLinks };
