import React, { useState, useEffect } from 'react';
import { Layout, Tabs, Table, Select, Button, Typography, Divider, Card, Flex } from 'antd';
import { DownloadOutlined, SettingOutlined, FileTextOutlined, SignalFilled, PlusOutlined, MinusOutlined, CloseOutlined, DoubleRightOutlined, CalendarOutlined, SaveOutlined, ImportOutlined } from '@ant-design/icons';
import './App.css';

const { TabPane } = Tabs;
const { Option } = Select;
const { Sider, Content } = Layout;
const { Text } = Typography;

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

const dataSource = [
    {
        key: '1',
        Territory: '',
        Date: '',
        Units: '',
        Average_Unit: '',
        TV_Total: '',
        Video_on_Demand: '',
        Proof_of_Concept: '',
        Print_Spend: '',
    },
    {
        key: '2',
        Territory: 'Brick 001',
        Date: '2021-01-01',
        Units: 298,
        Average_Unit: 5.7819,
        TV_Total: 0.0,
        Video_on_Demand: 0.0,
        Proof_of_Concept: 0.0,
        Print_Spend: 0.0,
    },
    {
        key: '3',
        Territory: 'Brick 001',
        Date: '2021-02-01',
        Units: 327,
        Average_Unit: 5.8471,
        TV_Total: 94.1656,
        Video_on_Demand: 0.0,
        Proof_of_Concept: 0.0,
        Print_Spend: 0.0,
    },
    {
        key: '4',
        Territory: 'Brick 001',
        Date: '2021-01-01',
        Units: 298,
        Average_Unit: 5.7819,
        TV_Total: 0.0,
        Video_on_Demand: 0.0,
        Proof_of_Concept: 0.0,
        Print_Spend: 0.0,
    },
    {
        key: '5',
        Territory: 'Brick 001',
        Date: '2021-02-01',
        Units: 327,
        Average_Unit: 5.8471,
        TV_Total: 94.1656,
        Video_on_Demand: 0.0,
        Proof_of_Concept: 0.0,
        Print_Spend: 0.0,
    },
    {
        key: '6',
        Territory: 'Brick 001',
        Date: '2021-01-01',
        Units: 298,
        Average_Unit: 5.7819,
        TV_Total: 0.0,
        Video_on_Demand: 0.0,
        Proof_of_Concept: 0.0,
        Print_Spend: 0.0,
    },
    {
        key: '7',
        Territory: 'Brick 001',
        Date: '2021-02-01',
        Units: 327,
        Average_Unit: 5.8471,
        TV_Total: 94.1656,
        Video_on_Demand: 0.0,
        Proof_of_Concept: 0.0,
        Print_Spend: 0.0,
    },
];

const columns = [
  {
    title: "Territory",
    dataIndex: "Territory",
    key: "Territory",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "Units",
    dataIndex: "Units",
    key: "Units",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "Average_Unit",
    dataIndex: "Average_Unit",
    key: "Average_Unit",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "TV_Total",
    dataIndex: "TV_Total",
    key: "TV_Total",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "Video_on_Demand",
    dataIndex: "Video_on_Demand",
    key: "Video_on_Demand",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "Proof_of_Concept",
    dataIndex: "Proof_of_Concept",
    key: "Proof_of_Concept",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
  {
    title: "Print_Spend",
    dataIndex: "Print_Spend",
    key: "Print_Spend",
    render: (text, record, index) =>
      index === 0 ? (
        <Select defaultValue="Select" style={{ width: 120 }}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      ) : (
        <Text>{text}</Text>
      ),
  },
];


const PanelExtra = () => (
    <span>
        <Button className='text' type='text' icon={<CloseOutlined />} />
        <Button className='text' type='text' icon={<DownloadOutlined />} />
        <Button className='text' type='text' icon={<ImportOutlined />} />
        <Button className='text' type='text' icon={<SaveOutlined />} />
        <Button className='text' type='text' icon={<DoubleRightOutlined />} />
        <Button className='text' type='text' icon={<CalendarOutlined />} />
    </span>
)


const PanelElement = ({title}) => {
    const [toggle, setToggle] =  useState(false);

    const handleToggle = () =>{
        setToggle(!toggle)
    }
    return (
    <Flex wrap className='workflow' gap='small'>
        <Button className='text' onClick={handleToggle} type='text'  icon={!toggle ? <PlusOutlined /> : <MinusOutlined />} />
        {!toggle ? <div className='expansion_option close'>{title}</div> : (
            <Flex vertical>
                <div className='expansion_option head'>{title}</div>
                <div className='expansion_body'>name: britData </div>
            </Flex>    
        )}
    </Flex>
)
}

const WorkflowPanel = () => (
    <Sider width={360} style={{ background: '#fff', padding: '10px' }}>
        <Card className='sider-card' title='Workflow' extra={<PanelExtra />}>
            <Flex vertical gap='middle'>
                <PanelElement  title='dataset selection'/>
                <PanelElement title='new'/>
                <PanelElement title='aggregate'/>
                <PanelElement title='clean'/>
                <PanelElement title='dedupe'/>
                <PanelElement title='join'/>
            </Flex>
        </Card>
    </Sider>
);

const App = () => {
    const [activeTab, setActiveTab] = useState("1");
    const operations = <Button className='download' icon={<DownloadOutlined />}>Download</Button>

    useEffect(()=>{
        fetch('./sample.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    },[]);

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "20px", background: "#fff" }}>
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            tabBarExtraContent={operations}
            type="card"
          >
            <TabPane
              tab={
                <span>
                  <SettingOutlined />
                  Data
                </span>
              }
              key="1"
            >
                    <span>
                        <text className='label'>Project Name</text>
                        <text className='data_value'>ETL Demo 2</text>
                        <text className='label'>output dataset name</text>
                        <text className='data_value'>etl n_d2</text>
                        <text className='label'>last run</text>
                        <text className='data_value'>not available</text>
                    </span>
                    <Text className='left-text' strong>Rows: 500</Text>
              <Divider />
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={{ x: 2000, y: 200 }}
                virtual
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <SignalFilled />
                  Summary
                </span>
              }
              key="2"
            >
              <Text>Summary Content</Text>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <FileTextOutlined />
                  Logs
                </span>
              }
              key="3"
            >
              <Text>Logs Content</Text>
            </TabPane>
          </Tabs>
        </Content>
        <WorkflowPanel />
      </Layout>
    );
};

export default App;
