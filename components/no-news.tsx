import MaxWidthWrapper from "./max-width-wrapper";

const NoNews = ({ text }: { text: string }) => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center paddingY bg-app-blue text-center p-4">
      <h1 className="main-heading text-black">{text}</h1>
      <p className="text-2xl text-white font-normal my-8">
        check again soon. 😴
      </p>
    </MaxWidthWrapper>
  );
};

export default NoNews;
