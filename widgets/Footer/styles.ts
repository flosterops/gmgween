import styled from 'styled-components';
import { Column, Row } from 'ui';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';

export const StyledFooter = styled(Column)`
  background-color: ${colors.footerBg};
  border-top: 1px solid #161221;
  padding: 20px 0;
`;

export const ContentWrapper = styled(Row)`
  max-width: 1240px;
  padding: 0 20px;
  & > div {
    padding: 15px 0;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    flex-wrap: wrap;
    padding: 0 10px;
    & > div {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const PrivacyLink = styled.a`
  border-right: 1px solid ${colors.textPrimary};
  padding: 0 20px;
  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }

  ${media.lessThan(BreakPoints.phone)} {
    padding: 0 10px;
  }
`;
