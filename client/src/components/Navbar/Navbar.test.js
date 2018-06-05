import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { mountWrap, shallowWrap } from '../../utils/testContextWrap'
import renderer from 'react-test-renderer'

describe('Navbar', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders three <NavLink />s', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(
      wrapper
        .dive()
        .dive()
        .find(NavLink).length
    ).toBe(3)
  })
})
