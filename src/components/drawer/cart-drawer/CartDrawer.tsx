'use client';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { DrawerHeader } from '@chakra-ui/react';
import { Column, CommonTitle } from '@/components';

import useCustomStyle from '@/hooks/useCustomStyle';

import { useAppSelector } from '@/hooks/useReduxHooks';
import { CartItemProps } from '@/lib/types/ProductTypes';
import CartItem from './components/CartItem';
import { CartDrawerWidth } from '@/lib/config/constants';

import CartDrawerFooter from './components/CartDrawerFooter';

type CartDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
};

const CartDrawer: FC<CartDrawerProps> = ({ isOpen, onClose }) => {
	const btnRef = useRef<HTMLButtonElement>(null);
	const { colors } = useCustomStyle();
	// const { isLoggedIn } = useAuth();
	const { cartItems, subTotal } = useAppSelector(state => state.cart);

	return (
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={onClose}
			finalFocusRef={btnRef}
		>
			<DrawerOverlay />
			<DrawerContent maxW={CartDrawerWidth}>
				<DrawerCloseButton />

				{/* <SearchDrawerHeader /> */}
				<DrawerHeader m={0}>
					<CommonTitle fontSize='1.5rem' color={colors?.black}>
						Shopping Cart
					</CommonTitle>
				</DrawerHeader>
				<DrawerBody
					borderBottom={`1px solid ${colors?.primary}`}
					maxH='70vh'
					overflowY='scroll'
				>
					<Column py='.5rem'>
						{cartItems?.map((item: CartItemProps, i: number) => (
							<CartItem key={i} {...item} />
						))}
					</Column>
				</DrawerBody>
				<CartDrawerFooter subTotal={subTotal} />
			</DrawerContent>
		</Drawer>
	);
};

export default CartDrawer;
