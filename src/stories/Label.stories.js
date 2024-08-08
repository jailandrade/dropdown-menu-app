import { fn } from '@storybook/test';
import {Label} from '@jailandrade/dropdown-menu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Label',
	component: Label,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
	args: {
		label: 'Etiqueta',
		onClick: () => {},
		classes: ''
	},
};


export const Large = {
	args: {
		label: 'Etiqueta larga de texto',
		onClick: () => {},
		classes: ''
	},
}


export const Bold = {
	args: {
		label: 'Etiqueta en negritas',
		onClick: () => {},
		classes: 'font-bold'
	},
}

export const Italic = {
	args: {
		label: 'Etiqueta cursiva',
		onClick: () => {},
		classes: 'italic'
	},
}
