import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { PositionTypes, FontSizeTypes, WeightTypes, ISpaceTypes, AlignTextTypes } from 'models/layout.model';
import { space, weight, fontSize, align, textAlign, lh } from 'theme/functions.theme';
import { globalStyles } from 'theme/global.theme';
import { colors } from 'theme/colors.theme';

const StyledDescription = styled.p<IDescription>`
  ${globalStyles.fonts.default};
  ${space};
  ${weight};
  ${fontSize};
  ${align};
  ${textAlign};
  ${lh};
  display: flex;
  width: auto;
  color: ${({ color }: IDescription): string => color as string};
  text-transform: ${(props: IDescription): string => (props.uppercase ? 'uppercase' : 'none')};
  white-space: ${(props: IDescription): string => (props.nowrap ? 'nowrap' : 'normal')};
`;

export interface IDescription extends ISpaceTypes {
  position?: PositionTypes;
  color?: string;
  fontSize?: FontSizeTypes;
  uppercase?: boolean;
  textAlign?: AlignTextTypes;
  weight?: WeightTypes;
  children: ReactNode | ReactNodeArray;
  onClick?: (...args: any) => any;
  nowrap?: boolean;
}

const Description: React.FC<IDescription> = ({
  children,
  color = colors.textPrimary,
  fontSize = FontSizeTypes.m,
  weight = WeightTypes.w500,
  position = PositionTypes.default,
  textAlign = AlignTextTypes.default,
  nowrap = false,
  ...props
}: IDescription): ReactElement => (
  <StyledDescription nowrap={nowrap} color={color} fontSize={fontSize} position={position} textAlign={textAlign} weight={weight} {...props}>
    {children}
  </StyledDescription>
);

export { Description };
