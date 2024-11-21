import { Input, Button, Select, Checkbox } from "antd";
import { FaSearch } from "react-icons/fa";

const { Option } = Select;

export enum KarjoEnum {
  DOCTOR = "دکتر",
  NURSE = "پرستار",
  PHARMACIST = "داروساز",
  OTHER = "سایر",
}

interface RepotageFilterProps {
  keywords: string;
  setKeywords: (value: string) => void;
  tags: string;
  setTags: (value: string) => void;
  type: KarjoEnum | undefined;
  setType: (value: KarjoEnum | undefined) => void;
  isFori: boolean;
  setIsFori: (value: boolean) => void;
  onSearch: () => void;
}

export function RepotageFilter({
  keywords,
  setKeywords,
  tags,
  setTags,
  type,
  setType,
  isFori,
  setIsFori,
  onSearch,
}: RepotageFilterProps) {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="keywords"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          کلمات کلیدی
        </label>
        <Input
          id="keywords"
          placeholder="جستجو بر اساس کلمات کلیدی"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          prefix={<FaSearch className="text-gray-400" />}
        />
      </div>
      <div>
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          برچسب‌ها
        </label>
        <Input
          id="tags"
          placeholder="جستجو بر اساس برچسب‌ها"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          prefix={<FaSearch className="text-gray-400" />}
        />
      </div>
      <div>
        <label
          htmlFor="jobType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          نوع شغل
        </label>
        <Select
          id="jobType"
          style={{ width: "100%" }}
          placeholder="نوع شغل"
          value={type}
          onChange={(value) => setType(value)}
          allowClear
        >
          {Object.entries(KarjoEnum).map(([key, value]) => (
            <Option key={key} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Checkbox
          checked={isFori}
          onChange={(e) => setIsFori(e.target.checked)}
        >
          فقط آگهی‌های فوری
        </Checkbox>
      </div>
      <Button type="primary" onClick={onSearch} className="w-full">
        اعمال فیلترها
      </Button>
    </div>
  );
}
