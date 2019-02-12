/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import Home from './home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home component', () => {
  let home

  beforeEach(() => {
    home = shallow(<Home />)
  })

  it('renders a welcoming greeting', () => {
    expect(home.find('em').text()).to.be.equal(
      `Yes... at the end, it's pure math.`
    )
  })
})
