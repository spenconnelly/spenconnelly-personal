import React from 'react'
import { mount } from 'enzyme'

import Resume from './Resume'

describe('Resume page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<Resume />)
    })

    it('should render properly', () => {
        component = wrapper.find(Resume)

        expect(component.exists()).toBeTruthy()
    })
})
