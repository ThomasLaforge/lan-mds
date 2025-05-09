import type { Meta, StoryObj } from "@storybook/react";

import PlayerForm from "./PlayerForm";

const meta = {
  component: PlayerForm
} satisfies Meta<typeof PlayerForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    player: {
      teamName: "Team A",
      teamAcronyme: "TA1",
      lastName: "Doe",
      firstName: "John",
      username: "johndoe",
      email: "johndoe@example.com",
      class: "B1",
      level: "beginner"
    },
    classOptions: {},
    levelsOptions: {},
    onLastNameChange: () => {},
    onFirstNameChange: () => {},
    onUsernameChange: () => {},
    onEmailChange: () => {},
    onClassSelect: () => {},
    onLevelSelect: () => {}
  }
};
