import countryCodes from "./countryCode";

export const getCountryFlag = (countryName) => {
  const filteredFlag = countryCodes.find((i) => i.name === countryName);
  if (filteredFlag) {
    return filteredFlag.flag;
  } else {
    return `<svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.1"
        y="0.1"
        width="29.8"
        height="19.8"
        fill="#D9D9D9"
        stroke="#6B6161"
        stroke-width="0.2"
      />
      <circle cx="15" cy="10" r="4.75" stroke="#D84141" stroke-width="0.5" />
      <path d="M10.8904 12.1154L19.5 8" stroke="#D84141" stroke-width="0.5" />
    </svg>`;
  }
};
