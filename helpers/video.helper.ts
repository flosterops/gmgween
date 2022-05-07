import { ELocales } from 'models/locale.model';

export const getVideoIdByLocale = (locale: ELocales): string => {
  return videoIds[locale] || videoIds[ELocales.en];
};

export const videos = {
  [ELocales.de]: 'https://assets.landingpages.gamigo.com/landingpages/video/gamigoween_tailer-de.mp4',
  [ELocales.en]: 'https://assets.landingpages.gamigo.com/landingpages/video/gamigoween_tailer-en.mp4',
  [ELocales.es]: 'https://assets.landingpages.gamigo.com/landingpages/video/gamigoween_tailer-es.mp4',
  [ELocales.fr]: 'https://assets.landingpages.gamigo.com/landingpages/video/gamigoween_tailer-fr.mp4',
};

export const videoIds = {
  [ELocales.de]: 'NfyBqgfYPb8',
  [ELocales.en]: 'pkXGgX7m8XM',
  [ELocales.es]: 'T737o6KF5Kw',
  [ELocales.fr]: '_hOqeo3DtM4',
};
