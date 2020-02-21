import React from 'react'
import { mount } from 'enzyme'

import Home from './Home'

describe('Home page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<Home />)
    })

    it('should render properly', () => {
        component = wrapper.find(Home)

        expect(component.exists()).toBeTruthy()
    })
})
