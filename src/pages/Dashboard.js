import React from "react"
import {Typography} from 'antd';
import {Space} from 'antd';
import ButtonPrimary from "../components/button/ButtonPrimary";
import {Link} from "react-router-dom"

const {Title, Text} = Typography;

const Dashboard = () => {
    return (
        <>
            <Space size={1} direction="vertical" style={{width: 402}}>
                <Title level={1} style={{fontSize: 45, margin: 0}}>Pengambilan Keputusan Dalam Kondisi Beresiko</Title>
                <Text type="secondary" style={{fontSize: 22}}>suatu kejadian atau keadaan dimana terjadi dua kemungkinan hasil (berhasil/gagal) yang akan terjadi jika mengambil suatu keputusan dalam suatu peristiwa</Text>
                <br/>
                <Link to="/inputEVPI">
                    <ButtonPrimary text="Mulai >>"/>
                </Link>
            </Space>
        </>
    )
}

export default Dashboard