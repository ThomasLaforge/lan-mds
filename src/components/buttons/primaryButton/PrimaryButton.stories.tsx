import { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "./PrimaryButton.tsx";

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "danger"]
    },
    icon: { control: false }
  }
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {
    children: "Bouton",
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary"
  }
};

export const Danger: Story = {
  args: {
    ...Default.args,
    variant: "danger"
  }
};
