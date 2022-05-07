import React, { ReactElement } from 'react';
import { Column, Video } from 'ui';
import { SocialLinks } from 'ui/SocialLinks';
// @ts-ignore
import videoTop from 'public/assets/images/video_top.png';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { SocialWrapper, TopImage } from './styles';
import { colors } from 'theme/colors.theme';

const VideoArea = (): ReactElement => {
  return (
    <Column bg={colors.main} componentHeight='100%' jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
      <Video />
      <TopImage src={videoTop.src} alt='Prizes' />
      <SocialWrapper componentWidth='auto' ai={AlignItemsTypes.center}>
        <SocialLinks margin='0 20px 20px 0' componentWidth='auto' />
      </SocialWrapper>
    </Column>
  );
};

export { VideoArea };
