import { useContent } from '@/hooks';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type LoggedInIconProps = CenterProps & {
	firstLetter: string;
	content: any;
};

const LoggedInIcon: FC<LoggedInIconProps> = ({
	firstLetter,
	content,
	...props
}) => {
	const BTN_WIDTH = { base: '2.4rem', md: '2.8rem' };

	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius={content?.header?.iconRadius}
			backgroundColor={content?.header?.iconBg}
			cursor='pointer'
			mr='8px'
			color={content?.header?.iconFg}
			fontSize='1.5rem'
			{...props}
		>
			{firstLetter}
		</Center>
	);
};

export default LoggedInIcon;
