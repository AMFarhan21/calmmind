import { getAllCalmMindCompanion, getSessionHistory } from "@/actions/companion.action";
import CalmMindCompanion from "@/components/CalmMindCompanion";
import SessionHistory from "@/components/SessionHistory";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const page = async () => {

  const user = await auth()
  const userId = user.userId

  const getAllUserCalmMindCompanions = await getAllCalmMindCompanion()
  const getUserSessionHistory = await getSessionHistory(userId!)
  const getUserCompanionSessionHistory = getUserSessionHistory?.sort((a, b) => new Date(b?.created_at as Date).getTime() - new Date(a?.created_at as Date).getTime()).slice(0, 6).map((companion) => companion.calmCompanion)

  // console.log(getUserCompanionSessionHistory)


  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-16 px-2 xl:px-0 flex flex-col xl:flex-row items-start gap-4">
      <div className="xl:-ml-44">
        {/* @ts-expect-error: getAllUserCalmMindCompanions */}
        <CalmMindCompanion title={"All Calm Mind Companions"} calmCompanions={getAllUserCalmMindCompanions} userId={userId!} />
      </div>
      <div className="sticky top-47 w-full xl:w-auto md:mr-[-172px] space-y-4">
        <div className="w-full items-center flex flex-col justify-center border-1 border-primary rounded-2xl p-4">
          <Image src={"/images/logo2.webp"} alt="go premium" width={120} height={120} className="-mt-10" />
          <Link href={"/pricing"} className="-mt-6">
            <Button variant={"default"} className="font-semibold"> Discover CalmMind Plus </Button>
          </Link>
        </div>
        <div className="border-1 border-foreground rounded-2xl py-4 sm:px-4 max-w-screen xl:w-[350px]">
          <h1 className="text-lg sm:text-2xl font-bold font-mono w-full ml-2">Session History</h1>

          {/* @ts-expect-error: getAllUserSessionHistory */}
          <SessionHistory getUserCompanionSessionHistory={getUserCompanionSessionHistory} />
        </div>
      </div>
      {/* <aside className="sticky top-20 right-4 shrink-0 lg:max-w-sm w-50% z-0">
        <h3 className="text-3xl font-bold tracking-tight font-mono">Categories</h3>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className={"flex items-center justify-between gap-2 bg-muted p-3 rounded-md bg-opacity-15 dark:bg-opacity-25"}
              style={{backgroundColor: getCategoriesColor(category.name)}}
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w text-background" />
                <span className="font-semibold text-background">{category.name}</span>
              </div>
              <div className="px-1.5 rounded-full font-semibold text-background">
                {category.totalPosts}
              </div>
            </div>
          ))}
        </div>
      </aside> */}
    </div>
  );
};

export default page;
