import { useState, useEffect } from "react";
import { blue } from "@ant-design/colors";

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
  Typography,
} from "antd";
import {
  InfoCircleOutlined,
  SmileOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function AuftragsNotiz() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { Text } = Typography;

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
          Bearbeiten
        </a>
      ),
    },
    {
      key: "4",
      danger: true,
      label: "Löschen",
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
      title="Interne Notiz"
      bordered={false}
      headStyle={{ backgroundColor: blue[1] }}
      bodyStyle={{ backgroundColor: blue[0] }}
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
      <Space direction={"vertical"}>
        <Text>Druck nach Standard</Text>
        <Text>ML 10% möglich</Text>
        <Text> SB: Herr Grätz</Text>
      </Space>
    </Card>
  );
}

export default AuftragsNotiz;
