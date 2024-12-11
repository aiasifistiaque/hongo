'use client';
import { Icon } from '@/components/icon';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { useColors } from '@/hooks';

type CartButtonProps = CenterProps & {
	children?: string;
	onOpen?: () => void;
};

const BTN_WIDTH = { base: '2rem', md: '2.8rem' };

const CartButton: FC<CartButtonProps> = ({ onOpen, ...props }) => {
	const { cartItems } = useAppSelector(state => state.cart);
	const colors = useColors();

	const cartCount = () => {
		return cartItems.reduce((acc: any, item: any) => acc + item.qty, 0);
	};

	return (
		<BtnContainer
			onClick={onOpen}
			{...props}>
			<CartTotal>{cartCount()}</CartTotal>
			<Icon
				color={colors.brandText}
				size={18}
				name='cart'
			/>
		</BtnContainer>
	);
};

export default CartButton;

const BtnContainer = ({ children, ...props }: CenterProps & { children: ReactNode }) => {
	const { brand } = useColors();
	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius='50%'
			backgroundColor={brand}
			cursor='pointer'
			position='relative'
			{...props}>
			{children}
		</Center>
	);
};

const CartTotal = ({ children, ...props }: CenterProps & { children: ReactNode }) => {
	const colors = useColors();
	return (
		<Center
			position='absolute'
			w={'1.2rem'}
			h={'1.2rem'}
			top='-2px'
			right='-2px'
			fontSize='.775rem'
			color={colors?.btnTextColor}
			bg={colors?.btnColor}
			borderRadius='50%'
			fontWeight='500'
			{...props}>
			{children}
		</Center>
	);
};
