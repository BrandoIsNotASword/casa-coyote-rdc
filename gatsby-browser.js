/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { RecoilRoot } from 'recoil'

export function wrapRootElement({ element }) {
  return <RecoilRoot>{element}</RecoilRoot>
}
