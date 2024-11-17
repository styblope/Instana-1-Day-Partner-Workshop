import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/products/instana', linkText: 'IBM Observability by Instana APM' }
  ],
  secondCol: [
    { href: 'https://www.ibm.com/aiops', linkText: 'IBM AIOps' }
    ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
