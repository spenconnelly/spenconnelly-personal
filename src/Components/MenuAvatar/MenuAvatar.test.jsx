import React from 'react'
import { mount } from 'enzyme'

import MenuAvatar from './MenuAvatar'

describe('MenuAvatar page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<MenuAvatar />)
    })

    it('should render properly', () => {
        component = wrapper.find(MenuAvatar)

        expect(component.exists()).toBeTruthy()
    })
})
