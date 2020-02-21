import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<App />)
    })

    it('should render properly', () => {
        component = wrapper.find(App)

        expect(component.exists()).toBeTruthy()
    })
})
