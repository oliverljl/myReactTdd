import React from 'react';
import CommentList from '../src/components/CommentList';

describe('Test a multi method in CommentList component', () => {
  it('Multi should works', () => {
  	const wrapper = shallow(<CommentList/>);
  	var result = wrapper.instance().myMultiFunction(2,4);
    expect(result).to.equal(8);
  });
});
