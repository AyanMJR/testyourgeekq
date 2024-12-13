"use client";
import { Button3D } from "@/common/components/atoms";
import { homepage } from "@/common/constant/staticText";
import { Google } from "@/common/components/icons";
import { useFormStatus } from "react-dom";

export const GoogleSignIn = () => {
  const { pending } = useFormStatus();
  return (
    <Button3D
      label={homepage.signIn}
      type="submit"
      loading={pending}
      icon={<Google />}
    />
  );
};
