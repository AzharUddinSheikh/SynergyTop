import React from 'react';

const TableHeader = ({columns}) => {
    return (
        <thead>
            <tr style={{cursor:'pointer'}}>
                {columns.map(column => 
                    <th key={column.key}>
                        {column.label}
                    </th>
                )}
            </tr>
        </thead>
    );
}
 
export default TableHeader;