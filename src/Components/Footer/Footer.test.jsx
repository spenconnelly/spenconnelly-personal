import React from 'react'
import { mount } from 'enzyme'

import Footer from './Footer'

describe('NavigationBar page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<Footer />)
    })

    it('should render properly', () => {
        component = wrapper.find(Footer)

        expect(component.exists()).toBeTruthy()
    })
})
