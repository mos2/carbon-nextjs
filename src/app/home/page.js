'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Introduction</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Developing &amp; Operating Cloud Applications on Modern Cloud
          Platforms
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About IBM API Connect</Tab>
            <Tab>Michael</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">Who is Michael?</h2>
                  <p className="landing-page__p">
                    Michael is a member of the IBM API Connect team at IBM in
                    Cork. IBM API Connect is an important product that forms
                    part of the IBM Automation portfolio. It allows
                    organisations to build, manage, enforce, socialise, and
                    monetise their APIs, in the form of OpenAPI Documents.
                  </p>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={786}
                    height={647}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Michael has been an employee of IBM since September 2015,
                  where he began his career as part of the IBM Cloud
                  Dedicated/Local team - the Logging and Monitoring Service was
                  the product that he was assigned to. <br />
                  Michael is a graduate of CK401 Computer Science at University
                  College Cork, Ireland. He graduated with a BSc (Hons) in 2012,
                  and was conferred with his PhD in Computer Science in February
                  2016.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
}
