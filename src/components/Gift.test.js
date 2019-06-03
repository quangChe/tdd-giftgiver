import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders without crashing', () => {
    expect(gift).toMatchSnapshot();
  })

  it('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({person: '', present: ''});
  })

  describe('when typing into the person input', () => {
    const INPUT_VALUE = 'Uncle Burt';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: INPUT_VALUE } });
    })

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(INPUT_VALUE);
    })
  })
})