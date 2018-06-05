import React from 'react'
import { Route } from 'react-router-dom'
import Router from './Router'

describe('Router', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Router />)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders three <Route />s', () => {
    const wrapper = shallow(<Router />)
    expect(wrapper.find(Route).length).toBe(3)
  })
})
