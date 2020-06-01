import React from 'react'
import { mount } from 'enzyme'

import RepoCard from './RepoCard'

describe('RepoCard component', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<RepoCard />)
    })

    it('should render properly', () => {
        component = wrapper.find(RepoCard)

        expect(component.exists()).toBeTruthy()
    })
})
