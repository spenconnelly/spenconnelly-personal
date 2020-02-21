import React from 'react'
import { mount } from 'enzyme'

import Portfolio from './Portfolio'

describe('Portfolio page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<Portfolio />)
    })

    it('should render properly', () => {
        component = wrapper.find(Portfolio)

        expect(component.exists()).toBeTruthy()
    })
})
