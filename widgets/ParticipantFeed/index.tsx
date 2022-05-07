import React, { ReactElement } from 'react';
// @ts-ignore
import JuicerFeed from 'react-juicer-feed';
import { LayoutTags } from 'ui';
import { JustifyContentTypes } from 'models/layout.model';
import { ContentWrapper, SectionWrapper } from './styles';

const ParticipantFeed = (): ReactElement => (
  <SectionWrapper tagName={LayoutTags.section}>
    <ContentWrapper jc={JustifyContentTypes.center}>
      <JuicerFeed feedId='gamigoween' />
    </ContentWrapper>
  </SectionWrapper>
);

export { ParticipantFeed };
