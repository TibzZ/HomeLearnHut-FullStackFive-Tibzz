import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from './index';
import {render} from '@testing-library/react';
// import "jest-dom/extent-expect";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginButton></LoginButton>, div)
})

// it("renders button correctly", () => {
//     const {getByTestID} = render (<LoginButton></LoginButton>)



// })

