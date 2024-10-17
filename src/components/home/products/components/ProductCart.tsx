import { Box, BoxProps, Center, useToast } from '@chakra-ui/react';
import React, { FC } from 'react';
import CartHeader from './CartHeader';
import CartBody from './CartBody';
import CartButton from './CartButton';
import { addToCart } from '@/store/slices/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

type ProductCartProps = BoxProps & {
	data: {
		_id: string;
		imgSrc: string;
		productName: string;
		price: string | number;
		rating: number;
		category: string;
		stock?: number;
	};
};

const ProductCart: FC<ProductCartProps> = ({ data, ...props }) => {
	const dispatch = useDispatch();
	const toast = useToast();

	const { _id, price, imgSrc: image, category, productName: name } = data;

	const handleAddToCart = () => {
		dispatch(
			addToCart({ item: { _id, name, price, vat: 0, image, category } })
		);
		toast({
			title: `1 ${name} added to bag`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			variant: 'subtle',
		});
	};
	return (
		<Box w='full' {...props}>
			<CartHeader imgSrc={data?.imgSrc} />
			<Link href={`/products/${_id}`}>
				<CartBody data={data} />
			</Link>
			<Center mt='auto' p='.8rem'>
				<CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
			</Center>
		</Box>
	);
};

export default ProductCart;
