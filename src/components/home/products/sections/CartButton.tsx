/* eslint-disable @typescript-eslint/no-explicit-any */

import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';

import React, { FC } from 'react';
type CartButtonProps = ButtonProps & {
	children?: string;
};

const CartButton: FC<CartButtonProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Button
			w='full'
			transition='.4s'
			bg={colors?.dark}
			color={colors?.white}
			_hover={{ backgroundColor: colors.black }}
			{...props}
		>
			{children}
		</Button>
	);
};

export default CartButton;
