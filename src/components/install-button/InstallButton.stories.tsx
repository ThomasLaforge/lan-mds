import type { Meta, StoryObj } from "@storybook/react";

import InstallButton from "./InstallButton";

const meta = {
  title: "Components/InstallButton",
  component: InstallButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof InstallButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
