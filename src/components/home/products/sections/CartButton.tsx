/* eslint-disable @typescript-eslint/no-explicit-any */

import { useColors } from '@/hooks';
import { Button, ButtonProps } from '@chakra-ui/react';

import React, { FC } from 'react';
type CartButtonProps = ButtonProps & {
	children?: string;
};

const CartButton: FC<CartButtonProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Button
			borderRadius={0}
			w='full'
			transition='.4s'
			bg={colors?.btnColor}
			color={colors?.btnTextColor}
			borderWidth={1}
			borderColor={colors?.btnColor}
			_hover={{
				backgroundColor: colors.btnTextColor,
				color: colors.btnColor,
				borderColor: colors.btnColor,
			}}
			{...props}>
			{children}
		</Button>
	);
};

export default CartButton;
