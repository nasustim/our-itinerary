import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "atoms/TextInput",
  component: TextInput,
  tags: ["form"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {},
};
