import { TextNormal } from '@/components';
import { Box, Center, Flex, FlexProps, Grid } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { CountCard, OrderList } from './index';
import { useGetAllQuery } from '@/store/services/commonApi';
import { useAppSelector } from '@/library';

type OrderComponentProps = FlexProps & {
	basic: any;
	css: any;
};

const OrderComponent: FC<OrderComponentProps> = ({ basic, css, ...props }) => {
	const { page, limit, sort } = useAppSelector(state => state.table);
	const { data: ordersData, isFetching } = useGetAllQuery({
		path: `orders`,
		page,
		limit,
		sort,
	});

	const { cartItems } = useAppSelector(state => state.cart);

	const cartTotal = cartItems.reduce(
		(acc: any, item: any) => acc + item.qty,
		0
	);

	return (
		<Box>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				pb='1rem'
				gap={{ base: 2, md: 4, lg: 8 }}
				{...props}
			>
				<CountCard
					basic={basic}
					css={css}
					count={ordersData?.totalDocs}
					title='Total Order'
					isLoading={isFetching}
				/>
				<CountCard
					basic={basic}
					css={css}
					count={ordersData?.totalDocs}
					title='New Order'
					isLoading={isFetching}
				/>
				<CountCard
					basic={basic}
					css={css}
					count={cartTotal}
					title='Total Cart'
					isLoading={isFetching}
				/>
			</Flex>
			<TextNormal
				fontSize='1.2rem'
				fontWeight='500'
				color={css?.cardFg || '#000'}
				basic={basic}
				mb='1rem'
			>
				Order List
			</TextNormal>
			<Box pb={{ base: '2rem' }}>
				<OrderList
					orderData={ordersData}
					isFetching={isFetching}
					basic={basic}
					css={css}
				/>
			</Box>
		</Box>
	);
};

export default OrderComponent;
