import Price from '@/components/home/products/components/Price';
import { CheckoutButton, TextNormal } from '@/components/utils';
import { Box, Center, DrawerFooter } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type CartDrawerFooterProps = {
	subTotal: number;
};

const CartDrawerFooter: FC<CartDrawerFooterProps> = ({ subTotal }) => {
	return (
		<DrawerFooter mt={'auto'}>
			<Box w='full'>
				<Center w='full' justifyContent='space-between' mb='1rem'>
					<TextNormal fontSize='1.5rem' fontWeight='600'>
						Subtotal:
					</TextNormal>
					<Box>
						<Price fontSize='1.5rem' fontWeight='600' price={subTotal} />
					</Box>
				</Center>
				<Link href='/checkout'>
					<CheckoutButton>Checkout</CheckoutButton>
				</Link>
			</Box>
		</DrawerFooter>
	);
};

export default CartDrawerFooter;
