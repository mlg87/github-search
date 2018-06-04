import React from 'react'
import { Navbar } from '../../src/components'
import renderer from 'react-test-renderer'

test('renders three links', () => {
  const component = renderer.create(<Navbar />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders with enzyme', () => {
  const wrapper = shallow(<Navbar />)
  expect(wrapper).toMatchSnapshot()
})
