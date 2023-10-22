import React, { useState } from "react";
import { Radio, Button, Divider, Tabs, RadioChangeEvent } from 'antd';
import { Card } from 'antd';
import { Col, Row } from 'antd';
import { WalletOutlined } from '@ant-design/icons'
import { Typography } from 'antd';
const { Text, Title } = Typography;


export const Dashboard: React.FC = () => {
    type TabPosition = 'ERC20' | 'ENS';

    const [mode, setMode] = useState<string>('ERC20');
    const [relayerURL, setRelayerURL] = useState("http://3.238.87.202");
    const [blocksInTheFuture, setBlocksInTheFuture] = useState("2");

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    return (
        <main
            style={{
                display: "block",
                justifyContent: "center",
                marginTop: '1rem',
                width: '100%',
                height: "90vh",
                paddingLeft: '15rem',
                paddingRight: '15rem'

            }}
        >     <Col style={{ width: "100%", justifyContent: "center", }}>
                <h3>Recover</h3>
                <Text mark>Only Metamask Wallets Supported!</Text>
                <Divider />
                <Card title={
                <div style={{marginTop:'14px'}}>
                    <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }} buttonStyle="solid">
                    <Radio.Button value="ERC20">ERC20 Token Recovery</Radio.Button>
                    <Radio.Button value="ENS">ENS Domain Recovery</Radio.Button>
                    <Radio.Button value="CLAIM">Staked Tokens Recovery</Radio.Button>
                </Radio.Group></div>} className="card" 
                
                extra={
                    <>
                        <Button icon={<WalletOutlined />} type='primary' danger>Connect</Button> 
                    </>
                } >
                    {mode && mode}
                </Card>
            </Col>
        </main>
    );
};
