import React, {useState} from 'react';

function BlairComp (props) {
    const [count, setCount] = useState(1000);
    // console.log(props);
    function myOnClick(e) {
        // console.log('you clicked in Blair Comp')
        props.countFunc();
        // count++;
        // console.log('We just clicked', count)
        // setCount(count + 1);
    }

    return (
        <div>
            <h1 onClick={props.countFunc}>Hello World from BlairComp{props.countx}</h1>
            {/* <h1 onClick={myOnClickCount}>Hello World: count {count}</h1> */}
        </div>
    )
}

export default BlairComp