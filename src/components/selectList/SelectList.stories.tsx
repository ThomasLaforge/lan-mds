import type { Meta, StoryObj } from '@storybook/react';

import SelectList from './SelectList';

const meta = {
  component: SelectList,
} satisfies Meta<typeof SelectList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {},
    onClick: () => {}
  }
};