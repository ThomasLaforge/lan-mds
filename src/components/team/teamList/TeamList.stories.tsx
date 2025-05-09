import { Meta, StoryObj } from "@storybook/react";
import { TeamList } from "./TeamList";

const meta: Meta<typeof TeamList> = {
  title: "Components/TeamList",
  component: TeamList,
};

export default meta;
type Story = StoryObj<typeof TeamList>;

export const Default: Story = {
  render: () => <TeamList />,
};
