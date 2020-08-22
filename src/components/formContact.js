import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'

import {
  Flex,
  Input,
  Button,
  Text,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core'

function FormContact({
  hideOnSuccess,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  emailRequiredText,
  emailInvalidText,
  messageLabel,
  messageRequiredText,
  buttonText,
  successMessage,
  onSubmit,
}) {
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validate: (values) => {
      const errors = {}

      if (!values.email) {
        errors.email = emailRequiredText
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = emailInvalidText
      }

      if (!values.message) {
        errors.message = messageRequiredText
      }

      return errors
    },
    onSubmit: (values, { setSubmitting }) => {
      onSubmit(values, (success) => setSuccess(success))
      setSubmitting(false)
    },
  })

  if (hideOnSuccess && success) {
    return (
      <Flex padding={10} justify="center">
        <Text fontWeight="bold" fontSize="xl">
          {successMessage}
        </Text>
      </Flex>
    )
  }

  const { handleBlur, handleChange, handleSubmit, touched, errors, values, isSubmitting } = formik

  return (
    <form onSubmit={handleSubmit}>
      <Stack width="100%" direction="column" spacing={6}>
        <FormControl>
          <FormLabel htmlFor="name">{nameLabel}</FormLabel>
          <Input
            type="name"
            id="name"
            placeholder={namePlaceholder}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>

        <FormControl isInvalid={errors.email && touched.email}>
          <FormLabel isRequired htmlFor="email">
            {emailLabel}
          </FormLabel>
          <Input
            placeholder={emailPlaceholder}
            type="email"
            id="email"
            aria-describedby="email-helper-text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.message && touched.message}>
          <FormLabel isRequired htmlFor="message">
            {messageLabel}
          </FormLabel>
          <Textarea
            id="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>
        <Button variantColor="teal" size="lg" type="submit" isDisabled={isSubmitting}>
          {buttonText}
        </Button>
      </Stack>
    </form>
  )
}

FormContact.propTypes = {
  hideOnSuccess: PropTypes.bool,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  emailLabel: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  emailRequiredText: PropTypes.string,
  emailInvalidText: PropTypes.string,
  messageLabel: PropTypes.string,
  messageRequiredText: PropTypes.string,
  buttonText: PropTypes.string,
  successMessage: PropTypes.string,
  onSuccess: PropTypes.func,
}

FormContact.defaultProps = {
  hideOnSuccess: false,
  nameLabel: '',
  namePlaceholder: '',
  emailLabel: '',
  emailPlaceholder: '',
  emailRequiredText: '',
  emailInvalidText: '',
  messageLabel: '',
  messageRequiredText: '',
  buttonText: '',
  successMessage: PropTypes.string,
  onSuccess: () => {},
}

export default FormContact
