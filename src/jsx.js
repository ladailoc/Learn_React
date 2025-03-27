import React from 'react';

const jsx = () => {
    const element = <div id="root">Hello World</div>;
    const element2 = React.createElement('div', { id: 'root' }, 'Hello World');
    const element3 = (<div>
        <span>Hello</span> <span>World</span>
    </div>)
    return (
        <div>

        </div>
    );
};

export default jsx;
