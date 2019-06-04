import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const removeGift = jest.fn();
  const id = 1;
  const props = {
    gift: { id },
    removeGift
  };
  const gift = shallow(<Gift {...props} />);

  it('renders without crashing', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({person: '', present: ''});
  });

  describe('when typing into the `person` input', () => {
    const person = 'Uncle Burt';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the `present` input', () => {
    const present = 'A new turnip';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present}});
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking `remove gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the `removeGift` callback', () => {
      expect(removeGift).toHaveBeenCalledWith(id);
    });
  });
});