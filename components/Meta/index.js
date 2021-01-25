import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({
  title = 'Flaming Hot GG',
  description = 'Best League of Legends Live Tracker, no Kappa',
}) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://flaming-hot.gg/" />
    <meta property="og:site_name" content="Flaming Hot GG" />
    <meta property="og:image" content="https://flaming-hot.gg/assets/img/logo.png" />
  </Head>
);

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
