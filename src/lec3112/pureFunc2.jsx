import * as React from "react";
const MyButton3 = ({abc,def}) =>
    <button disabled={abc}>
        {def}
    </button>;

    // pass the default value

    MyButton3.defaultProps = {
        abc : false,
        def : "Click Me",
    };

export default MyButton3;
