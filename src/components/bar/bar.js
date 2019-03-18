import React from 'react';
import Fiz from '../fiz/fiz';

function Bar(props) {
  return (
    <div>
      This is bar!
      <div>
        <button onClick={props.addFiz}>Click me to add a "fiz"</button>
        {
          props.fizzes.map(() => {
            return (
              <Fiz></Fiz>
            );
          })
        }
      </div>
    </div>
  );
}

export default Bar;
