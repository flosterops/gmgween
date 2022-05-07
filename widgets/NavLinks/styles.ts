import styled from 'styled-components';
import { colors } from 'theme/colors.theme';

export const StyledNavLink = styled.a`
  white-space: nowrap;
  transition: color 0.5s ease;
  &:hover {
    opacity: 1;
    color: ${colors.orange};
  }
`;
