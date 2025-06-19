import CalmMindCompanion from "@/components/CalmMindCompanion";
import { calmCompanions, categories, getCategoriesColor } from "@/constant/index";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-16 px-6 xl:px-0 flex flex-col xl:flex-row items-start gap-12">
      <CalmMindCompanion calmCompanions={calmCompanions} />
      <aside className="sticky top-20 right-4 shrink-0 lg:max-w-sm w-50% z-0">
        <h3 className="text-3xl font-bold tracking-tight font-mono">Categories</h3>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className={"flex items-center justify-between gap-2 bg-muted p-3 rounded-md bg-opacity-15 dark:bg-opacity-25"}
              style={{backgroundColor: getCategoriesColor(category.name)}}
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w text-foreground" />
                <span className="font-semibold">{category.name}</span>
              </div>
              <div className="px-1.5 rounded-full font-semibold">
                {category.totalPosts}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default page;
