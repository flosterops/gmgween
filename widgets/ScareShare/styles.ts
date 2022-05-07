import styled from 'styled-components';
import { Column, ILayout, ITitle, Title } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';
import { globalStyles } from 'theme/global.theme';
// @ts-ignore
import bg_small_desktop from 'public/assets/images/share_scare_bg_small_desktop.jpg';
// @ts-ignore
import bg_tablet from 'public/assets/images/share_scare_bg_tablet.jpg';

interface IScareShareWrapper extends ILayout {
  image: string;
}

export const ScareShareWrapper = styled(Column)<IScareShareWrapper>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-image: url('${(props: IScareShareWrapper): string => props.image}');
  ${media.lessThan(BreakPoints.smallDesktop)} {
    background-image: url(${bg_small_desktop.src});
  }
  ${media.lessThan(BreakPoints.tablet)} {
    padding: 70px 10px 70px ${globalStyles.leftMenuPaddings.tablet};
    background-image: url(${bg_tablet.src});
  }
  ${media.lessThan(BreakPoints.phone)} {
    padding-top: 30px;
  }
`;

export const ScareShareContainer = styled(Column)<ILayout>`
  ${media.lessThan(BreakPoints.smallDesktop)} {
    padding-left: 0;
    p {
      margin-bottom: 10px;
      margin-top: 0;
    }
  }

  ${media.lessThan(BreakPoints.tablet)} {
    p {
      white-space: normal;
    }
  }
`;

export const StyledTitle = styled(Title)<ITitle>`
  line-height: 1;
  ${media.lessThan(BreakPoints.tablet)} {
    z-index: 2;
    ${globalStyles.fontSizes.l}
  }
`;
