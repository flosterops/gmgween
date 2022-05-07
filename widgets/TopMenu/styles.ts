import styled from 'styled-components';
import { ILayout, ILogo, Logo, Row } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';
import { ai, jc } from 'theme/functions.theme';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { globalStyles } from '../../theme/global.theme';

export const TopMenuContainer = styled(Row)<ILayout>`
  z-index: 101;
  padding: 0 80px 0 40px;
  ${media.lessThan(BreakPoints.desktop)} {
    padding: 0 40px 0 40px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    padding: 0 20px 0 20px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    padding: 0 15px 0 15px;
  }
`;

export const NavMenuContainer = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.smallDesktop)} {
    a,
    p {
      ${globalStyles.fontSizes.s}
    }
  }
  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
`;

export const StyledLogo = styled(Logo)<ILogo>`
  ${media.lessThan(BreakPoints.smallDesktop)} {
    width: 20vw;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    width: auto;
  }
`;

export const NavMenuMobileContainer = styled(Row)<ILayout>`
  display: none;
  ${media.lessThan(BreakPoints.tablet)} {
    display: flex;
  }
`;

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  outline: none;
  display: flex;
  ${ai({ ai: AlignItemsTypes.center })}
  ${jc({ jc: JustifyContentTypes.center })}
  background: transparent;
  cursor: pointer;
`;
