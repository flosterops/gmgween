import styled from 'styled-components';
import { Column, ILayout } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';

export const TopImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 30vw;
  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
`;

export const SocialWrapper = styled(Column)<ILayout>`
  position: absolute;
  top: calc(50% - 90px);
  right: 0;
  z-index: 2;

  ${media.lessThan(BreakPoints.phone)} {
    top: 10px;
  }
`;
