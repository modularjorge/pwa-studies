import React from 'react';

const Scroller = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '300px'}}>
        {props.children}
    </div>
  );
}

export default Scroller;
