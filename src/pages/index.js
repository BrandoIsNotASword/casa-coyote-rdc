import React from 'react'
import { v4 } from 'uuid'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Text, Box, Heading, Stack } from '@chakra-ui/core'

import { GiCutDiamond, GiOakLeaf, GiStarsStack, GiAirtightHatch } from 'react-icons/gi'

import {
  Hero,
  HeroBody,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
  Article,
  Section,
  Features,
  FeatureList,
  FeatureItem,
  FloatingBanner,
  Gallery,
  ImageContent,
} from '../ui'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BookButton from '../components/bookButton'
import FormContact from '../components/formContact'

import heroBg from '../images/hero-background.jpg'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero bg={heroBg}>
        <HeroBody>
          <HeroTitle>Hospédate en lo natural</HeroTitle>
          <HeroSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit condimentum ipsum.
          </HeroSubtitle>
          <HeroCta>
            <BookButton />
          </HeroCta>
        </HeroBody>
      </Hero>

      <Article>
        <Section id="hotel" titleAlign="center">
          <Stack marginBottom={10} textAlign="center" marginX="auto" maxWidth="720px">
            <Heading as="h3">Casa Coyote Ruta de los Cenotes</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
          <Features>
            <FeatureList>
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Natural environment"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<GiCutDiamond size="3rem" />}
              />
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Hidden location"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<GiOakLeaf size="3rem" />}
              />
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Ammenities"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<GiStarsStack size="3rem" />}
              />
              <FeatureItem
                alignItems="center"
                textAlign="center"
                title="Private room"
                desc="Available around-the-clock, your personal concierge will handle all the details, from last-minute itinerary changes to exquisite local experiences."
                icon={<GiAirtightHatch size="3rem" />}
              />
            </FeatureList>
          </Features>
        </Section>

        <Section>
          <Gallery
            thumbs={[
              data.gallery.edges[0].node.childImageSharp.fixed.src,
              data.gallery.edges[1].node.childImageSharp.fixed.src,
              data.gallery.edges[2].node.childImageSharp.fixed.src,
              data.gallery.edges[3].node.childImageSharp.fixed.src,
              data.gallery.edges[4].node.childImageSharp.fixed.src,
            ]}
            images={data.gallery.edges.map((image) => (
              <Img
                key={v4()}
                fixed={image.node.childImageSharp.fixed}
                imgStyle={{ objectFit: 'contain' }}
              />
            ))}
            buttonText="View photos"
          />
        </Section>

        <Section id="experience">
          <Stack spacing={16}>
            <ImageContent
              imageDesc="Natural bungalows"
              image={data.bungalows.childImageSharp.fixed.src}
            >
              <Stack spacing={6} shouldWrapChildren>
                <GiOakLeaf size="3rem" />
                <Heading as="h3">Natural environment</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ultricies mi, at
                  facilisis lorem. Suspendisse ante ex, tristique ut nibh et, dapibus tempor ex.
                  Curabitur sollicitudin ultricies odio at interdum. In posuere ullamcorper aliquam.
                </Text>
                <BookButton />
              </Stack>
            </ImageContent>
            <ImageContent
              reversed
              imageDesc="Mayan ceremonies"
              image={data.ceremonies.childImageSharp.fixed.src}
            >
              <Stack spacing={6} shouldWrapChildren>
                <GiAirtightHatch size="3rem" />
                <Heading as="h3">Mayan ceremonies</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ultricies mi, at
                  facilisis lorem. Suspendisse ante ex, tristique ut nibh et, dapibus tempor ex.
                  Curabitur sollicitudin ultricies odio at interdum. In posuere ullamcorper aliquam.
                </Text>
                <BookButton />
              </Stack>
            </ImageContent>
          </Stack>
        </Section>

        <Section id="contact" backgroundColor="gray.100" fullWidth>
          <Box maxWidth="860px" marginX="auto" paddingX={8}>
            <Stack marginBottom={10} textAlign="center" marginX="auto" maxWidth="720px">
              <Heading as="h3">Casa Coyote Ruta de los Cenotes</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
            </Stack>
            <FormContact
              hideOnSuccess
              nameLabel="Name"
              namePlaceholder="John Smith"
              emailLabel="Email"
              emailPlaceholder="myemail@example.com"
              emailRequiredText="Email is required"
              emailInvalidText="Email is invalid"
              messageLabel="Message"
              messageRequiredText="Message is required"
              buttonText="Send message"
              successMessage="Thanks for your submission!"
            />
          </Box>
        </Section>
      </Article>

      <FloatingBanner>
        <Box>
          <Text fontSize="md" fontWeight="bold">
            100% ecohotel
          </Text>
          <Text fontSize="md">Best price on the market.</Text>
        </Box>
        <BookButton size="md" />
      </FloatingBanner>
    </Layout>
  )
}

export const query = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 520, quality: 65) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  query {
    bungalows: file(relativePath: { eq: "bungalows.jpg" }) {
      ...fixedImage
    }

    ceremonies: file(relativePath: { eq: "ceremonies.jpg" }) {
      ...fixedImage
    }

    gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }, sort: { fields: name }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 1024, quality: 65) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
