import ViewNews from "@/components/news-view";
import NoNews from "@/components/no-news";
import { getNews } from "@/lib/DAL";
import { NewsType } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View News",
};

// export const dynamic = "force-dynamic";

const ViewPage = async () => {
  const data: NewsType[] = await getNews();

  if (!data.length) {
    return <NoNews text="No item to show." />;
  }
  return <ViewNews data={data} />;
};

export default ViewPage;
