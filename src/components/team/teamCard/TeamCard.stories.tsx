import type { Meta, StoryObj } from "@storybook/react";
import TeamCard from "./TeamCard";

const meta: Meta<typeof TeamCard> = {
  title: "Components/TeamCard",
  component: TeamCard,
  tags: ["autodocs"],
  args: {
    name: "Dream Team",
    players: [
      {
        name: "Lala",
        firstname: "LalaLala",
        promoName: "MBA DFS",
        levelName: "Bronze"
      },
      {
        name: "Toto",
        firstname: "TotoToto",
        promoName: "MBA DFS",
        levelName: "Bronze"
      }
    ]
  }
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Default: Story = {
  args: {
    name: "Dream Team",
    players: [
      {
        name: "Lala",
        firstname: "LalaLala",
        promoName: "MBA DFS",
        levelName: "Bronze"
      },
      {
        name: "Toto",
        firstname: "TotoToto",
        promoName: "MBA DFS",
        levelName: "Bronze"
      }
    ]
  }
};
