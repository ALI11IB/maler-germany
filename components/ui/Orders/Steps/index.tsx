import React from "react";
import { default as ChoosePaint } from "./ChoosePaint";
import { default as HouseSpace } from "./HouseSpace";
import { default as HouseInfo } from "./HouseInfo";

interface Steps {
  index: number;
  badge: null | string;

  label: null | string;
  component: (params: any) => JSX.Element;
}
export const stepSwitcher = (paintType: string | null) => {
  let steps: Steps[] = [
    {
      index: 1,
      badge: null,

      label: "Please choose what kind of paint do you need",
      component: ChoosePaint,
    },
  ];
  switch (paintType) {
    case "1":
      return (steps = [...steps, ...insideSteps]);

    default:
      return steps;
  }
};
const insideSteps: Steps[] = [
  {
    index: 2,
    label: "House Space",
    badge: "House space",
    component: HouseSpace,
  },
  {
    index: 2,
    label: "House Info",
    badge: "House info",
    component: HouseInfo,
  },
];
