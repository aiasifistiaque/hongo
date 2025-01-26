import { Icon } from '@/components/icon';
import { useContent } from '@/hooks';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type LoginButtonProps = CenterProps & {
	children?: string;
	onOpen: () => void;
};

const BTN_WIDTH = { base: '2.4rem', md: '2.8rem' };

const LoginButton: FC<LoginButtonProps> = ({ onOpen, ...props }) => {
	const { content } = useContent();
	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius={content?.header?.iconRadius}
			backgroundColor={content?.header?.iconBg}
			cursor='pointer'
			mr='8px'
			onClick={onOpen}
			{...props}
		>
			<Icon color={content?.header?.iconFg} size={18} name='fi-user' />
		</Center>
	);
};

export default LoginButton;
