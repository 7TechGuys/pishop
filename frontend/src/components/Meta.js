import React from 'react';
import {Helmet} from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
      <Helmet>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta name='keyword' content={keywords} />
      </Helmet>
  );
};

Meta.defaultProps = {
    title: 'Welcome to RajShop',
    description: 'We sell the best sweets for the cheapst price',
    keywords: 'sweets, by sweets, cheap sweets'
}

export default Meta;
