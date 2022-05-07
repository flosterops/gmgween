import styled from 'styled-components';
import { Column, Row } from 'ui';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';
import { globalStyles } from 'theme/global.theme';

export const SectionWrapper = styled(Column)`
  background: ${colors.sectionTopBg};
  background: linear-gradient(to top, ${colors.sectionBtmBg} 0%, ${colors.sectionTopBg} 300px, ${colors.sectionTopBg} 100%);
`;

export const ContentWrapper = styled(Row)`
  max-width: 1920px;
  padding: 70px 80px;

  ${media.lessThan(BreakPoints.lgDesktop)} {
    padding: 50px 60px;
  }
  ${media.lessThan(BreakPoints.desktop)} {
    padding: 40px 30px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    padding: 30px 20px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    padding: 30px 20px 30px ${globalStyles.leftMenuPaddings.tablet};
  }
`;

export const TwitchWrapper = styled(Row)`
  max-width: 1667px;
  height: 938px;
  ${media.lessThan(BreakPoints.lgDesktop)} {
    height: 800px;
  }
  ${media.lessThan(BreakPoints.desktop)} {
    height: 700px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    height: 600px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    height: 500px;
  }
`;
