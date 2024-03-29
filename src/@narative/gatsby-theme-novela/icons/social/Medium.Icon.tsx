import React from "react";

import { Icon } from '@types';

const MediumIcon: Icon = ({ fill = "white" }) => (
  <svg
    width="33"
    height="31"
    viewBox="0 0 13 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.51041 2.69775C1.51041 2.5415 1.44965 2.40261 1.32812 2.28108L0.15625 0.874837V0.666504H3.82812L6.64061 6.86441L9.11456 0.666504H12.6041V0.874837L11.5885 1.83838C11.5017 1.90782 11.467 2.00331 11.4843 2.12483V9.20815C11.467 9.32968 11.5017 9.42516 11.5885 9.49461L12.5781 10.4581V10.6665H7.63019V10.4581L8.64581 9.46857C8.6979 9.41648 8.72828 9.37742 8.73696 9.35138C8.74564 9.32534 8.74998 9.26891 8.74998 9.18211V3.45296L5.93749 10.6404H5.54686L2.23958 3.45296V8.27065C2.22222 8.47898 2.28298 8.66128 2.42187 8.81753L3.74999 10.4321V10.6404H0V10.4321L1.32812 8.81753C1.48437 8.66128 1.54514 8.47898 1.51041 8.27065V2.69775Z"
      fill={fill}
    />
  </svg>
);

export default MediumIcon;