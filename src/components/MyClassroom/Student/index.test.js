import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Student from '../Student/index';

const testProps = {
    handleClick: jest.fn()
}


test('check if homework function if called when button is clicked',() =>{
    
    const { getByTestId } = render (<Student {...testProps}  />);
    const actual = getByTestId("clickavatar");
    fireEvent.click(actual);
    expect(testProps.handleClick).toHaveBeenCalled();

} )