import { Card, Typography, Space } from "antd";
import {
  CalendarOutlined,
  DollarOutlined,
  UserOutlined,
  FileTextOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

interface QuickViewProps {
  repotage: any; // Replace 'any' with the actual type of repotage
}

export default function QuickView({ repotage }: QuickViewProps) {
  return (
    <div className="w-full md:w-1/3 space-y-4">
      <Card title="نگاه سریع" className="shadow-md">
        <Space direction="vertical" size="middle" className="w-full">
          <div className="flex items-center">
            <CalendarOutlined className="text-blue-500 text-2xl mr-2" />
            <div>
              <Text strong>تاریخ ارسال این آگهی</Text>
              <br />
              <Text>
                {new Date(repotage.created_at).toLocaleDateString("fa-IR")}
              </Text>
            </div>
          </div>
          <div className="flex items-center">
            <EnvironmentOutlined className="text-blue-500 text-2xl mr-2" />
            <div>
              <Text strong>موقعیت مکانی شغل</Text>
              <br />
              <Text>{repotage.lat}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <DollarOutlined className="text-blue-500 text-2xl mr-2" />
            <div>
              <Text strong>حقوق پیشنهادی</Text>
              <br />
              <Text>{repotage.price}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <UserOutlined className="text-blue-500 text-2xl mr-2" />
            <div>
              <Text strong>تجربه موردنیاز</Text>
              <br />
              <Text>{repotage.gender}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <FileTextOutlined className="text-blue-500 text-2xl mr-2" />
            <div>
              <Text strong>مدرک موردنیاز</Text>
              <br />
              <Text>{repotage.nameMotabar}</Text>
            </div>
          </div>
        </Space>
      </Card>
      <Card title="موقعیت مکانی در نقشه" className="shadow-md">
        <iframe
          src={`//maps.google.com/maps?q=${repotage.lat},${repotage.long}&z=15&output=embed`}
          className="w-full h-48 rounded-md"
        />
      </Card>
    </div>
  );
}
