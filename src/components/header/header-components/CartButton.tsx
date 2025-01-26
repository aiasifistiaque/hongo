'use client';
import { Icon } from '@/components/icon';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { useColors, useContent } from '@/hooks';
import { TextNormal } from '@/components/utils';

type CartButtonProps = CenterProps & {
	children?: string;
	onOpen?: () => void;
	cartTotal: number | string;
};

const BTN_WIDTH = { base: '2.4rem', md: '2.8rem' };

const CartButton: FC<CartButtonProps> = ({ onOpen, cartTotal, ...props }) => {
	const colors = useColors();
	const { content } = useContent();

	return (
		<BtnContainer onClick={onOpen} {...props}>
			<CartTotal>{cartTotal || 0}</CartTotal>
			<Icon
				color={content?.header?.iconFg || colors.brand}
				size={18}
				name='cart'
			/>
		</BtnContainer>
	);
};

export default CartButton;
const BtnContainer = ({
	children,
	...props
}: CenterProps & { children: ReactNode }) => {
	const { brand } = useColors();
	const { content } = useContent();

	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius={content?.header?.iconRadius}
			backgroundColor={content?.header?.iconBg || brand}
			cursor='pointer'
			position='relative'
			{...props}
		>
			{children}
		</Center>
	);
};

const CartTotal = ({ children, ...props }: CenterProps & { children: any }) => {
	const { content } = useContent();

	return (
		<Center
			position='absolute'
			w={'1.2rem'}
			h={'1.2rem'}
			top='-2px'
			right='-2px'
			fontSize='.775rem'
			color={content?.header?.tagFg}
			bg={content?.header?.tagBg}
			borderRadius='50%'
			fontWeight='500'
			{...props}
		>
			<TextNormal
				fontSize='10px'
				fontWeight='bold'
				color={content?.header?.countFg || '#fff'}
			>
				{children}
			</TextNormal>
		</Center>
	);
};
