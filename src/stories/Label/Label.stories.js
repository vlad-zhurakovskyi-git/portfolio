import React from 'react';

import { Label } from './Label';

export default {
  title: 'Example/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'xr',
};


export const LightGreen = Template.bind({});
LightGreen.args = {
  type: 'light-green',
  label: 'Label',
};

export const DarkGreen = Template.bind({});
DarkGreen.args = {
  type: 'dark-green',
  label: 'Label',
};

export const LightRed = Template.bind({});
LightRed.args = {
  type: 'light-red',
  label: 'Label',
};

export const DarkRed = Template.bind({});
DarkRed.args = {
  type: 'dark-red',
  label: 'Label',
};

export const Grey = Template.bind({});
Grey.args = {
  type: 'grey',
  label: 'Label',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  size: 'small',
  type: 'dark-red',
  label: 'Label',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  size: 'medium',
  type: 'light-green',
  label: 'Label',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  size: 'large',
  type: 'yellow',
  label: 'Label',
};
