import React, { useState } from "react";
import { Radio, Button, Divider, Tabs, RadioChangeEvent, TabsProps } from 'antd';
import { Card } from 'antd';
import { Col, Row } from 'antd';
import { WalletOutlined } from '@ant-design/icons'
import { Typography } from 'antd';
import { ERC20Recover } from "./agentscreens/ERC20Recover";
import { Connection } from "../../containers/Connection";
import { ErrorBoundary } from "react-error-boundary";

 
const { Text, Title } = Typography;

export const Dashboard: React.FC = () => {
    const { address, connect } = Connection.useContainer();
    const [mode, setMode] = useState<string>('ERC20');
    const [relayerURL, setRelayerURL] = useState("http://3.238.87.202");
    const [blocksInTheFuture, setBlocksInTheFuture] = useState("2");
    type TabPosition = 'ERC20' | 'ENS' | 'CLAIM';

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
                <h2>Recover</h2>
                <Text mark>We do not store your data!</Text>
                <Divider />
                <Card title={
                    <div style={{ marginTop: '14px' }}>
                        <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8, justifyItems: 'center' }} buttonStyle="solid">
                            <Radio.Button value="ERC20" className="button" style={{ marginRight: '0.5rem' }}>ERC20 Token Recovery</Radio.Button>
                            <Radio.Button value="ENS" className="button" style={{ marginRight: '0.5rem' }}>ENS Domain Recovery</Radio.Button>
                            <Radio.Button value="CLAIM" className="button">Staked Tokens Recovery</Radio.Button>
                        </Radio.Group></div>} className="card"

                    extra={
                        <>
                            
                                {address
                                    ? <Button icon={<WalletOutlined />} type='primary' className="connectbutton" onClick={connect}>{address.slice(0, 6) + "..." + address.slice(-4)}</Button>
                                    : <Button icon={<WalletOutlined />} type='primary' className="connectbutton" onClick={connect}>Connect</Button>}
                        </>
                    } >
                    {mode == 'ERC20' && <ERC20Recover />}
                </Card>
            </Col>
        </main>
    );
};
