import React, { ReactElement } from 'react';
import { Description, IDescription } from 'ui/Description';
import { colors } from 'theme/colors.theme';
// @ts-ignore
import bat from 'public/assets/images/bat_icon.png';
import { BatIcon } from './styles';

const BatDescription = (props: IDescription): ReactElement => {
  return (
    <>
      <BatIcon src={bat.src} alt='Bat icon' />
      <Description mleft='10px' color={colors.orange} uppercase {...props}>
        {props.children}
      </Description>
    </>
  );
};

export { BatDescription };
