import React from "react";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  className?: string;
}

const LighteningIcon: React.FC<Props> = ({
  width,
  height,
  viewBox,
  fill,
  className,
}) => (
  <svg
    className={className}
    width={width || "292"}
    height={height || "325"}
    viewBox={viewBox || "0 0 292 325"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M362.387 0L403.524 36.0366L235.353 228.01L213.457 208.828L213.295 209.012L173.044 173.49L41.1371 324.066L-1.69389e-05 288.029L167.967 96.2892L200.95 125.183L200.953 125.18L201.8 125.927L209.104 132.326L209.081 132.353L230.153 150.95L362.387 0Z"
      fill={fill || "#1D3330"}
    />
  </svg>
);
export default LighteningIcon;
