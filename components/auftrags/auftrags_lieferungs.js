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
  CompassOutlined,
  CarOutlined,
  DownloadOutlined,
  DeleteOutlined,
  EditOutlined,
  CopyOutlined,
} from "@ant-design/icons";

function AuftragsLieferungs() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { Text, Title } = Typography;

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
          Neue Lieferung
        </a>
      ),
    },
  ];

  const list = [
    {
      key: "1",
      kontakt: "Abt. -Warenannahme-",
      versandart: "COLOR+ GmbH | Eigener Fuhrpark",
      adresse: "Holzminden | Dr.-Stiebel-Straße 33",
      gewicht: "3 kg",
      entfernung: "56 km",
    },
    {
      key: "2",
      kontakt: "Frau Melanie Böller",
      versandart: "DPD Classic",
      adresse: "Holzminden | Dr.-Stiebel-Straße 33",
      gewicht: "3 kg",
      entfernung: "56 km",
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
      title="Lieferungen"
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
                      <a href="/lieferungs/xyz">{item.kontakt}</a>
                    </Title>
                    <Text type="secondary">{item.versandart}</Text>
                  </Col>
                  <Col>
                    <Space>
                      <Tooltip title="Lieferung bearbeiten">
                        <Button icon={<EditOutlined />} />
                      </Tooltip>
                      <Tooltip title="Lieferung kopieren">
                        <Button icon={<CopyOutlined />} />
                      </Tooltip>
                      <Tooltip title="Lieferung löschen">
                        <Button icon={<DeleteOutlined />} />
                      </Tooltip>
                      <Tooltip title="Liefern">
                        <Button icon={<CarOutlined />} />
                      </Tooltip>
                    </Space>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Space size={48}>
                  <Space>
                    <CompassOutlined />
                    <Text>{item.adresse}</Text>
                  </Space>
                  <Space>
                    <CarOutlined />
                    <Text>{item.entfernung}</Text>
                  </Space>
                  <Space>
                    <DownloadOutlined />
                    <Text>{item.gewicht}</Text>
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

export default AuftragsLieferungs;
