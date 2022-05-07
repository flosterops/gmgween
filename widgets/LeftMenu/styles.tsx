import styled from 'styled-components';
// @ts-ignore
import navBarSelected from 'public/assets/images/nav_bar_selected.png';
// @ts-ignore
import navBarStart from 'public/assets/images/nav_bar_start.png';
import { BreakPoints, media } from '../../theme/responsive.theme';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-left: 20px;
  span {
    display: none;
    margin-left: 2px;
  }
  &:hover {
    span {
      display: inline;
    }
  }

  ${media.lessThan(BreakPoints.tablet)} {
    margin-left: 10px;
  }
`;

interface ItemPros {
  selected: boolean;
}

export const ItemWrapper = styled.a`
  display: flex;
  align-items: center;
`;

export const ItemText = styled.span<ItemPros>`
  color: ${(props) => (props.selected ? '#FFA239' : '#A9A9A9')};
`;

export const Icon = styled.div<ItemPros>`
  background-image: url('${(props) => (props.selected ? navBarSelected.src : navBarStart.src)}');
  background-position: top center;
  width: 52px;
  height: 31px;
  cursor: pointer;
`;

export const Separator = styled.div`
  width: 1px;
  height: 30px;
  margin-left: 24.5px;
  background: #a9a9a9;
`;
