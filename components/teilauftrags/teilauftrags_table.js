import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Tag,
  Space,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Button,
  Card,
  List,
  Typography,
} from "antd";
import {
  InfoCircleOutlined,
  MenuOutlined,
  DownloadOutlined,
  DeleteOutlined,
  EditOutlined,
  CopyOutlined,
  CarOutlined,
  CompassOutlined,
  AppstoreOutlined,
  ReadOutlined,
  TagsOutlined,
} from "@ant-design/icons";

function TableTeilauftrags() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { Text, Title } = Typography;

  const TableHeader = "Teilaufträge";

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Auflage",
      dataIndex: "auflage",
      key: "auflage",
    },
    {
      title: "Seiten",
      dataIndex: "seiten",
      key: "seiten",
    },
    {
      title: "Format",
      key: "format",
      render: (_, record) => (
        <Space>
          {record.endbreite} x {record.endhoehe} mm
          <Tooltip title={`${record.formbreite} x ${record.formhoehe} mm`}>
            <InfoCircleOutlined style={{ color: "#6a6a6a" }} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  const list = [
    {
      key: "1",
      name: "Umschlag",
      seiten: 4,
      auflage: 3100,
      endformat: "210 x 297 mm",
      offenesformat: "420 x 297 mm",
      status: "In Autorenkorrektur",
    },
    {
      key: "",
      name: "Inhalt",
      seiten: 36,
      auflage: 3100,
      endformat: "210 x 297 mm",
      offenesformat: "420 x 297 mm",
      status: "In Autorenkorrektur",
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/api/teilauftrags/33000")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <Card
      title="Teilaufträge"
      bordered={false}
      extra={
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow
        >
          <Button type="text" icon={<MenuOutlined />} />
        </Dropdown>
      }
    >
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="vertical"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item style={{ padding: "24px 0px" }}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Row justify={"space-between"}>
                  <Col>
                    <Title level={5} style={{ marginBlockStart: 0 }}>
                      <a href="/lieferungs/xyz">{item.name}</a>
                    </Title>
                    <Text type="secondary">
                      {item.endformat} ({item.offenesformat})
                    </Text>
                  </Col>
                  <Col>
                    <Space>
                      <Tooltip title="Teilauftrag bearbeiten">
                        <Button icon={<EditOutlined />} />
                      </Tooltip>
                      <Tooltip title="Teilauftrag kopieren">
                        <Button icon={<CopyOutlined />} />
                      </Tooltip>
                      <Tooltip title="Teilauftrag löschen">
                        <Button icon={<DeleteOutlined />} />
                      </Tooltip>
                      <Tooltip title="Teilauftrag als QAD kopieren">
                        <Button icon={<AppstoreOutlined />} />
                      </Tooltip>
                    </Space>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Space size={48}>
                  <Space>
                    <ReadOutlined />
                    <Text>{item.seiten}</Text>
                  </Space>
                  <Space>
                    <TagsOutlined />
                    <Text>{item.auflage}</Text>
                  </Space>
                  <Space>
                    <InfoCircleOutlined />
                    <Text>{item.status}</Text>
                  </Space>
                </Space>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default TableTeilauftrags;
