import { ArrowProps } from "react-multi-carousel";
import { ButtonIcon } from "@/common/components/atoms";
import { ArrowIcon } from "@/common/components/icons";

interface CustomArrowProps extends ArrowProps {
  customClass: string;
}

export const CustomArrow = (props: CustomArrowProps) => {
  const { onClick, customClass } = props;
  return (
    <ButtonIcon
      icon={<ArrowIcon />}
      onClick={onClick}
      customClass={customClass}
    />
  );
};
