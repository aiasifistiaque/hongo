import Price from '@/components/home/products/sections/Price';
import { CheckoutButton, TextNormal } from '@/components/utils';
import { useAuth } from '@/library';
import { Box, Center, DrawerFooter } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type CartDrawerFooterProps = {
	subTotal: number;
};

const CartDrawerFooter: FC<CartDrawerFooterProps> = ({ subTotal }) => {
	const { isLoggedIn } = useAuth();
	return (
		<DrawerFooter mt={'auto'}>
			<Box w='full'>
				<Center w='full' justifyContent='space-between' mb='1rem'>
					<TextNormal fontSize='1.5rem' fontWeight='600'>
						Subtotal:
					</TextNormal>
					<Box>
						<Price
							fontSize='1.5rem'
							fontWeight='600'
							price={subTotal?.toLocaleString()}
						/>
					</Box>
				</Center>
				<Link href='/checkout'>
					<CheckoutButton>
						{isLoggedIn ? 'Checkout' : 'Gheckout as Guest'}
					</CheckoutButton>
				</Link>
			</Box>
		</DrawerFooter>
	);
};

export default CartDrawerFooter;
