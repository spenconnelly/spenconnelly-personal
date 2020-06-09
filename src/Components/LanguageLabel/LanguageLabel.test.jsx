import React from 'react'
import { mount } from 'enzyme'

import LanguageLabel from './LanguageLabel'

describe('LanguageLabel component', () => {
    let wrapper
    let component

    describe('rendering', () => {
        beforeEach(() => {
            wrapper = mount(<LanguageLabel />)
        })

        it('should render properly', () => {
            component = wrapper.find(LanguageLabel)

            expect(component.exists()).toBeTruthy()
        })
    })
})
