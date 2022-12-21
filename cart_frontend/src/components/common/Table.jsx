import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ columns, allData }) => {
    return (
        <table className="table">
            <TableHeader columns={columns} />
            <TableBody
                allData={allData}
                columns={columns} />
        </table>
    );
}

export default Table;