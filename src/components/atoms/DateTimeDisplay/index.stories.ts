import type { Meta, StoryObj } from "@storybook/react";

import { DateTimeDisplay } from ".";

const meta: Meta<typeof DateTimeDisplay> = {
  title: "atoms/DateTimeDisplay",
  component: DateTimeDisplay,
  tags: ["form"],
};

export default meta;
type Story = StoryObj<typeof DateTimeDisplay>;

export const Primary: Story = {
  args: {
    value: new Date("2022-01-01 00:00:00"),
  },
};
