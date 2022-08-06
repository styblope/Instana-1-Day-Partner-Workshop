import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Instana Site',
    href: 'https://www.ibm.com/cloud/instana',
  },

  {
    title: 'Instana Documentation',
    href: 'https://www.ibm.com/docs/en/obi/current',
  },
 {
    title: 'IBM AIOps Site',
    href: 'https://www.ibm.com/cloud/aiops',
  },
  {
    title: 'Instana PTEG - Tech Guide',
    href: 'https://ibm.seismic.com/Link/Content/DCqJR68b93JQRG7WcMHQ39hBT3p3',
  },
  {
    title: 'Top PTEG - Tech Guide',
    href: 'https://ibm.seismic.com/Link/Content/DCGdFfFmRb3Rb8TRTHhHPXjbCDWj',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
