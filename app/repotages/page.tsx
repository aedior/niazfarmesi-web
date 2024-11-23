"use client";

import { useState, useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { getRepotages } from "@/store/thunk/repotage";
import { Layout, Typography, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Repotagecard from "@/components/repotage/repotageCard";
import AdvancedSearchModal from "./advanced-search-modal";
import { KarjoEnum } from "./repotage-filter";

const { Content } = Layout;
const { Title } = Typography;

export default function Repotages() {
  const [simpleSearch, setSimpleSearch] = useState<string>("");
  const [advancedSearchVisible, setAdvancedSearchVisible] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    keywords: "",
    tags: "",
    type: undefined as KarjoEnum | undefined,
    isFori: false,
  });

  const repotage = useAppSelector((store) => store.RepotagemodelSlice.data);
  const dispatch = useAppDispatch();

  const handleSimpleSearch = useCallback(() => {
    dispatch(getRepotages({ keywords: simpleSearch }));
  }, [dispatch, simpleSearch]);

  const handleAdvancedSearch = useCallback(
    (filters: typeof advancedFilters) => {
      setAdvancedFilters(filters);
      dispatch(getRepotages(filters));
      setAdvancedSearchVisible(false);
    },
    [dispatch]
  );

  useEffect(() => {
    handleSimpleSearch();
  }, [handleSimpleSearch]);

  const filteredRepotage = repotage.filter((job) => {
    const matchesSimpleSearch = true;
    // job.title.includes(simpleSearch) || job.desc.includes(simpleSearch);
    const matchesAdvanced =
      (!advancedFilters.keywords ||
        job.title.includes(advancedFilters.keywords) ||
        job.desc.includes(advancedFilters.keywords)) &&
      (!advancedFilters.tags ||
        job.tags.some((tag) => tag.includes(advancedFilters.tags))) &&
      (!advancedFilters.type || job.title.includes(advancedFilters.type)) &&
      (!advancedFilters.isFori || job.fori);

    return matchesSimpleSearch && matchesAdvanced;
  });

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Header />
      <Content>
        <div className="bg-blue-600 py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <Title
              level={1}
              className="text-white text-center mb-4 sm:mb-8 text-2xl sm:text-4xl"
            >
              لیست آگهی‌ها
            </Title>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Input
                placeholder="جستجوی ساده"
                value={simpleSearch}
                onChange={(e) => setSimpleSearch(e.target.value)}
                onPressEnter={handleSimpleSearch}
                style={{ width: "100%", maxWidth: "300px" }}
                suffix={
                  <SearchOutlined
                    onClick={handleSimpleSearch}
                    style={{ cursor: "pointer" }}
                  />
                }
              />
              <Button onClick={() => setAdvancedSearchVisible(true)}>
                جستجوی پیشرفته
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {filteredRepotage.map((job) => (
              <Repotagecard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </Content>
      <Footer />
      <AdvancedSearchModal
        visible={advancedSearchVisible}
        onClose={() => setAdvancedSearchVisible(false)}
        onSearch={handleAdvancedSearch}
        initialFilters={advancedFilters}
      />
    </Layout>
  );
}
