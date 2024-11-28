import { Button3D, Typography } from "@/common/components/atoms";
import { Arrow } from "@/common/components/icons/Arrow";
import { GoogleSignIn } from "@/common/components/molecules";
import { homepage } from "@/common/constant/staticText";

export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 h-[100vh]">
      <div className="bg-background-900">
        <div className="flex justify-center items-center h-[100%]">
          <div>
            <Typography variant={"i"} classes="text-white font-semibold">
              {homepage.quote}
            </Typography>
            <Typography variant={"p"} classes="text-white text-left">
              -{homepage.author}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 justify-self-center justify-center items-center w-1/2 max-w-60">
        <div className="self-stretch">
          <GoogleSignIn />
        </div>
        <div className="self-stretch">
          <Button3D icon={<Arrow />} label={homepage.guestButton} />
        </div>
      </div>
    </div>
  );
}
