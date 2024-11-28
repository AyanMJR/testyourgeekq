import { SVGProps } from "react"

export const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g className="animate-spin origin-center">
      <circle cx={3} cy={12} r={2} />
      <circle cx={21} cy={12} r={2} />
      <circle cx={12} cy={21} r={2} />
      <circle cx={12} cy={3} r={2} />
      <circle cx={5.64} cy={5.64} r={2} />
      <circle cx={18.36} cy={18.36} r={2} />
      <circle cx={5.64} cy={18.36} r={2} />
      <circle cx={18.36} cy={5.64} r={2} />
    </g>
  </svg>
)
