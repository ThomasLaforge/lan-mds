import { Meta, StoryObj } from "@storybook/react";
import Ranking from "./Ranking";

const meta: Meta<typeof Ranking> = {
  title: "Components/Ranking",
  component: Ranking,
  parameters: {
    docs: {
      autodocs: true // 👈 Active l'autogénération des docs
    }
  }
};

export default meta;

type Story = StoryObj<typeof Ranking>;

export const Default: Story = {};
