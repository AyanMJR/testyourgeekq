import { ReactEventHandler, ReactNode } from "react";

export const ButtonIcon = ({
  onClick,
  icon,
  customClass,
}: {
  icon: ReactNode;
  onClick?: ReactEventHandler;
  customClass?: string;
}) => {
  return (
    <button
      className={`w-14 ${customClass}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
