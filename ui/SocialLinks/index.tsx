import React, { ReactElement } from 'react';
import { IConfig } from 'models/config.model';
import { ESocialLinks } from 'models/social.model';
import config from './config.json';
// @ts-ignore
import discord from 'public/assets/images/discord.png';
// @ts-ignore
import facebook from 'public/assets/images/facebook.png';
// @ts-ignore
import twitter from 'public/assets/images/twitter.png';
// @ts-ignore
import youtube from 'public/assets/images/youtube.png';
// @ts-ignore
import twitch from 'public/assets/images/twitch.png';
import { ILayout, Layout, Row } from '../Layout';
import { DirectionTypes } from 'models/layout.model';

interface ISocialLinkConfig extends IConfig {
  type: ESocialLinks;
  alt: string;
  href: string;
}

const socialImages = {
  [ESocialLinks.facebook]: facebook.src,
  [ESocialLinks.twitter]: twitter.src,
  [ESocialLinks.youtube]: youtube.src,
  [ESocialLinks.twitch]: twitch.src,
  [ESocialLinks.discord]: discord.src,
};

const SocialLinks = (props: ILayout): ReactElement => {
  return (
    <Layout direction={DirectionTypes.column} {...props}>
      {(config as ISocialLinkConfig[]).map((social: ISocialLinkConfig): ReactElement => {
        return (
          <Row componentHeight='30px' componentWidth='30px' key={social.id} mbottom='10px'>
            <a href={social.href} target='_blank'>
              <img width='100%' src={socialImages[social.type]} alt={social.alt} />
            </a>
          </Row>
        );
      })}
    </Layout>
  );
};

export { SocialLinks };
