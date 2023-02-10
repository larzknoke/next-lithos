import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
  OrderedListOutlined,
  AppstoreOutlined,
  ApartmentOutlined,
  EuroCircleOutlined,
  TagsOutlined,
  GlobalOutlined,
  FileTextOutlined,
  FilePdfOutlined,
  FileSyncOutlined,
  FileExclamationOutlined,
  AuditOutlined,
  BookOutlined,
  CopyOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Row,
  Col,
  Space,
  Button,
  Input,
  Tag,
  Tooltip,
  Dropdown,
  Table,
  Card,
  Tabs,
  Divider,
} from "antd";
import TableTeilauftrags from "../components/teilauftrags/teilauftrags_table";
import AuftragDetails from "../components/auftrags/auftrags_details";
import AuftragNotiz from "../components/auftrags/auftrags_notiz";
import AuftragsNextStep from "../components/auftrags/auftrags_nextStep";
import AuftragsLieferungs from "../components/auftrags/auftrags_lieferungs";
import AuftragsTabs from "../components/auftrags/auftrags_tabs";
import AuftragRightSidebar from "../components/auftrags/auftrags_rightSidebar";

const { Search } = Input;
const { Header, Content, Sider } = Layout;
const items1 = ["Mein Lithos", "Favoriten", "Verlauf"].map((key) => ({
  key,
  label: `${key}`,
}));
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menuItems = [
  {
    key: "dat",
    label: "Digitale Auftragstasche",
    icon: <ScheduleOutlined />,
  },
  {
    type: "divider",
  },
  { key: "prozeditor", label: "Prozesseditor", icon: <ApartmentOutlined /> },
  { key: "prozesse", label: "Prozesse", icon: <AppstoreOutlined /> },
  { key: "einzelkosten", label: "Einzelkosten", icon: <TagsOutlined /> },
  { key: "fremdl", label: "Fremdleistungen", icon: <GlobalOutlined /> },
  {
    type: "divider",
  },
  { key: "textbau", label: "Textbausteine", icon: <FileTextOutlined /> },
  { key: "auflagen", label: "Auflagen / Anbieten", icon: <CopyOutlined /> },
  {
    type: "divider",
  },
  {
    key: "ab",
    label: "Auftragsbestätigung generieren",
    icon: <FilePdfOutlined />,
  },
  { key: "tasche", label: "Auftragstasche", icon: <BookOutlined /> },
  {
    type: "divider",
  },
  { key: "rpos", label: "Rechnungspositionen", icon: <EuroCircleOutlined /> },
  { key: "nachkalk", label: "Nachkalkulation", icon: <AuditOutlined /> },
  {
    type: "divider",
  },
  {
    key: "bericht",
    label: "Bericht erstellen",
    icon: <FileExclamationOutlined />,
  },
  {
    key: "wiedervorlage",
    label: "Wiedervorlage erstellen",
    icon: <FileSyncOutlined />,
  },
];

const menuItemsOFF = [
  getItem("Navigation One", "sub1", <LaptopOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
  getItem("Navigation Two", "sub2", <NotificationOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <UserOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
  // getItem(null, null, null, null, "divider"),
  getItem(
    "Group",
    "grp2",
    null,
    [getItem("Option 15", "15"), getItem("Option 16", "16")],
    "group"
  ),
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
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Kopieren
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Verwandschaft
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Löschen
      </a>
    ),
    danger: true,
  },
];

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        fontWeight: "300",
      }}
    >
      <Header className="header" id="MainHeader">
        <Row>
          <Col flex="285px">
            <img
              src="/lithos_logo.svg"
              style={{ verticalAlign: "middle", width: "100px" }}
            />
          </Col>
          <Col flex="auto">
            <Row justify="space-between">
              <Col>
                <Menu theme="light" mode="horizontal" items={items1} />
              </Col>
              <Col>
                <Search
                  placeholder="Suche"
                  allowClear
                  // onSearch={onSearch}
                  style={{
                    width: "400px",
                    verticalAlign: "middle",
                  }}
                />
              </Col>
              <Col>
                <Button icon={<UserOutlined />}>l.knoke@colorplus.de</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          collapsible={true}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={null}
            defaultOpenKeys={null}
            style={{
              height: "100%",
              borderRight: 0,
              paddingTop: 16,
            }}
            items={menuItems}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Row justify={"space-between"}>
            <Col>
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>Start</Breadcrumb.Item>
                <Breadcrumb.Item>Bad Pyrmont Tourismus GmbH</Breadcrumb.Item>
                <Breadcrumb.Item>
                  44285 | Urlaubskatalog 2023 - Produktion auf Naturpapier
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col style={{ placeSelf: "center" }}>
              <Space>
                <Tag color="green">Aktiv</Tag>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                  arrow
                >
                  <Button type="text" icon={<SettingOutlined />} />
                </Dropdown>
              </Space>
            </Col>
          </Row>

          <Content
            style={{
              gap: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <AuftragDetails />
              </Col>
            </Row>
            <Divider orientation="left">Details</Divider>
            <Row gutter={[24, 24]}>
              <Col span={17}>
                <AuftragsTabs />
              </Col>
              <Col span={6} offset={1}>
                <Space
                  size={24}
                  direction={"vertical"}
                  style={{ display: "flex" }}
                >
                  <AuftragNotiz />
                  <AuftragsNextStep />
                </Space>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                {/* <Divider orientation="left">Dokumente</Divider>
                <AuftragsLieferungs /> */}
              </Col>
            </Row>
          </Content>
        </Layout>

        <AuftragRightSidebar />
      </Layout>
    </Layout>
  );
}
