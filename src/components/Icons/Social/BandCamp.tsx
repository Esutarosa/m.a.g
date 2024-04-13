import type { FC, SVGProps } from "react";

const BandCamp: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="32"
    height="20"
    viewBox="0 0 32 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    {...props}
  >
    <path d="M11.5912 2L3.3579 17.2H20.4088L28.6421 2H11.5912ZM10.9956 0C10.6286 0 10.2911 0.201022 10.1163 0.523716L0.799662 17.7237C0.438749 18.39 0.921187 19.2 1.67896 19.2H21.0044C21.3714 19.2 21.7089 18.999 21.8837 18.6763L31.2004 1.47628C31.5613 0.809983 31.0788 0 30.3211 0H10.9956Z" />
  </svg>
);

export default BandCamp;