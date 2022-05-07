import styled from 'styled-components';
import { Column, ILayout, ITitle, Row, Title } from 'ui';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';
// @ts-ignore
import bg from 'public/assets/images/sweet_treats_bg.jpg';
import { globalStyles } from 'theme/global.theme';

export const SectionWrapper = styled(Column)`
  background: ${colors.sectionTopBg} url(${bg.src}) no-repeat bottom;
  box-shadow: 0 20px 46px 24px ${colors.blockShadow};
  z-index: 2;
`;

export const ContentWrapper = styled(Column)`
  max-width: 1920px;
  padding: 70px 80px;

  &:first-of-type {
    ${media.lessThan(BreakPoints.lgDesktop)} {
      padding: 50px 60px 0;
    }
    ${media.lessThan(BreakPoints.desktop)} {
      padding: 40px 30px 0 ${globalStyles.leftMenuPaddings.desktop};
    }
    ${media.lessThan(BreakPoints.smallDesktop)} {
      padding: 30px 20px 0 ${globalStyles.leftMenuPaddings.desktop};
    }
    ${media.lessThan(BreakPoints.tablet)} {
      padding: 30px 20px 0 ${globalStyles.leftMenuPaddings.tablet};
    }
  }

  &:last-of-type {
    ${media.lessThan(BreakPoints.lgDesktop)} {
      padding: 0 60px 50px;
    }
    ${media.lessThan(BreakPoints.desktop)} {
      padding: 0 30px 40px ${globalStyles.leftMenuPaddings.desktop};
    }
    ${media.lessThan(BreakPoints.smallDesktop)} {
      padding: 0 20px 30px ${globalStyles.leftMenuPaddings.desktop};
    }
    ${media.lessThan(BreakPoints.tablet)} {
      padding: 0 20px 30px ${globalStyles.leftMenuPaddings.tablet};
    }
  }

  ${media.lessThan(BreakPoints.lgDesktop)} {
    padding: 0 60px;
  }
  ${media.lessThan(BreakPoints.desktop)} {
    padding: 0 30px 0 ${globalStyles.leftMenuPaddings.desktop};
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    padding: 0 20px 0 ${globalStyles.leftMenuPaddings.desktop};
  }
  ${media.lessThan(BreakPoints.tablet)} {
    padding: 0 20px 0 ${globalStyles.leftMenuPaddings.tablet};
  }
`;

export const SweetTitle = styled(Title)<ITitle>`
  ${media.lessThan(BreakPoints.tablet)} {
    ${globalStyles.fontSizes.l}
  }
`;

export const SweetSubtitle = styled(Title)<ITitle>`
  ${media.lessThan(BreakPoints.tablet)} {
    ${globalStyles.fontSizes.l}
  }
  ${media.lessThan(BreakPoints.phone)} {
    font-size: 20px;
  }
`;

export const TextWrapper = styled(Column)`
  max-width: 1250px;
`;

export const SpendingChancesWrapper = styled(Column)`
  & > * {
    max-width: 830px;
  }
`;

interface IAdditionalContent extends ILayout {
  height: number;
}

export const AdditionalContent = styled.div<IAdditionalContent>`
  width: 100%;
  transition: max-height 0.6s;
  overflow: hidden;
  max-height: ${(props) => `${props.height}px`};
`;

export const CloseMore = styled.a`
  display: block;
  padding: 20px;
  font-size: 2em;
`;

export const ListWrapper = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.tablet)} {
    ${globalStyles.direction.column}
    > div {
      padding: 0 0 0 45px;
    }

    p {
      margin-bottom: 0;
    }
  }
`;

export const MobileImageWrapper = styled(Column)<ILayout>`
  display: none;
  ${media.lessThan(BreakPoints.tablet)} {
    display: flex;
    order: 1;
    img {
      width: 100%;
    }
  }
`;

export const ImageWrapper = styled(Column)<ILayout>`
  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
`;

export const AdditionalContentWrapper = styled(Column)<ILayout>`
  ${media.lessThan(BreakPoints.lgDesktop)} {
    padding: 0 60px;
  }
  ${media.lessThan(BreakPoints.desktop)} {
    padding: 0 30px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    padding: 0 20px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    padding: 0 20px 0 ${globalStyles.leftMenuPaddings.tablet};
  }
`;
