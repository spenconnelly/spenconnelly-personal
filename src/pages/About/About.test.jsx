import React from 'react'
import { mount } from 'enzyme'

import About from './About'

describe('About page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<About />)
    })

    it('should render properly', () => {
        component = wrapper.find(About)

        expect(component.exists()).toBeTruthy()
    })
})
