import styled from 'styled-components';
import { Column, Description, IDescription, ILayout, Row } from 'ui';
import { colors } from 'theme/colors.theme';

interface IStyledLocale extends IDescription {
  selected: boolean;
}

export const LocalesContainer = styled(Column)<ILayout>`
  min-width: ${(props: ILayout): string => props.componentWidth || '100%'};
`;

export const StyledLocale = styled(Description)<IStyledLocale>`
  cursor: pointer;
  color: ${(props: IStyledLocale): string => (props.selected ? colors.orange : colors.white)};
`;

export const DropDownLocales = styled(Column)<ILayout>`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px 0;
  z-index: 5;
`;

export const DropDownLocaleWrapper = styled(Row)<ILayout>`
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${colors.orange};

    & ${StyledLocale} {
      color: ${colors.white};
    }
  }

  &:not(:hover) {
    background-color: ${colors.dark};
  }
`;
