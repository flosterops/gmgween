import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

const Healthz: NextPage = () => (<></>);

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.end('OK');
  return { props: { } }
}

export default Healthz;
