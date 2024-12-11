import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SubmitButtonProps = ButtonProps & {
	children?: string;
};

const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Button
			w='full'
			bg={colors?.btnColor}
			color={colors?.btnTextColor}
			borderColor={colors?.btnColor}
			border='1px solid'
			py='24px'
			_hover={{
				backgroundColor: colors?.btnTextColor,
				color: colors?.btnColor,
				border: '1px solid',
				borderColor: colors?.btnColor,
			}}
			mt='2rem'
			{...props}>
			{children}
		</Button>
	);
};

export default SubmitButton;
