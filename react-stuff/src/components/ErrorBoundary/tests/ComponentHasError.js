import React from 'react';
import ErrorBoundary from '../index';

const ComponentHasError = () => {
    const onBombClick = () => {
        throw new Error("💥💣💥");
    };
    return (
        <ErrorBoundary boundaryName="ComponentHasError">
            <div className="component-has-error" data-id="componentHasError">
                <span>This is a component that can have Error</span>
                <button onClick={onBombClick}>click to explode</button>
            </div>
        </ErrorBoundary>
    )
};

export default ComponentHasError;