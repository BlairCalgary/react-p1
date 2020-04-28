import React from 'react';
import { fireEvent, render, screen, act } from "@testing-library/react";
import BlairComp from './BlairComp';

test('test the BlairComp', async () => {
    // console.log('Does this work');

    const myCountFunc = jest.fn();

    render(<BlairComp countFunc={myCountFunc}></BlairComp>);
    // screen.debug();
    const el = screen.getByText(/BlairComp/i);
    // click('BlairComp');
    console.log(myCountFunc.mock.calls.length);
    
    click(/blaircomp/i);
    click(/blaircomp/i);
    click(/blaircomp/i);
    
    // fireEvent.click(
    //     screen.getByText('BlairComp')
    // )

    console.log(myCountFunc.mock.calls.length);

});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    )
}