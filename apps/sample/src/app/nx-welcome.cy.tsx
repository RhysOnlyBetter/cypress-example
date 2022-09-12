import * as React from 'react'
import { mount } from 'cypress/react'
import NxWelcome from './nx-welcome'


describe(NxWelcome.name, () => {
  it('renders', () => {
    mount(<NxWelcome />)
  })
})

