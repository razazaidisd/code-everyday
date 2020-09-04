import React from 'react';
import produce from "immer"


function ImmerWorld() {

    const baseState = [
        {
            todo: "Learn typescript",
            done: true
        },
        {
            todo: "Try immer",
            done: false
        }
    ];

    const nextState = produce(baseState, draftState => {
        draftState.push({todo: "Tweet about it"})
        draftState[1].done = true
    });
    return (
        <div>
            <h3>Immer example</h3>
            <div>
                <h4>Base state</h4>
                <pre>
                    {JSON.stringify(baseState)}
                </pre>
            </div>
            <div>
                <h4>Next state</h4>
                <pre>
                    {JSON.stringify(nextState)}
                </pre>
            </div>
        </div>
    )
}

export default ImmerWorld;