import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartTitleProps = ButtonProps & {
	children?: string;
};

const CartTitle: FC<CartTitleProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Button
			color={colors?.white}
			py='1.4rem'
			transition='.4s'
			_hover={{ backgroundColor: colors?.black }}
			bg={colors?.dark}
			w='full'
			borderRadius='full'
			{...props}
		>
			{children}
		</Button>
	);
};

export default CartTitle;
