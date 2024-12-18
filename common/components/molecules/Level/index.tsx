import { DungeonTile } from "@/common/components/atoms";

export const Level = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center justify-items-center items-center gap-y-8">
        {Array.from({ length: 12 }).map((item, index) => (
          <DungeonTile
            key={index}
            type={index % 3}
          />
        ))}
      </div>
    </div>
  );
};
