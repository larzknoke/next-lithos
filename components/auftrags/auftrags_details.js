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
  Typography,
  Statistic,
} from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSidebarContext } from "../../context/SidebarContext";

function AuftragDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { toggleSidebar, isOpen } = useSidebarContext();

  const { Title, Text } = Typography;

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
      key: "2",
      label: "Mehr Informationen",
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
    <Card bordered={false}>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Row justify={"space-between"}>
            <Title level={3} style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>
              44285 | Urlaubskatalog 2023 - Produktion auf Naturpapier
            </Title>
            <Button
              onClick={() => {
                toggleSidebar();
              }}
              type="text"
              icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Row>
          <Text type="secondary" style={{ fontSize: 18 }}>
            A4, 4 Seiten
          </Text>
        </Col>
        <Col span={5}>
          <Statistic title="Auflage" value={"5.000 Stck"} />
        </Col>
        <Col span={5}>
          <Statistic title="Liefertermin" value={"16.02.2023"} />
        </Col>
        <Col span={5}>
          <Statistic title="Verkaufspreis" value={"349,00 €"} />
        </Col>
        <Col span={9}>
          <Statistic title="Kunde" value={"Stiebel Eltron GmbH & Co. KG"} />
        </Col>
      </Row>
    </Card>
  );
}

export default AuftragDetails;
