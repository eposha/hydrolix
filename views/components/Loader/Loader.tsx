import type { FC } from 'react';

interface Props {
  size?: number;
}

const Loader: FC<Props> = ({ size = 14 }) => (
  <svg
    role="img"
    aria-label="loader"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    overflow="visible"
    fill="none"
  >
    <defs>
      <rect id="spinner" y="0" width="0.5" height={`${size / 3}`} transform="rotate(-45)"></rect>
    </defs>
    <use xlinkHref="#spinner" transform={`rotate(0 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(45 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0.16s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(90 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0.32s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(135 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0.48s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(180 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0.64s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(225 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0.8s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(270 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="0.96s"
        repeatCount="indefinite"
      ></animate>
    </use>
    <use xlinkHref="#spinner" transform={`rotate(315 ${size / 2} ${size / 2})`}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.28s"
        begin="1.12s"
        repeatCount="indefinite"
      ></animate>
    </use>
  </svg>
);

export default Loader;
