import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import NavigationBar from './NavigationBar'

describe('NavigationBar page', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(
            <Router>
                <NavigationBar />
            </Router>
        )
    })

    it('should render properly', () => {
        component = wrapper.find(NavigationBar)

        expect(component.exists()).toBeTruthy()
    })
})
