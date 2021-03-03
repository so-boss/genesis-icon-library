/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const Crossover: Icon;
export const Midsize: Icon;
export const Pickup: Icon;
export const Convertible: Icon;
export const SportsStroke: Icon;
export const Side: Icon;
export const CompactCrossover: Icon;
export const SedanFront: Icon;
export const ArrowDownRight: Icon;
export const ArrowLeft: Icon;
export const ArrowLeftCircle: Icon;
export const ArrowRight: Icon;
export const ArrowRightCircle: Icon;
export const ArrowUp: Icon;
export const ArrowUpCircle: Icon;
export const ArrowUpLeft: Icon;
export const ArrowUpRight: Icon;
export const AtSign: Icon;
