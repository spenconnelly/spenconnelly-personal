import React from 'react'
import { mount } from 'enzyme'

import ContentContainer from './ContentContainer'

describe('NavigationBar page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<ContentContainer />)
    })

    it('should render properly', () => {
        component = wrapper.find(ContentContainer)

        expect(component.exists()).toBeTruthy()
    })
})
