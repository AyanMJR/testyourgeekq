import { SVGProps } from "react";

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    {...props}
  >
    <g data-name="Circle kiri">
      <circle
        cx={12}
        cy={12}
        r={10}
        style={{
          fill: "#ece4b7",
        }}
      />
      <path
        d="M13 16a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L11.414 12l2.293 2.293A1 1 0 0 1 13 16Z"
        style={{
          fill: "#ff8e31",
        }}
      />
    </g>
  </svg>
);
