import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  tags: ["form"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};
