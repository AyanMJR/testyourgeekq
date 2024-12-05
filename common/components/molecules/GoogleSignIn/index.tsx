"use client";
import { googleSignIn } from "@/app/actions";
import { Button3D } from "@/common/components/atoms";
import { homepage } from "@/common/constant/staticText";
import { useActionState } from "react";
import { Google } from "@/common/components/icons";

export const GoogleSignIn = () => {
  const [user, formAction, isPending] = useActionState(googleSignIn, false);
  return (
    <form action={formAction}>
      <Button3D
        label={homepage.signIn}
        type="submit"
        loading={isPending}
        icon={<Google />}
      />
    </form>
  );
};
