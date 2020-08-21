import React from 'react'
import { FcApproval } from 'react-icons/fc'

import {
  Hero,
  HeroBody,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  Article,
  Section,
  Features,
  FeatureList,
  FeatureItem,
} from '../ui'

import Layout from '../components/layout'
import SEO from '../components/seo'

import heroBg from '../images/hero-background.jpg'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero bg={heroBg}>
        <HeroBody>
          <HeroTitle>Unique stays</HeroTitle>
          <HeroSubtitle>
            Boats, treehouses, and more—these spaces are more than just a place to sleep.
          </HeroSubtitle>
          <HeroButton>Book now</HeroButton>
        </HeroBody>
      </Hero>

      <Article>
        <Section>
          <Features>
            <FeatureList>
              <FeatureItem
                title="Lorem Ipsum"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<FcApproval size="3rem" />}
              />
              <FeatureItem
                title="Lorem Ipsum"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<FcApproval size="3rem" />}
              />
              <FeatureItem
                title="Lorem Ipsum"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<FcApproval size="3rem" />}
              />
            </FeatureList>
          </Features>
        </Section>

        <Section></Section>
      </Article>
    </Layout>
  )
}

export default IndexPage
