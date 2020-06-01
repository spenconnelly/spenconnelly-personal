import React from 'react'
import { mount } from 'enzyme'

import HideOnScroll from './HideOnScroll'

describe('NavigationBar page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<HideOnScroll />)
    })

    it('should render properly', () => {
        component = wrapper.find(HideOnScroll)

        expect(component.exists()).toBeTruthy()
    })
})
