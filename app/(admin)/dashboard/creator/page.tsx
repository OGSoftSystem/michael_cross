import Link from "next/link";

const CreatorPage = async () => {
  //   const session = await auth();

  // Optional: Add role-based access if needed
  // if (!session || session.user.role !== 'CREATOR') {
  //   redirect('/unauthorized');
  // }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to Creator&apos;s Page
          </h1>
          <p className="text-gray-600">
            Manage and create news content for your audience
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create News Section */}
          <Link
            href={"/dashboard/creator/news/new"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Create News
            </h2>
            {/* <CreateNews /> */}
            create
          </Link>

          {/* View News Section */}
          <Link
            href={"/dashboard/creator/news/view"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              View News
            </h2>
            {/* <ViewNews /> */}
            read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;
