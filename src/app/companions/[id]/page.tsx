import { getCalmMindCompanionById } from "@/actions/companion.action";
import CalmMindCompanionById from "@/components/CalmMindCompanionById";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const calmCompanion = await getCalmMindCompanionById(id)
  console.log(calmCompanion);
  const user = await currentUser()


  return (
    <div className="flex items-center justify-center">
      <CalmMindCompanionById calmCompanion={calmCompanion} userImage={user?.imageUrl} username={user?.fullName} />
    </div>
  );
};

export default page;
