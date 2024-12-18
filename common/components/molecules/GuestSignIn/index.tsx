"use client";
import { homepage } from "@/common/constant/staticText";
import { Button3D } from "@/common/components/atoms";
import { ArrowEnterIcon } from "@/common/components/icons";
import { useFormStatus } from "react-dom";

export const GuestSignIn = () => {
  const { pending } = useFormStatus();
  return (
    <Button3D
      icon={<ArrowEnterIcon />}
      label={homepage.guestButton}
      loading={pending}
      type="submit"
    />
  );
};
