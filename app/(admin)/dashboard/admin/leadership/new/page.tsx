import LeadershipForm from "@/components/leadership-form";
import React from "react";

const NewLeaderPage = () => {
  return (
    <div className="min-h-screen bg-liner-to-br from-slate-50 to-blue-100 dark:from-slate-900 dark:to-blue-900">
      <div className="relative">
        {/* Simple decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-liner-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-liner-to-l from-indigo-500/10 to-pink-500/10 blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Create A Leader
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Add hospital leadership members
            </p>
          </div>

          {/* Form container */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 p-6 md:p-8">
              <LeadershipForm type="Create" />
            </div>

            {/* Help text */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                All fields marked with * are required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLeaderPage;
