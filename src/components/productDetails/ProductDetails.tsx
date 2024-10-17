/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid, GridItem, useToast } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

import useCustomStyle from '@/hooks/useCustomStyle';
import { TextNormal } from '@/components';
import ProductAccordion from './components/ProductAccordion';
import Quanity from './components/Quantity';
import LeftPart from './components/LeftPart';
import ProductInfo from './components/ProductInfo';
import AddToCart from './components/AddToCart';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { addToCart } from '@/store/slices/cartSlice';

type ProductDetailsProps = BoxProps & {
	data: any;
	id: string;
};

const ProductDetails: FC<ProductDetailsProps> = ({ id, data, ...props }) => {
	const [quantity, setQuantity] = useState(1);
	const { colors } = useCustomStyle();
	const dispatch = useAppDispatch();
	const toast = useToast();

	// for handling quantity
	const handleQuantity = (type: string) => {
		if (type == 'increment') {
			setQuantity(quantity + 1);
			return;
		}
		if (type == 'decrement') {
			if (quantity <= 1) {
				return;
			} else {
				setQuantity(quantity - 1);
				return;
			}
		}
	};

	console.log('Data', data);

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				item: {
					_id: id,
					name: data?.name,
					price: data?.price,
					vat: 0,
					image: data?.imgSrc,
				},
				qty: quantity,
			})
		);
		setQuantity(1);
		toast({
			title: `${quantity} ${data?.name} added to bag`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			variant: 'subtle',
		});
	};

	return (
		<Box py='6rem' borderBottom={`1px solid ${colors?.primary}`} {...props}>
			<Grid
				templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
				gap={6}
			>
				<GridItem w='100%' h='auto' mb='4rem'>
					<LeftPart imgSrc={data?.imgSrc} />
				</GridItem>
				<GridItem w='100%' h='auto'>
					<Box>
						<ProductInfo data={data} />
						<Box py='1.5rem' mb='32px'>
							<TextNormal mb='12px'>Quantity</TextNormal>
							<Grid templateColumns='repeat(6, 1fr)' gap={2}>
								<GridItem colSpan={{ base: 2, md: 1 }} w='auto' h='3rem'>
									<Quanity
										quantity={quantity}
										handleQuantity={handleQuantity}
									/>
								</GridItem>
								<GridItem colSpan={{ base: 4, md: 5 }} w='auto' h='3rem'>
									<AddToCart addToCart={handleAddToCart} />
								</GridItem>
							</Grid>
						</Box>
						<Box w='auto'>
							<ProductAccordion
								description={data?.description}
								shipping={data?.shipping}
								additionalInformation={data?.additionalInformation}
							/>
						</Box>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default ProductDetails;
