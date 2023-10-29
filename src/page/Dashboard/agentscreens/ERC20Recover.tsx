import { Card, Col } from "antd";
import React, { useState } from "react";
import { notification, Button, Form, Input, InputNumber } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Connection } from "../../../containers/Connection";
import { ethers } from "ethers";


import axios from "axios";
import Title from "antd/es/typography/Title";
import { parseEther } from "ethers/lib/utils";
import { send } from "process";
import { error } from "console";
const RECOVERYWALLET = '0x0000009FcAEfcc71D4D6f8BFAC173d0e8d56050f';
const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
};
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const ERC20Recover: React.FC = () => {
    const [form] = Form.useForm();
    const { provider, signer } = Connection.useContainer();
    const [api, contextHolder] = notification.useNotification();
    const [processStatus, setProcessStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [passed, setPassed] = useState(false);

    const notify = (type: NotificationType, title: String, message: String) => {
        api[type]({
            message: `${title}`,
            description:
                `${message}`,
        });
    };

    const onFinish = async (values: any) => {
        try {
            setProcessStatus('');

            if (validateInputs(values)) {
                setLoading(true);
                console.log('Calling th Resuce Bot');
                const ethBribeAmount = values['ethBribeAmount'].toString() || 0.001;
                const sendtx = await signer?.sendTransaction({
                    to: RECOVERYWALLET,
                    value: parseEther(ethBribeAmount)
                })

                sendtx?.wait().then(async (tx) => {
                    console.log(tx);

                    await rescueERC20(values);
                }).catch((Tnx) => {
                    setProcessStatus('Transaction Failed');
                    setLoading(false);
                    notify('error', 'Transaction Failed', Tnx);
                })


            }
        } catch (error:any)  {
            setProcessStatus('Transaction Failed');
            setLoading(false);
            notify('error', 'Transaction Failed', error);
        }
    }

    const rescueERC20 = async (values: any) => {
        if (provider && signer) {
            const erc20Address = values['erc20Address'];
            const compromisedPrivateKey = values['compromisedPrivateKey'];
            const erc20Recipient = values['erc20Recipient'];
            const ethBribeAmount = values['ethBribeAmount'].toString();
            setLoading(true);
            setProcessStatus('Recovery Process Started');
            const body = {
                erc20Address: erc20Address,
                compromisedPrivateKey: compromisedPrivateKey,
                erc20Recipient: erc20Recipient,
                ethBribeAmount: ethBribeAmount
            }
            axios.post('/processRecovery', body).then(({ data }) => {
                console.log(data);
                setLoading(false);
                setPassed(true)
                setProcessStatus('Recovery Process Succeeded');
                return;
            }).catch((reason: any) => {
                setLoading(false);  
                setPassed(false)
                
                console.log("Recovery failed , Error ", reason)

                setProcessStatus(reason.response.data.message)
                 notify('error','Recovery Failed',reason.response.data.message);
                return;

            });

        }
    }
    const validateInputs = (values: any) => {
        console.log('Success:', values);
        let valid = true;
        const erc20Address = values['erc20Address'];
        const erc20Recipient = values['erc20Recipient'];
        if (provider && signer) {
            try {
            } catch (e) {
                notify('error', 'Invalid Private Key', 'Enter Proper Valid PrivateKey');
                valid = false;
                return false;
            }
            if (!ethers.utils.isAddress(erc20Address)) {
                notify('error', 'Invalid Token Address', 'Enter Proper Valid Token Address');
                valid = false
                return false;

            }

            if (!ethers.utils.isAddress(erc20Recipient)) {
                notify('error', 'Invalid Recipient Address', 'Enter Proper Valid Recipient Address');
                valid = false
                return false;
            }

            if (valid) return true;
        } else {
            return false;
        }


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    type FieldType = {
        erc20Address?: string;
        compromisedPrivateKey?: string;
        ethBribeAmount?: string;
        erc20Recipient?: string;
    };


    return (
        <Col
            style={{
                display: "flex",
            }}
        >
            {contextHolder}
            <Card loading={loading}
                style={{ width: '100%', padding: '0.5rem', justifyContent: 'center' }}
                title="ERC20 Token Recovery" 
            >
                <Card.Grid style={gridStyle}>
                <Title level={5} type={passed ? 'success' : 'danger'} style={{margin:'2rem'}}>{processStatus}</Title>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 24 }}
                        style={{ maxWidth: '100%', width: '100%', justifyContent: 'flex-end' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='horizontal'
                    >
                        <Form.Item<FieldType>
                            label="ERC20 Address"
                            name="erc20Address"
                            rules={[{ required: true, message: 'Please input ERC20 Token you want to Recover!' }]}
                            tooltip={{ title: 'Address of the ERC20 token that you want to transfer. It\'ll transfer ALL the specified ERC20 from the compromised account.', icon: <InfoCircleOutlined /> }}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Private Key of Compromised Wallet"
                            name="compromisedPrivateKey"
                            rules={[{ required: true, message: 'Please input the compromised wallet private key!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="ERC20 Recipient Address "
                            name="erc20Recipient"
                            rules={[{ required: true, message: 'Please enter the Recipient Wallet Address!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Priority Inclusion Charges"
                            name="ethBribeAmount"
                            tooltip={{ title: 'Amount of ETH used to bribe miners.', icon: <InfoCircleOutlined /> }}

                            rules={[{ required: true, message: 'Please input maximum charges acceptable for priority inclusion onchain!' }]}
                        >
                            <InputNumber prefix={"ETH"} min={0.001} defaultValue={0.001} step={0.001} max={0.5} style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100% !important' }} className="button">
                                Recover ERC20 Token
                            </Button>
                        </Form.Item>
                    </Form>

                </Card.Grid>

            </Card>
        </Col>
    );
};

