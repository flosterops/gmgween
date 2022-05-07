import styled from 'styled-components';
import { Column, ILayout } from 'ui';
import { fontSize } from 'theme/functions.theme';
import { FontSizeTypes } from 'models/layout.model';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IStyledMobileTopMenu extends ILayout {
  visible: boolean;
}

export const StyledMobileTopMenu = styled(Column)<IStyledMobileTopMenu>`
  background-color: rgba(22, 18, 33, 0.9);
  z-index: 100;
  transition: top 0.3s ease;
  display: none;
  position: absolute;
  left: 0;
  top: ${(props: IStyledMobileTopMenu): string => (props.visible ? '80px' : '-100%')};

  ${media.lessThan(BreakPoints.tablet)} {
    display: flex;
  }
`;

export const MobileLink = styled.a`
  &:first-of-type {
    margin-top: 30px;
  }
  white-space: nowrap;
  color: ${colors.white};
  margin-bottom: 30px;
  ${fontSize({ fontSize: FontSizeTypes.xl })};
`;
