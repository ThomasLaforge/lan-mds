import type { Meta, StoryObj } from "@storybook/react";

import { default as CalendarIcon } from "../icons/Calendar";
import { default as ClockIcon } from "../icons/Clock";
import { default as LocationIcon } from "../icons/Location";
import { default as PersonIcon } from "../icons/Person";
import { default as TrophyIcon } from "../icons/Trophy";

import IconText from "./IconText";

const meta: Meta<typeof IconText> = {
  component: IconText,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof IconText>;

export const Calendar: Story = {
  args: {
    Icon: () => <CalendarIcon />,
    label: "25 mai 2025"
  }
};

export const Clock: Story = {
  args: {
    Icon: () => <ClockIcon />,
    label: "20h"
  }
};

export const Location: Story = {
  args: {
    Icon: () => <LocationIcon />,
    label: "MyDigitalSchool"
  }
};

export const Person: Story = {
  args: {
    Icon: () => <PersonIcon />,
    label: "Etudiants, professeurs, invités"
  }
};

export const Trophy: Story = {
  args: {
    Icon: () => <TrophyIcon />,
    label: "Tournoi suisse"
  }
};
