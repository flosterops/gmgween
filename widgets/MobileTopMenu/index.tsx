import React, { ReactElement, useEffect, useState } from 'react';
import { Column } from 'ui';
import { createPortal } from 'react-dom';
import { useTranslation } from 'next-i18next';
import { INavLinksConfig } from '../NavLinks';
import config from '../NavLinks/config.json';
import { MobileLink, StyledMobileTopMenu } from './styles';

interface IMobileTopMenu {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const MobileTopMenu = ({ visible, setVisible }: IMobileTopMenu): ReactElement | null => {
  const { t } = useTranslation('common');
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    setRendered(true);
  }, []);

  const handleClick = (): void => {
    setVisible(false);
  };

  if (!rendered) {
    return null;
  }

  return createPortal(
    <StyledMobileTopMenu visible={visible}>
      <Column padding='20px'>
        {(config as INavLinksConfig[]).map(
          (link: INavLinksConfig): ReactElement => (
            <MobileLink key={link.id} onClick={handleClick} href={`#${link.anchor}`}>
              {t(link.text)}
            </MobileLink>
          )
        )}
      </Column>
    </StyledMobileTopMenu>,
    document.getElementsByTagName('body')[0]
  );
};

export { MobileTopMenu };
