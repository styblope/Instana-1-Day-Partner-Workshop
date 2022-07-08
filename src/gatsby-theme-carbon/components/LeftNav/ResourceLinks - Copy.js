import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Instana Site',
    href: 'https://www.ibm.com/cloud/instana',
  },
  {
    title: 'PTEG - Partner Enablement',
    href: 'https://ibm.seismic.com/app?ContentId=f5910726-8256-45ad-a965-d950ee58226f#/doccenter/861ea1fd-99e0-44d7-9135-85412e5c28d1/doc/%252Fdde471d851-b862-be40-96cc-861dd553acbe%252FdfNTY4NmVhOWItY2RkNS04ZWY3LTZkNzItZTQwZjczMWUyMjk1%252CPT0%253D%252CQ3Jvc3MgQnJhbmQ%253D%252Flfab482e76-933c-4ed5-95d2-c1539880a380/grid/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
