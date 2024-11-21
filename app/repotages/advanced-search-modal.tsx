import { Modal } from "antd";
import { RepotageFilter, KarjoEnum } from "./repotage-filter";

interface AdvancedSearchModalProps {
  visible: boolean;
  onClose: () => void;
  onSearch: (filters: {
    keywords: string;
    tags: string;
    type: KarjoEnum | undefined;
    isFori: boolean;
  }) => void;
  initialFilters: {
    keywords: string;
    tags: string;
    type: KarjoEnum | undefined;
    isFori: boolean;
  };
}

export default function AdvancedSearchModal({
  visible,
  onClose,
  onSearch,
  initialFilters,
}: AdvancedSearchModalProps) {
  return (
    <Modal
      title="جستجوی پیشرفته"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <RepotageFilter
        {...initialFilters}
        setKeywords={(keywords) => onSearch({ ...initialFilters, keywords })}
        setTags={(tags) => onSearch({ ...initialFilters, tags })}
        setType={(type) => onSearch({ ...initialFilters, type })}
        setIsFori={(isFori) => onSearch({ ...initialFilters, isFori })}
        onSearch={() => onSearch(initialFilters)}
      />
    </Modal>
  );
}
