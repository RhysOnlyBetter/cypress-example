import * as React from 'react'
import { mount } from 'cypress/react'
import App from './app'


describe(App.name, () => {
  it('renders', () => {
    mount(<App />)
  })
})

