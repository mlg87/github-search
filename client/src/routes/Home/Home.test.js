import React from 'react'
import { Home } from './Home'
import { RepositoryStore } from '../../stores/Repository/Repository'

describe('Home', () => {
  let store

  beforeEach(() => {
    store = new RepositoryStore()
  })

  test('renders correctly', () => {
    const wrapper = render(<Home repositoryStore={store} />)
    expect(wrapper).toMatchSnapshot()
  })
})
