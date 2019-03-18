import React from 'react';
import { StateConsumer } from '../state/stateContext';

function withStateContext(Component) {
    return function WrapperComponent(props) {
        return (
            <StateConsumer>
                {context => <Component {...props} context={context} />}
            </StateConsumer>
        );
    };
}

export default withStateContext;
