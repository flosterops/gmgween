import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { getVideoIdByLocale } from 'helpers/video.helper';
import { ELocales } from 'models/locale.model';
import { StyledVideo } from './styles';

const Video = (): ReactElement => {
  const { i18n } = useTranslation();
  const videoId = getVideoIdByLocale(i18n.language as ELocales);

  return (
    <StyledVideo>
      <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${videoId}`}
        title='Gamigoween'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </StyledVideo>
  );
};

export { Video };
