import type { Meta, StoryObj } from "@storybook/react";

import { DateTimeInput } from ".";

const meta: Meta<typeof DateTimeInput> = {
  title: "atoms/DateTimeInput",
  component: DateTimeInput,
  tags: ["form"],
};

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Primary: Story = {
  args: {},
};
