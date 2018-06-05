import React from 'react'
import About from './About'

describe('About', () => {
  let component

  beforeEach(() => {
    if (component) component.unmount()
  })

  test('renders correctly', () => {
    const wrapper = shallow(<About />)
    expect(wrapper).toMatchSnapshot()
  })
})
