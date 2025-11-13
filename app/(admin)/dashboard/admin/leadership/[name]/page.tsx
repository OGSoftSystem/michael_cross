import LeadershipForm from "@/components/leadership-form";
import { getLeader } from "@/lib/DAL";

const EditLeader = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;

  const leader = await getLeader(name)

  return (
    <div>
      <LeadershipForm type="Update" leader={leader}/>
    </div>
  );
};

export default EditLeader;
