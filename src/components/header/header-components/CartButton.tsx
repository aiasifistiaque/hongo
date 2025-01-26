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
	content: any;
};

const BTN_WIDTH = { base: '2.4rem', md: '2.8rem' };

const CartButton: FC<CartButtonProps> = ({
	onOpen,
	cartTotal,
	content,
	...props
}) => {
	const colors = useColors();

	return (
		<BtnContainer content={content} onClick={onOpen} {...props}>
			<CartTotal content={content}>{cartTotal || 0}</CartTotal>
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
	content,
	...props
}: CenterProps & { children: ReactNode; content: any }) => {
	const { brand } = useColors();

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

const CartTotal = ({
	children,
	content,
	...props
}: CenterProps & { children: any; content: any }) => {
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
