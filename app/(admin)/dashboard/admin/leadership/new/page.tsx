import LeadershipForm from "@/components/leadership-form";
import LeaderFormWrapper from "@/features/leaders/Leader-form-wrapper";
import React from "react";

const NewLeaderPage = () => {
  return (
    <LeaderFormWrapper
      title="Create A Leader"
      description="Add hospital leadership members"
    >
      <LeadershipForm type="Create" />
    </LeaderFormWrapper>
  );
};

export default NewLeaderPage;
