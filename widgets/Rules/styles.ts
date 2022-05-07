import styled from 'styled-components';
import { Column, ITitle, Title } from 'ui';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';
// @ts-ignore
import bg from 'public/assets/images/official_rules_bg.jpg';
import { globalStyles } from 'theme/global.theme';

export const SectionWrapper = styled(Column)`
  background: ${colors.sectionTopBg} url(${bg.src}) no-repeat bottom;
`;

export const ContentWrapper = styled(Column)`
  max-width: 1920px;
  padding: 70px 80px;

  ${media.lessThan(BreakPoints.lgDesktop)} {
    padding: 50px 60px;
  }
  ${media.lessThan(BreakPoints.desktop)} {
    padding: 40px 30px 40px ${globalStyles.leftMenuPaddings.desktop};
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    padding: 30px 20px 30px ${globalStyles.leftMenuPaddings.desktop};
  }
  ${media.lessThan(BreakPoints.tablet)} {
    padding: 30px 20px 50px ${globalStyles.leftMenuPaddings.tablet};
  }
`;

export const RulesTitle = styled(Title)<ITitle>`
  ${media.lessThan(BreakPoints.tablet)} {
    ${globalStyles.fontSizes.l}
  }
`;

export const RulesSubTitle = styled(Title)<ITitle>`
  ${media.lessThan(BreakPoints.tablet)} {
    font-size: 20px;
  }
`;

export const TextWrapper = styled(Column)`
  & > div {
    max-width: 1250px;
  }
`;
