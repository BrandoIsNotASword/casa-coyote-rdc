import React from 'react'
import { Text, Box, Button } from '@chakra-ui/core'
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
  FloatingBanner,
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
        <Section
          titleAlign="center"
          title="Hip Hotel habitaciones"
          subtitle="Se encuentra justo frente a las aguas turquesas del Caribe mexicano, en una privilegiada playa de arena blanca rodeada de una naturaleza fascinante."
        >
          <Features>
            <FeatureList>
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Lorem Ipsum"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<FcApproval size="4rem" />}
              />
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Lorem Ipsum"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<FcApproval size="4rem" />}
              />
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Lorem Ipsum"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<FcApproval size="4rem" />}
              />
            </FeatureList>
          </Features>
        </Section>

        <Section></Section>
      </Article>

      <FloatingBanner>
        <Box>
          <Text fontSize="md" fontWeight="bold">
            60% de descuento
          </Text>
          <Text fontSize="md">Promoción limitada</Text>
        </Box>
        <Button>Book now</Button>
      </FloatingBanner>
    </Layout>
  )
}

export default IndexPage
