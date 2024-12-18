import Image from "next/image";
import KP from "@/common/assets/KP.webp";
import QP from "@/common/assets/QP.webp";
import RP from "@/common/assets/RP.webp";
import { TilesType } from "./types";

export const DungeonTile = ({ type }: { type: TilesType }) => {
  const getTileImage = (type: TilesType) => {
    switch (type) {
      case 0:
        return KP;
      case 1:
        return QP;
      case 2:
        return RP;
      default:
        return KP;
    }
  };
  return (
    <Image
      src={getTileImage(type)}
      width={100}
      height={100}
      alt=""
    />
  );
};
