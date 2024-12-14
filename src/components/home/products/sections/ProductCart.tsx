'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Center, Flex, useToast } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CartHeader, CartBody, CartButton } from './index';
import { addToCart } from '@/store/slices/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useColors } from '@/hooks';
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
			<Link href={`/products/${data?._id}`}>
				<Column flex={1}>
					<CartHeader imgSrc={data?.image} />
					<CartBody data={data} />
				</Column>
			</Link>
			<Center
				flex={1}
				justifyContent='flex-end'
				p='.8rem'>
				<CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
			</Center>
		</Flex>
	);
};

export default ProductCart;
