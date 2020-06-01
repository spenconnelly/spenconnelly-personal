import React from 'react'
import { mount } from 'enzyme'

import PdfPlayer from './PdfPlayer'

describe('PdfPlayer component', () => {
    let wrapper
    let component

    beforeEach(() => {
        wrapper = mount(<PdfPlayer />)
    })

    it('should render properly', () => {
        component = wrapper.find(PdfPlayer)

        expect(component.exists()).toBeTruthy()
    })
})
