import React from 'react';


const DataList = (props) => {
    const {todos} = props;
    if(!todos.length) {
        const dataElement = <p>No results found</p>;
        return dataElement
    }

    const dataElement = todos.map((item) => {
       return (
           <li className={'List'}>
                {item}
           </li>
           
       )
    });

    return (
            <ul className="list-group">
            {dataElement}
            </ul>
      )
}
export default DataList;