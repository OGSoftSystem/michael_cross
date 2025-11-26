import LeadershipForm from "@/components/leadership-form";
import LeaderFormWrapper from "@/features/leaders/Leader-form-wrapper";
import { getLeader } from "@/lib/DAL";

const EditLeaderPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;

  const leader = await getLeader(name);

  return (
    <LeaderFormWrapper title="Update Leader" description="Make changes to leader's details.">
      <LeadershipForm type="Update" leader={leader} />
    </LeaderFormWrapper>
  );
};

export default EditLeaderPage;
