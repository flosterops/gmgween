import React, { ReactElement, useState } from 'react';
import { NavLinks } from '../NavLinks';
import { Locales } from '../Locales';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { colors } from 'theme/colors.theme';
// @ts-ignore
import smallLogo from 'public/assets/images/small_logo.png';
// @ts-ignore
import burger from 'public/assets/images/burger.svg';
// @ts-ignore
import close from 'public/assets/images/close.png';
import { NavMenuContainer, NavMenuMobileContainer, TopMenuContainer, BurgerButton, StyledLogo } from './styles';
import { MobileTopMenu } from '../MobileTopMenu';

const TopMenu = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <TopMenuContainer
      bg={colors.dark}
      componentHeight='80px'
      ai={AlignItemsTypes.center}
      jc={JustifyContentTypes.spaceBetween}
      htmlId='home'
    >
      <StyledLogo componentWidth='auto' image={smallLogo.src} />
      <NavMenuContainer componentWidth='60%' ai={AlignItemsTypes.center} jc={JustifyContentTypes.flexEnd}>
        <NavLinks />
        <Locales />
      </NavMenuContainer>
      {/* Mobile */}
      <NavMenuMobileContainer componentWidth='auto'>
        <BurgerButton onClick={(): void => setVisible(!visible)}>
          <img style={{ width: '100%' }} src={visible ? close.src : burger.src} alt='burger button' />
        </BurgerButton>
        <MobileTopMenu visible={visible} setVisible={setVisible} />
      </NavMenuMobileContainer>
      {/* Mobile */}
    </TopMenuContainer>
  );
};

export { TopMenu };
