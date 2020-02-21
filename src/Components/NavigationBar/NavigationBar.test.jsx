import React from 'react'
import { mount } from 'enzyme'

import NavigationBar from './NavigationBar'

describe('NavigationBar page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<NavigationBar />)
    })

    it('should render properly', () => {
        component = wrapper.find(NavigationBar)

        expect(component.exists()).toBeTruthy()
    })
})
