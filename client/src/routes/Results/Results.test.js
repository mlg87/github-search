import React from 'react'
import { Results } from './Results'
import { RepositoryStore } from '../../stores/Repository/Repository'

describe('Results', () => {
  let store

  beforeEach(() => {
    store = new RepositoryStore()
  })

  test('renders correctly', () => {
    const wrapper = shallow(<Results repositoryStore={store} />)
    expect(wrapper).toMatchSnapshot()
  })
})
