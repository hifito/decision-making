import React, {useState, useEffect} from "react";
import {Button, Col, Divider, Form, Input, Row, Space, Table} from 'antd';
import {Typography} from 'antd';
import TableInit from "../components/table/TableInit";

const {Text, Title} = Typography;

const Calculate = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState(1);
    const [beli, setBeli] = useState("");
    const [jual, setJual] = useState("");
    const [payoff, setPayoff] = useState([[]]);
    const [exReturn, setExReturn] = useState([[]]);

    const onFinish = (values) => {
        values["id"] = id
        data.push(values)
        setId(id + 1);
        console.log(data)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const transpose = (a) => {
        return Object.keys(a[0]).map(function (c) {
            return a.map(function (r) {
                return r[c];
            });
        });
    };

    const calculatePayoff = () => {
        var temp = new Array(data.length);
        for (var i = 0; i < temp.length; i++) {
            temp[i] = new Array(data.length);
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[j].permintaan < data[i].permintaan) {
                    temp[i][j] = data[j].permintaan * jual - data[i].permintaan * beli;
                } else {
                    temp[i][j] = data[i].permintaan * jual - data[i].permintaan * beli;
                }
            }
        }
        setPayoff(transpose(temp));
        console.log("ini payoff", payoff)
        return temp;
    };

    const calculateReturn = async () => {
        const payoffRef = await calculatePayoff();
        var temp = new Array(data.length);
        for (var i = 0; i < temp.length; i++) {
            temp[i] = new Array(data.length);
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                temp[i][j] = data[j].probabilitas * payoffRef[i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            var sum = 0;
            for (let j = 0; j < temp.length; j++) {
                sum += temp[i][j];
            }
            temp[i][temp.length] = sum;
        }
        setExReturn(transpose(temp));
    };

    useEffect(() => {
        if (data.length > 0) calculateReturn();
    }, [data, beli, jual]);

    const dataInit = data

    return (
        <>
            <div>
                <Space direction="vertical" style={{width: "100%"}}>
                    <Title level={5}>Data Permintaan dan Probabilitas</Title>
                        <Row type="flex" justify="center">
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 4,
                                    }}
                                    wrapperCol={{
                                        span: 12,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    layout="vertical"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Permintaan"
                                        name="permintaan"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Masukkan permintaan!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Probabilitas"
                                        name="probabilitas"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Masukkan probabilitas!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                    >
                                        <Button type="primary" htmlType="submit">Tambah Data</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>
                                <TableInit dataSource={[...dataInit]} />
                            </Col>
                        </Row>
                    <Divider/>
                    <Space direction="vertical">
                        <Text>Harga Beli</Text>
                        <Input type="number" onChange={(e) => setBeli(e.target.value)}/>
                        <Text>Harga Jual</Text>
                        <Input type="number" onChange={(e) => setJual(e.target.value)}/>
                    </Space>
                    <Divider/>
                    <Title level={5}>Tabel Pay Off</Title>
                    <Row style={{borderBottom: "1px solid black"}}>
                        <Col span={3}>Probabilitas</Col>
                        <Col span={15}>
                            Jumlah Permintaan dan Probabilitas
                        </Col>
                    </Row>
                    <Row>
                        <Col span={3}/>
                        {
                            data && data.map((e, index) => {
                                return (
                                    <>
                                        <Col span={5}>{e.permintaan} = {e.probabilitas}</Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                    {data?.length &&
                    data.map((list, i) => (
                        <Row>
                            <Col span={3} key={i}>
                                {list.permintaan}
                            </Col>
                            {payoff?.length &&
                            payoff.map((list, j) => (
                                <Col span={5} key={j}>
                                    {list[i]}
                                </Col>
                            ))}
                        </Row>
                    ))}
                    <Divider/>
                    <Title level={5}>Tabel Expected Pay Off</Title>
                    <Row style={{borderBottom: "1px solid black"}}>
                        <Col span={3}>Expected Result</Col>
                        <Col span={15}>Probabilitas</Col>
                        <Col>ER</Col>
                    </Row>
                    <Row>
                        <Col span={3}/>
                        {
                            data && data.map((e, index) => {
                                return (
                                    <>
                                        <Col span={5}>{e.probabilitas}</Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                    {data?.length &&
                    data.map((list, i) => (
                        <Row>
                            <Col span={3} key={i}>
                                ER = {list.permintaan}
                            </Col>
                            {exReturn?.length &&
                            exReturn.map((list, j) => (
                                <Col span={5} key={j}>
                                    {list[i]}
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Space>
            </div>
            <br/><br/>
        </>
    )
}

export default Calculate