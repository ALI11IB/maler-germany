import { default as ChoosePaint } from "./ChoosePaint";
export const stepSwitcher = (paintType: string | null) => {
  let steps = [
    {
      index: 1,
      label: "Choose Paint",
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
const insideSteps = [
  {
    index: 2,
    label: "Please choose what kind of paint do you need2",
    component: ChoosePaint,
  },
];
