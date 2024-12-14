'use client';

import { Box, BoxProps, Center, Flex, useToast, Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CartHeader, CartBody } from './index';
import { addToCart } from '@/store/slices/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useColors, useContent } from '@/hooks';
import { Column } from '@/components/utils';

type ProductCartProps = BoxProps & {
	data: any;
};

const ProductCart: FC<ProductCartProps> = ({ data, ...props }) => {
	const dispatch = useDispatch();
	const toast = useToast();
	const colors = useColors();

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				item: {
					_id: data?._id,
					name: data?.name,
					price: data?.price,
					vat: 0,
					image: data?.image,
				},
			})
		);
		toast({
			title: `1 ${data?.name} added to bag`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			variant: 'subtle',
		});
	};

	return (
		<Flex
			flexDir='column'
			bg={colors.cardBg}
			w='full'
			flex={1}
			borderRadius={`${colors.cardRadius}px`}
			{...props}>
			<Flex
				flex={1}
				w='full'>
				<Link
					href={`/products/${data?._id}`}
					style={{ width: '100%' }}>
					<Column
						flex={1}
						w='full'>
						<CartHeader imgSrc={data?.image} />
						<CartBody data={data} />
					</Column>
				</Link>
			</Flex>
			<Flex
				align='flex-end'
				justify='center'
				p='.8rem'>
				<CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
			</Flex>
		</Flex>
	);
};

type CartButtonProps = ButtonProps & {
	children?: string;
};

const CartButton: FC<CartButtonProps> = ({ children, ...props }) => {
	const colors = useColors();

	return (
		<Button
			borderRadius={`${colors.cardRadius / 2}px`}
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

export default ProductCart;
