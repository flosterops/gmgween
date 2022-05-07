import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import { VideoArea } from 'widgets/VideoArea';
import { PromoInvite, TopMenu, Footer, ScareShare, ParticipantFeed, SweetTreats, Rules, Twitch } from 'widgets';
import { LeftMenu } from '../widgets/LeftMenu';

const Home: NextPage = () => (
  <>
    <LeftMenu />
    <TopMenu />
    <VideoArea />
    <PromoInvite />
    <ScareShare />
    <ParticipantFeed />
    <SweetTreats />
    <Rules />
    <Twitch />
    <Footer />
  </>
);

export const getStaticProps = async ({ locale }: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'sweet-treats',
        'official-rules',
        'footer',
        'promo-invite',
        'share-scare',
      ])),
    },
    revalidate: 10,
  };
};

export default Home;
