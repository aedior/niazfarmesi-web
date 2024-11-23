import React from "react";
import { Menu as AntMenu, Avatar } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileAddOutlined,
  WalletOutlined,
  SendOutlined,
  MessageOutlined,
  CalendarOutlined,
  CommentOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";

export enum KarfarmaPanelItem {
  DASHBOARD,
  PROFILE,
  NEW_REPOTAGE,
  KIFPOOL,
  SENDED_RESOME,
  SENDED_REPOTAGE,
  SMS_PANEL,
  EVENTS,
  COMMENTS,
}

interface MenuProps {
  selectedItem: KarfarmaPanelItem;
  onSelect: (item: KarfarmaPanelItem) => void;
}

const menuItems = [
  {
    key: KarfarmaPanelItem.DASHBOARD,
    label: "داشبورد",
    icon: <DashboardOutlined />,
  },
  { key: KarfarmaPanelItem.PROFILE, label: "پروفایل", icon: <UserOutlined /> },
  {
    key: KarfarmaPanelItem.NEW_REPOTAGE,
    label: "آگهی جدید",
    icon: <FileAddOutlined />,
  },
  {
    key: KarfarmaPanelItem.SENDED_RESOME,
    label: "رزومه‌های ارسالی",
    icon: <SendOutlined />,
  },
  {
    key: KarfarmaPanelItem.KIFPOOL,
    label: "کیف پول",
    icon: <WalletOutlined />,
  },
  // {
  //   key: KarfarmaPanelItem.SENDED_REPOTAGE,
  //   label: "گزارش‌های ارسالی",
  //   icon: <SendOutlined />,
  // },
  {
    key: KarfarmaPanelItem.SMS_PANEL,
    label: "پنل پیامک",
    icon: <MessageOutlined />,
  },
  {
    key: KarfarmaPanelItem.EVENTS,
    label: "رویدادها",
    icon: <CalendarOutlined />,
  },
  // {
  //   key: KarfarmaPanelItem.COMMENTS,
  //   label: "نظرات",
  //   icon: <CommentOutlined />,
  // },
];

const Menu: React.FC<MenuProps> = ({ selectedItem, onSelect }) => {
  const user = useAppSelector((store) => store.user).user;

  const handleMenuClick = (key: string) => {
    onSelect(Number(key) as KarfarmaPanelItem);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[274px]">
      <div className="flex items-center mb-6">
        <div className="flex-grow text-right">
          <h3 className="text-lg font-medium text-gray-800">
            {/* {user?.user.name} */}
            مهدی نوری
          </h3>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>{user?.location}</span>
            <span>
              {/* {user?.type === UserEnum.KARFARMA ? "کارفرما" : "کارجو"} */}
              کارفرما
            </span>
          </div>
        </div>
        <Avatar size={88} src="/Ellipse_27_wwFyG3p.svg" className="ml-4" />
      </div>
      <AntMenu
        mode="vertical"
        selectedKeys={[selectedItem.toString()]}
        onSelect={({ key }) => handleMenuClick(key)}
        items={[
          ...menuItems.map((item) => ({
            key: item.key.toString(),
            label: item.label,
            icon: item.icon,
          })),
          {
            key: "logout",
            label: "خروج",
            icon: <LogoutOutlined />,
            onClick: () => {
              /* Add logout logic here */
            },
          },
        ]}
        className="border-none"
      />
    </div>
  );
};

export default Menu;
