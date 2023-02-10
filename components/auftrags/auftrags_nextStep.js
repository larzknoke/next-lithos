import { useState, useEffect } from "react";
import { green } from "@ant-design/colors";

import {
  Table,
  Tag,
  Space,
  Row,
  Col,
  Dropdown,
  Button,
  Card,
  Typography,
  Tooltip,
} from "antd";
import {
  MenuOutlined,
  PlayCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

function AuftragsNextStep() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { Text } = Typography;

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Prozess bearbeiten
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Prozessliste
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
      title="Nächster Prozess"
      bordered={false}
      headStyle={{ backgroundColor: green[1] }}
      bodyStyle={{ backgroundColor: green[0] }}
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
      <Row justify={"space-between"} align={"middle"}>
        <Text>Bedruckstoffbereitstellung Digitaldruck</Text>
        <Space size={0}>
          <Tooltip title="Prozess starten" placement="topRight">
            <Button type="ghost" icon={<PlayCircleOutlined />} />
          </Tooltip>
          <Tooltip title="Prozess anzeigen" placement="topRight">
            <Button type="ghost" icon={<InfoCircleOutlined />} />
          </Tooltip>
        </Space>
      </Row>
    </Card>
  );
}

export default AuftragsNextStep;
