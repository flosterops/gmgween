import styled from 'styled-components';
import { Column, Row } from 'ui';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';
import { globalStyles } from 'theme/global.theme';

export const SectionWrapper = styled(Column)`
  background: ${colors.sectionTopBg} url(${'/assets/images/section_divider.png'}) no-repeat bottom;
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
    padding-left: ${globalStyles.leftMenuPaddings.tablet};
  }
`;
