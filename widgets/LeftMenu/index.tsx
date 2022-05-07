import React, { ReactElement, useEffect, useState } from 'react';
import { Column } from 'ui/Layout';
import { Icon, ItemText, ItemWrapper, Separator, Wrapper } from './styles';
import config from '../NavLinks/config.json';
import { INavLinksConfig } from '../NavLinks';
import { useTranslation } from 'react-i18next';

interface ItemProps {
  href: string;
  text: string;
  selected: boolean
}

function Item(props: ItemProps) {
  return <ItemWrapper href={props.href}>
    <Icon selected={props.selected}/>
    <ItemText selected={props.selected}>{props.text}</ItemText>
  </ItemWrapper>
}

function isVisible(element: Element) {
  const position = element.getBoundingClientRect();
  return !!(position.top < window.innerHeight && position.bottom >= 0);
}

export function LeftMenu() {
  const { t } = useTranslation('common');
  const [hash, setHash] = useState(config[0].anchor);

  useEffect(() => {
    const elements = config.map((link) => document.getElementById(link.anchor));
    function onScroll() {
      let id = '';
      elements.forEach(element => {
        if (element && isVisible(element)) {
          id = element.id;
        }
      });
      if (id) {
        setHash(id);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return <Wrapper>
    <Column>
      {(config as INavLinksConfig[]).map(
        (link: INavLinksConfig, index: number): ReactElement => (
          <>
            <Item key={link.id} selected={hash === link.anchor} href={`#${link.anchor}`} text={t(link.text).toUpperCase()}/>
            {config.length - 1 !== index && <Separator />}
          </>
        )
      )}
    </Column>
  </Wrapper>
}
