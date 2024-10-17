import Price from '@/components/home/products/components/Price';
import { Column, RemoveButton, TextNormal } from '@/components/utils';
import useCustomStyle from '@/hooks/useCustomStyle';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { CartItemProps } from '@/lib/types/ProductTypes';
import {
	addToCart,
	deleteOneFromCart,
	deleteSingleItemFromCart,
} from '@/store/slices/cartSlice';
import { Box, Button, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import ProductImage from './ProductImage';

const CartItem = ({ image, id, name, price, qty }: CartItemProps) => {
	const dispatch = useAppDispatch();
	const handleRemove = () => {
		dispatch(deleteSingleItemFromCart(id));
	};
	const { colors } = useCustomStyle();

	const handleAdd = () => {
		dispatch(
			addToCart({
				item: {
					_id: id,
					name,
					price,
					vat: 0,
					image,
				},
			})
		);
	};

	const handleRemoveOne = () => {
		dispatch(deleteOneFromCart(id));
	};

	return (
		<Flex
			w='full'
			justifyContent='space-between'
			alignItems='center'
			borderBottom={`1px solid ${colors?.primary}`}
			py='1rem'
		>
			<Flex alignItems='center' h='full' w='full'>
				<ProductImage imgSrc={image} />
				<Column w='full' h='full' justifyContent='center'>
					<TextNormal>{name}</TextNormal>
					<Flex>
						<Price fontSize='.85rem' price={price} />
					</Flex>
				</Column>
			</Flex>

			<Column w='auto' alignItems='center'>
				<Flex mb={2}>
					<Button onClick={handleRemoveOne}>-</Button>
					<Center width='2rem'>
						<TextNormal>{qty}</TextNormal>
					</Center>
					<Button onClick={handleAdd}>+</Button>
				</Flex>
				<Box>
					<RemoveButton onClick={handleRemove}>Remove</RemoveButton>
				</Box>
			</Column>
		</Flex>
	);
};

export default CartItem;
