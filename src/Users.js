import React from 'react';

export default function Users(props) {
    const { data } = props;
    return (
        <div>
            <h1>User Details</h1>
            <h4>Name: {data.name}</h4>
            <h4>Age: {data.age}</h4>
        </div>
    )
}
