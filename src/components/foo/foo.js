import React from 'react';
import Bar from '../bar/bar';
import { StateConsumer } from '../../state/stateContext';

function Foo() {
  return (
    <div>
      This is foo!
      <StateConsumer>
        {context =>
          <Bar fizzes={context.state.fizzes} addFiz={context.repository.addFiz} />
        }
      </StateConsumer>
    </div>
  );
}

export default Foo;
