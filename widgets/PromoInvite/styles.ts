import styled, { css } from 'styled-components';
import { Column, Description, IDescription, ILayout, ITitle, Row, Title } from 'ui';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';
// @ts-ignore
import bg_smallDesktop from 'public/assets/images/promo_invite_bg_small_desktop.jpg';
// @ts-ignore
import bg_tablet from 'public/assets/images/promo_invite_bg_tablet.jpg';
import { globalStyles } from 'theme/global.theme';

interface IGameLogo extends ILayout {
  image: string;
  hoverImage?: string;
}

interface IPromoInviteWrapper extends ILayout {
  image: string;
}

export const PromoTitle = styled(Title)<ITitle>`
  line-height: 1;
  ${media.lessThan(BreakPoints.tablet)} {
    ${globalStyles.fontSizes.l}
  }
`;

export const PromoInviteWrapper = styled(Column)<IPromoInviteWrapper>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-image: url('${(props: IPromoInviteWrapper): string => props.image}');
  box-shadow: 0 60px 46px 24px ${colors.blockShadow};
  z-index: 2;

  ${media.lessThan(BreakPoints.smallDesktop)} {
    box-shadow: 0 40px 46px 24px ${colors.blockShadow};
    background-image: url(${bg_smallDesktop.src});
  }
  ${media.lessThan(BreakPoints.tablet)} {
    box-shadow: 0 20px 46px 24px ${colors.blockShadow};
    background-image: url(${bg_tablet.src});
    padding-left: ${globalStyles.leftMenuPaddings.tablet};
  }
`;

export const PromoTitleContainer = styled(Column)<ILayout>`
  ${media.lessThan(BreakPoints.desktop)} {
    padding-left: 0;
  }
  * {
    line-height: 1.5;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    h3 {
      ${globalStyles.fontSizes.l}
    }
    p {
      ${globalStyles.fontSizes.m}
    }
  }
`;

export const SubTitle = styled(Description)<IDescription>`
  line-height: 1.5;
  display: inline-block;
  a,
  span {
    color: ${colors.orange};
    font-size: 1.4em;
  }

  ${media.lessThan(BreakPoints.phone)} {
    span {
      font-size: 1.2em;
    }
  }
`;

export const LogosWrapper = styled(Row)<ILayout>`
  flex-wrap: wrap;
  ${media.lessThan(BreakPoints.desktop)} {
    padding-left: 0;
  }
`;

export const GameLogoLink = styled.a`
  display: block;
`;

export const GameLogo = styled.div<IGameLogo>`
  display: flex;
  box-sizing: border-box;
  background-image: url('${(props: IGameLogo): string => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  height: 140px;
  width: 25%;
  min-width: 250px;
  padding: 0 10px;

  ${(props: IGameLogo) =>
    props.hoverImage &&
    css`
      cursor: pointer;
      transition: background-position 0.3s ease;
      &:hover {
        opacity: 1;
        background-image: url('${(props: IGameLogo): string => props.hoverImage || ''}');
      }
    `}

  ${media.lessThan(BreakPoints.tablet)} {
    background-size: contain;
    width: 30vw;
    min-width: auto;
    margin: 0 2.5vw;
  }
`;
