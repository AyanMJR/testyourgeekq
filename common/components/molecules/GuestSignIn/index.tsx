"use client";
import { homepage } from "@/common/constant/staticText";
import { Button3D } from "@/common/components/atoms";
import { Arrow } from "@/common/components/icons/Arrow";
import { useFormStatus } from "react-dom";

export const GuestSignIn = () => {
  const { pending } = useFormStatus();
  return (
    <Button3D
      icon={<Arrow />}
      label={homepage.guestButton}
      loading={pending}
      type="submit"
    />
  );
};
