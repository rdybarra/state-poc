import React from 'react';
import Bar from '../bar/bar';
import withState from '../../higherOrderComponents/withState';

function Foo(props) {
  return (
    <div>
      This is foo!
      <Bar fizzes={props.context.state.fizzes} addFiz={props.context.repository.addFiz} />
    </div>
  );
}

export default withState(Foo);
