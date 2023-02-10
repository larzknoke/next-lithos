import { Tabs } from "antd";
import TableTeilauftrags from "../teilauftrags/teilauftrags_table";
import AuftragsLieferungs from "./auftrags_lieferungs";

const tabItems = [
  {
    key: "1",
    label: "Teilaufträge",
    children: <TableTeilauftrags />,
  },
  {
    key: "2",
    label: "Lieferungen",
    children: <AuftragsLieferungs />,
  },
  {
    key: "3",
    label: "Papiere",
    children: "Papiere",
  },
  {
    key: "33",
    label: "Prozesse",
    children: "Prozesse",
  },
  {
    key: "333",
    label: "Einlagerungen",
    children: "Einlagerungen",
  },
  {
    key: "4",
    label: "Virt. Lieferungen",
    children: "Virt. Lieferungen",
  },
  {
    key: "5",
    label: "Freie Artikel",
    children: "Freie Artikel",
  },
  {
    key: "6",
    label: "Provision",
    children: "Provision",
  },
  {
    key: "7",
    label: "Fremddruck",
    children: "Fremddruck",
  },
  {
    key: "8",
    label: "Berichte",
    children: "Berichte",
  },
];

function AuftragsTabs() {
  return <Tabs defaultActiveKey="1" items={tabItems} tabPosition={"left"} />;
}

export default AuftragsTabs;
