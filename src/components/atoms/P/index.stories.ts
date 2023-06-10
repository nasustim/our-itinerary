import type { Meta, StoryObj } from "@storybook/react";

import { P } from ".";

const meta: Meta<typeof P> = {
  title: "atoms/P",
  component: P,
  tags: ["form"],
};

export default meta;
type Story = StoryObj<typeof P>;

export const Primary: Story = {
  args: { value: "" },
};
