import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartTitleProps = ButtonProps & {
	children?: string;
};

const CartTitle: FC<CartTitleProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Button
			color={colors?.btnTextColor}
			py='1.4rem'
			transition='.4s'
			borderWidth={1}
			borderColor={colors?.btnColor}
			_hover={{
				backgroundColor: 'transparent',
				color: colors?.btnColor,
				borderColor: colors?.btnColor,
			}}
			bg={colors?.btnColor}
			w='full'
			borderRadius='full'
			{...props}>
			{children}
		</Button>
	);
};

export default CartTitle;
