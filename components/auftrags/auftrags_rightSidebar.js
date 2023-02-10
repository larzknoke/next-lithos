import {
  Space,
  Collapse,
  Layout,
  theme,
  Descriptions,
  Button,
  Tooltip,
  Tag,
  Typography,
} from "antd";
import { useSidebarContext } from "../../context/SidebarContext";
import {
  UserSwitchOutlined,
  ReloadOutlined,
  EuroOutlined,
} from "@ant-design/icons";

function AuftragRightSidebar() {
  const { Sider } = Layout;
  const { Panel } = Collapse;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isOpen } = useSidebarContext();
  const { Text, Link } = Typography;

  return (
    <Sider
      collapsible={true}
      defaultCollapsed={true}
      collapsedWidth={0}
      width={350}
      trigger={null}
      style={{
        background: colorBgContainer,
      }}
      collapsed={!isOpen}
    >
      <Collapse ghost defaultActiveKey={"1"}>
        <Panel header="Kunde" key="1">
          <Descriptions column={1} size={"small"} layout={"vertical"}>
            <Descriptions.Item label="Kunde">
              <Space>
                Stiebel Eltron GmbH & Co. KG
                <Tooltip title="Kunde ändern">
                  <Button
                    type="link"
                    icon={<UserSwitchOutlined />}
                    size={"small"}
                  />
                </Tooltip>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Ansprechpartner">
              <Space>
                Frau Stefanie Sturm
                <Tooltip title="Ansprechpartner ändern">
                  <Button
                    type="link"
                    icon={<UserSwitchOutlined />}
                    size={"small"}
                  />
                </Tooltip>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Rubrik">
              <Space size={"small"}>
                <Tag color="success">C+</Tag>
                <Tag color="error">Maase</Tag>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Notiz">
              <ul style={{ paddingInlineStart: 20, paddingInlineEnd: 25 }}>
                <li>
                  Bei Mont.-Anw. sowie Aufklebern können wir grundsätzlich 10 %
                  überliefern.
                </li>
                <li>
                  Bei allen farbigen Produkten (z.B. Flyer oder Broschüren)
                  dürfen wir max. 3% überliefern.
                </li>
                <li>
                  9.8.2017, MP: In Absprache mit WP und DB auf -5%
                  Gewinnaufschlag (vorher -2,5 % Gewinnaufschlag und -2,5 %
                  BL-Aufschlag) gestellt.
                </li>
                <li>Für ERP-Beilagen zuständig: Markus Oltmanns</li>
                <li>
                  Neues Stiebel Logo, Neuer Farbton = HKS 15 oder Pantone 200
                  einsetzen bei Aufträgen mit Sonderfarben (09.11.2020)
                </li>
                <li>
                  Wenn der Index mit der Bestellung übereinstimmt, werden
                  Aufkleber und Umb.Anw. ohne Korrektur gedruckt
                </li>
                <li>
                  Aufkleber für das Logistikzentrum müssen immer selbstklebend
                  sein (kein trockengummiertes Material)
                </li>
                <li>
                  5% Logistikpauschale zusätzlich über Auftrag 47886 berechnen
                </li>
              </ul>
            </Descriptions.Item>
          </Descriptions>
        </Panel>
        <Panel header="Preise" key="2">
          <Descriptions column={1} size={"small"} layout={"vertical"}>
            <Descriptions.Item label="Verkaufspreis">
              <Space>
                349,00 €
                <Tooltip title="Aktualisieren">
                  <Button
                    type="link"
                    icon={<ReloadOutlined />}
                    size={"small"}
                  />
                </Tooltip>
                <Tooltip title="Preis festlegen">
                  <Button type="link" icon={<EuroOutlined />} size={"small"} />
                </Tooltip>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Durchschnittspreis">
              0.02222225 €
            </Descriptions.Item>
            <Descriptions.Item label="Fortdruckpreis">
              0.01558 €
            </Descriptions.Item>
            <Descriptions.Item label="Produktgruppe">
              <Link>03.09 Briefbogen - OFFSET</Link>
            </Descriptions.Item>
          </Descriptions>
        </Panel>
        <Panel header="Meta" key="3">
          <Descriptions column={1} size={"small"} layout={"vertical"}>
            <Descriptions.Item label="Erstellt">02.02.2023</Descriptions.Item>
            <Descriptions.Item label="letzte Änderung">
              04.02.2023
            </Descriptions.Item>
            <Descriptions.Item label="Benutzer">dbrue</Descriptions.Item>
          </Descriptions>
        </Panel>
      </Collapse>
    </Sider>
  );
}

export default AuftragRightSidebar;
