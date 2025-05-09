import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Infos",
        content: () => (
          <div>
            <h3>Bienvenue</h3>
            <p>Voici le contenu de l'onglet "Infos".</p>
          </div>
        )
      },
      {
        label: "Liste",
        content: () => (
          <ul>
            <li>Élément 1</li>
            <li>Élément 2</li>
            <li>Élément 3</li>
          </ul>
        )
      }
    ],
    defaultTabIndex: 0
  }
};
