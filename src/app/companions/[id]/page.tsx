import { getCalmMindCompanionById } from "@/actions/companion.action";
import CalmMindCompanionById from "@/components/CalmMindCompanionById";
import { Badge } from "@/components/ui/badge";
import { getCategoriesColor } from "@/constant";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const calmCompanion = await getCalmMindCompanionById(id)
  // console.log(calmCompanion);
  const user = await currentUser()

  if(!user) redirect("/sign-in")


  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h2 className="text-xl leading-6 sm:text-2xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
            {calmCompanion?.title}
          </h2>
          <Badge
            className="font-semibold px-4 h-8"
            style={{ backgroundColor: getCategoriesColor(calmCompanion?.category as string) }}
          >
            {calmCompanion?.category as string}
          </Badge>
        </div>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-justify">
          {calmCompanion?.description}
        </p>
        <CalmMindCompanionById calmCompanion={calmCompanion} userImage={user?.imageUrl} username={user?.fullName} />
      </div>
    </div>
  );
};

export default page;
