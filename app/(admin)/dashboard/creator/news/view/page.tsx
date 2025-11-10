import ViewNews from "@/components/news-view";
import { getNews } from "@/lib/DAL";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View News",
};

export const dynamic = "force-dynamic"; 

const ViewPage = async () => {
  const data = await getNews();
  return <ViewNews data={data} />;
};

export default ViewPage;
