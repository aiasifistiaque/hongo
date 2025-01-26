import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextButtonProps = ButtonProps & {
	children?: string;
};

const TextButton: FC<TextButtonProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Button
			bg='transparent'
			py='2px'
			px='0px'
			boxShadow='none'
			borderRadius='0px'
			display='inline-block'
			fontWeight='400'
			fontSize='1rem'
			h='auto'
			_hover={{
				bg: 'none',
			}}
			color={colors?.btnTextColor}
			transition='.4s'
			{...props}
		>
			{children}
		</Button>
	);
};

export default TextButton;
