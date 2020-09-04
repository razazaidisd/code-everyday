import React, { useState, useEffect } from 'react';

function FormUsingHooks() {
    console.log('rendering...');
    const schema = [
        {
            name: 'fname',
            type: 'text',
            placeholder: 'First name',
        },
        {
            name: 'lname',
            type: 'text',
            placeholder: 'Last name',
        },
    ];
    const [state, setState] = useState({
        fname: '',
        lname: '',
    });
    useEffect(() => {
        console.log('useEffect called...');

        return () => {
            console.log('cleaning  up...');
        }
    });


    const onChange = e => {
        const el = e.target;
        if (!el) return false;

        setState({
            ...state,
            [el.name]: el.value,
        })
    };

    const onSubmit = () => {
      alert(JSON.stringify(state));
    };

    return (
        <div>
            <h2>Form using hooks</h2>
            <form>
                {schema.map(field => (
                    <label key={field.name}>
                        {field.placeContent}
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={onChange}
                        />
                    </label>
                ))}
                <button type="button" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default React.memo(FormUsingHooks);