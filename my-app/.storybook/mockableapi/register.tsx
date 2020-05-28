import React, { useState } from 'react';
import { addons } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useChannel } from '@storybook/api';

const ADDON_ID = 'mockableapi';

const MyPanel = () => {
	return <div> Empty Panel </div>;
};

addons.register(ADDON_ID, api => {
  addons.addPanel(`${ADDON_ID}/panel`, {
    title: 'Test',
    render: ({ active, key }) => (
			<AddonPanel active={active} key={key}>
				<MyPanel />
			</AddonPanel>
		)
  });
});

