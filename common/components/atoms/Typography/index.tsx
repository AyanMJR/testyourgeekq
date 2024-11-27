import { ElementType, ReactNode } from "react";

export type VariantMapping = {
  [key: string]: ElementType
}

const TVariants: VariantMapping = {
  "h1": "h1",
  "h2": "h2",
  "h3": "h3",
  "h4": "h4",
  "h5": "h5",
  "h6": "h6",
  "p": "p",
  "i": "i"
}

export const Typography = ({
  variant,
  classes,
  children,
}: {
  variant: keyof typeof TVariants;
  classes?: string;
  children: ReactNode
}) => {
  const Component: ElementType = variant ? TVariants[variant] : 'p';

  return (
    <Component className={classes}>
      {children}
    </Component>
  )
}