import React from "react";
import {Table} from 'antd';

const TableInit = (props) => {
    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Permintaan',
            dataIndex: 'permintaan',
            key: 'permintaan',
        },
        {
            title: 'Probabilitas',
            dataIndex: 'probabilitas',
            key: 'probabilitas',
        },
    ];

    return (
        <>
            <Table dataSource={props.dataSource} columns={columns} pagination={false}/>
        </>
    )
}

export default TableInit