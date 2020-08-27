import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
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
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <Hero bg={heroBg}>
        <HeroBody>
          <HeroTitle>{t('hero.title')} </HeroTitle>
          <HeroSubtitle>{t('hero.desc')}</HeroSubtitle>
          <HeroCta>
            <BookButton>{t('commons.bookNow')}</BookButton>
          </HeroCta>
        </HeroBody>
      </Hero>

      <Article>
        <Section id="hotel" titleAlign="center">
          <Stack marginBottom={10} textAlign="center" marginX="auto" maxWidth="720px">
            <Heading as="h3">{t('intro.title')}</Heading>
            <Text>{t('intro.desc')}</Text>
          </Stack>
          <Features>
            <FeatureList>
              <FeatureItem
                align="center"
                textAlign="center"
                icon={<GiCutDiamond size="3rem" />}
                title={t('intro.features.location.title')}
                desc={t('intro.features.location.desc')}
              />
              <FeatureItem
                align="center"
                textAlign="center"
                icon={<GiOakLeaf size="3rem" />}
                title={t('intro.features.nature.title')}
                desc={t('intro.features.nature.desc')}
              />
              <FeatureItem
                align="center"
                textAlign="center"
                icon={<GiStarsStack size="3rem" />}
                title={t('intro.features.ammenities.title')}
                desc={t('intro.features.ammenities.desc')}
              />
              <FeatureItem
                align="center"
                textAlign="center"
                icon={<GiAirtightHatch size="3rem" />}
                title={t('intro.features.private.title')}
                desc={t('intro.features.private.desc')}
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
            buttonText={t('commons.viewPhotos')}
          />
        </Section>

        <Section id="experience">
          <Stack spacing={16}>
            <ImageContent
              imageDesc={t('rooms.imageDesc')}
              image={data.bungalows.childImageSharp.fixed.src}
            >
              <Stack spacing={6}>
                <Heading as="h3">{t('rooms.title')}</Heading>
                {t('rooms.desc', { returnObjects: true }).map((text) => (
                  <Text>{text}</Text>
                ))}
                <Box>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119867.30049297537!2d-87.51628317897949!3d20.140173585968363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd74cf63f31e1%3A0x905609cdd99ba908!2sCasa%20Coyote%20Tulum!5e0!3m2!1sen!2smx!4v1598066920612!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: '0' }}
                    aria-hidden="false"
                    title="Casa Coyote Ruta de los Cenotes"
                  />
                </Box>
                <BookButton width="fit-content">{t('commons.bookNow')}</BookButton>
              </Stack>
            </ImageContent>
            <ImageContent
              reversed
              imageDesc="Temazcal"
              image={data.ceremonies.childImageSharp.fixed.src}
            >
              <Stack spacing={6}>
                <Heading as="h3">{t('experience.title')}</Heading>
                {t('experience.desc', { returnObjects: true }).map((text) => (
                  <Text>{text}</Text>
                ))}
                <BookButton width="fit-content">{t('commons.bookNow')}</BookButton>
              </Stack>
            </ImageContent>
          </Stack>
        </Section>

        <Section id="contact" backgroundColor="gray.100" fullWidth>
          <Box maxWidth="860px" marginX="auto" paddingX={8}>
            <Stack marginBottom={10} textAlign="center" marginX="auto" maxWidth="720px">
              <Heading as="h3">{t('form.title')}</Heading>
              <Text>{t('form.desc')}</Text>
            </Stack>
            <FormContact
              hideOnSuccess
              nameLabel={t('form.inputs.name.label')}
              namePlaceholder={t('form.inputs.name.placeholder')}
              emailLabel={t('form.inputs.email.label')}
              emailPlaceholder={t('commons.emailPlaceholder')}
              emailRequiredText={t('form.inputs.email.required')}
              emailInvalidText={t('form.inputs.email.invalid')}
              messageLabel={t('form.inputs.message.label')}
              messageRequiredText={t('form.inputs.message.required')}
              buttonText={t('form.inputs.button')}
              successMessage={t('form.inputs.successMessage')}
            />
          </Box>
        </Section>
      </Article>

      <FloatingBanner>
        <Box>
          <Text fontSize="md" fontWeight="bold">
            {t('footer.floatingBookNow.title')}
          </Text>
          <Text fontSize="md">{t('footer.floatingBookNow.subtitle')}</Text>
        </Box>
        <BookButton size="md">{t('commons.bookNow')}</BookButton>
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
