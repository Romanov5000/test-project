import React from 'react';

const DataList = ({ todos }) => {

    if (!todos.length) {
        return <p>No results found</p>
    }

    return (
        <ul className="list-group dataElements">
            {todos.map((item) => {
                return (
                    <li className={'list-group-item'}>
                        {item}
                    </li>

                )
            })}
        </ul>
    )
};

export default DataList;