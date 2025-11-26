import { DataTable } from "@/components/data-table";
import HeaderBanner from "@/components/header-banner";
import Load from "@/components/loader";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import NoNews from "@/components/no-news";
import { usersColumn, UserType } from "@/components/users-columns";
import { siteConfig } from "@/config";
import { getUsers } from "@/lib/DAL";
import { Suspense } from "react";

const UsersPage = () => {
  return (
    <MaxWidthWrapper>
      <section className="bg-gray-200 py-20">
        <HeaderBanner
          title="All User"
          description="Manage all register users."
        />
      </section>

      <Suspense
        fallback={
          <div>
            <Load />
            <p>{siteConfig.title}</p>
          </div>
        }
      >
        <FetchUsers />
      </Suspense>
    </MaxWidthWrapper>
  );
};

export default UsersPage;

async function FetchUsers() {
  "use cache";

  const data = (await getUsers()) as {
    users: UserType[];
    usersLength: number;
  };

  if (!data || data.usersLength === 0) {
    return <NoNews text="No subscribed email available." />;
  }

  return (
    <div>
      <DataTable
        columns={usersColumn}
        data={data.users}
        isSortable
        hasPages
        filterParam="name"
      />
    </div>
  );
}
