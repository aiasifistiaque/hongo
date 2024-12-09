/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Center, useToast } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CartHeader, CartBody, CartButton } from './index';
import { addToCart } from '@/store/slices/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

type ProductCartProps = BoxProps & {
	data: any;
};

const ProductCart: FC<ProductCartProps> = ({ data, ...props }) => {
	const dispatch = useDispatch();
	const toast = useToast();

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
		<Box w='full' {...props}>
			<Link href={`/products/${data?._id}`}>
				<CartHeader imgSrc={data?.image} />
				<CartBody data={data} />
			</Link>
			<Center mt='auto' p='.8rem'>
				<CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
			</Center>
		</Box>
	);
};

export default ProductCart;
