import { useColors } from '@/hooks';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type RemoveButtonProps = ButtonProps & {
	children?: string;
};

const RemoveButton: FC<RemoveButtonProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Button
			colorScheme='red'
			transition='.4s'
			fontSize='.875rem'
			p={2}
			h='auto'
			{...props}>
			{children}
		</Button>
	);
};

export default RemoveButton;
