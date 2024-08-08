import { fn } from "@storybook/test";
import {DropdownMenu} from "@jailandrade/dropdown-menu";
import "@jailandrade/dropdown-menu/dist/index.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "DropdownMenu",
  component: DropdownMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    options: ["Jesús Millán", "Max Mendez", "Nicholas Yepes", "Victor Díaz"],
    match: "",
    legend: "Elige un usuario",
  },
};

export const Match = {
  args: {
    options: ["Jesús Millán", "Max Mendez", "Nicholas Yepes", "Victor Díaz"],
    match: "Victor Díaz",
    legend: "Elige un usuario",
  },
};

export const ListLarge = {
  args: {
    options: [
      "Jesús Millán",
      "Max Mendez",
      "Nicholas Yepes",
      "Victor Díaz",
      "Clemente Jackson",
      "Cleopatra",
      "Albert Einstein",
    ],
    match: "",
    legend: "Elige un usuario",
  },
};
