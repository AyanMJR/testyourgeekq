import { ReactNode } from "react";
import { Spinner } from "@/common/components/icons";

export type buttonType = "submit" | "button" | "reset";

export const Button3D = ({
  type = "button",
  label,
  loading,
  classes,
  icon,
  onClick,
}: {
  type?: buttonType;
  label: string;
  loading?: boolean;
  classes?: string;
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1.5 cursor-pointer w-full px-[0.25em] py-[0.25em] text-[#000] border-black border-[3px] border-solid active:[box-shadow:0px_0px_0px_0px] active:top-[5px] [box-shadow:1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] md:px-[0.25em] md:py-[0.25em] relative select-none active:left-[5px] ${classes}`}
      type={type}
      onClick={onClick}
    >
      {icon && icon}
      <span className="font-semibold">{label}</span>
      {loading && <Spinner />}
    </button>
  );
};
