import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { LayoutTags } from 'ui';
import { JustifyContentTypes } from 'models/layout.model';
import { ContentWrapper, SectionWrapper, TwitchWrapper } from './styles';

const Twitch = (): ReactElement => {
  const DynamicTwitchEmbed = dynamic(
    () => {
      // @ts-ignore
      return import('react-twitch-embed').then((mod) => mod.TwitchEmbed);
    },
    { ssr: false }
  );

  return (
    <SectionWrapper tagName={LayoutTags.section} htmlId='twitch'>
      <ContentWrapper jc={JustifyContentTypes.center}>
        <TwitchWrapper>
          {/* @ts-ignore */}
          <DynamicTwitchEmbed channel='gamigogames' id='gamigogames' width='100%' height='100%' muted />
        </TwitchWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export { Twitch };
