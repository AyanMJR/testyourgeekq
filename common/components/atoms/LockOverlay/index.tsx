import { LockIcon } from "@/common/components/icons";

export const LockOverlay = () => {
  return (
    <div className="absolute flex justify-center items-center z-10 w-full h-full bg-[rgba(255,255,255,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border rounded-3xl border-solid border-[rgba(255,255,255,0.3)]">
      <LockIcon />
    </div>
  );
};
