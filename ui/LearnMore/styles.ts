import styled from 'styled-components';
import { Column } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';
// @ts-ignore
import anchorBg from 'public/assets/images/learn_more.png';
import { globalStyles } from 'theme/global.theme';

export const LearnMoreWrapper = styled(Column)`
  padding-bottom: 40px;
  ${media.lessThan(BreakPoints.tablet)} {
    padding-top: 0;
  }
`;

export const Anchor = styled.a`
  display: block;
  max-width: 500px;
  width: 100%;
  height: 124px;
  background-image: url(${anchorBg.src});
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  padding-top: 30px;
  &:hover {
    opacity: 1;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
    ${globalStyles.fontSizes.l};
  }
`;
