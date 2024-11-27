import { Button3D, Typography } from "@/common/components/atoms";
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
      <div className="flex flex-col justify-center items-center">
        <div className="mb-8">
          <Button3D label={homepage.signIn} />
        </div>
        <div>
          <Button3D label={homepage.guestButton} />
        </div>
      </div>
    </div>
  );
}
