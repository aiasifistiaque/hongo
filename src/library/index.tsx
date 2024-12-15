//export wrappers
export * from './wrappers';

//export hooks
export * from './hooks';

//export text
export * from './text';

//export types
export * from './types';

//export buttons
export * from './buttons';

//containers
export * from './containers';

//functions
export const getAlignment = (align: string) => {
	if (align == 'center') {
		return 'center';
	} else if (align == 'right') {
		return 'flex-end';
	} else {
		return 'flex-start';
	}
};
