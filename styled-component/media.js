import { css } from "styled-components";

const deviceSizes = {
  mobile: [0, 414],
  tablet: [415, 1023],
  laptop: [1024, 1139],
  retina: [1140, 1439],
  laptopB: [1440, 1919],
  desktop: [1920, 10000],
};

export default Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${deviceSizes[
        label
      ][0]}px) and (max-width: ${deviceSizes[label][1]}px) {
      ${css(...args)};
    }
  `;

  console.log(acc, label);
  return acc;
}, {})