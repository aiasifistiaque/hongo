import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type RemoveButtonProps = ButtonProps & {
	children?: string;
};

const RemoveButton: FC<RemoveButtonProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Button
			color={colors?.white}
			bg={colors?.danger}
			transition='.4s'
			_hover={{ backgroundColor: colors?.deepDanger }}
			{...props}
		>
			{children}
		</Button>
	);
};

export default RemoveButton;
