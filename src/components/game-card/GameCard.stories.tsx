import type { Meta, StoryObj } from "@storybook/react";

import { GameCard } from "./GameCard";

const meta: Meta<typeof GameCard> = {
  title: "Components/GameCard",
  component: GameCard
};

export default meta;
type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {
    title: "Rocket League",
    description:
      "Rocket League est un jeu où des voitures s'affrontent pour marquer des buts.",
    imageUrl: "/rl-card-game.jpg"
  }
};
