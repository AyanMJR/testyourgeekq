import { Typography } from "@/common/components/atoms";
import { GoogleSignIn, GuestSignIn } from "@/common/components/molecules";
import { homepage } from "@/common/constant/staticText";
import { googleSignIn } from "./actions";
import { guestSignIn } from "./actions/googleSignIn";

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
          <form action={googleSignIn}>
            <GoogleSignIn />
          </form>
        </div>
        <div className="self-stretch">
          <form action={guestSignIn}>
            <GuestSignIn />
          </form>
        </div>
      </div>
    </div>
  );
}
