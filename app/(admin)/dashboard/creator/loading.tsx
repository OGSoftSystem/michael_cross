import Load from "@/components/loader";
import { siteConfig } from "@/config";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Load />
      <p>{siteConfig.title}</p>
    </div>
  );
};

export default LoadingPage;
