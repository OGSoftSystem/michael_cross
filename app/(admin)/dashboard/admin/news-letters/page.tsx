import { DataTable } from "@/components/data-table";
import { emailColumn } from "@/components/email-newsletter-columns";
import HeaderBanner from "@/components/header-banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import NoNews from "@/components/no-news";
import { getEmails } from "@/lib/DAL";
import { Suspense } from "react";

const UsersPage = () => {
  return (
    <MaxWidthWrapper>
      <section className="bg-gray-200 py-20">
        <HeaderBanner
          title="All Newletter Emails"
          description="Manage new letter emails."
        />
      </section>
      <Suspense fallback={<p>Loading</p>}>
        <FetchEmails />
      </Suspense>
    </MaxWidthWrapper>
  );
};

export default UsersPage;

async function FetchEmails() {
  "use cache";
  const emails = await getEmails();

  if (!emails.length) {
    return <NoNews text="No subscribed email available." />;
  }

  return (
    <div>
      <DataTable
        columns={emailColumn}
        data={emails}
        isSortable
        hasPages
        filterParam="email"
      />
    </div>
  );
}
