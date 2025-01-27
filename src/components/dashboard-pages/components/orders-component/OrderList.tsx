'use client';

import { TextNormal, OrderTableRowSkeleton } from '@/components';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { OrderTableRow } from './index';
import Pagination from './Pagination';

type OrderListProps = FlexProps & {
	basic: any;
	css: any;
	orderData: any;
	isFetching: boolean;
};

const OrderList: FC<OrderListProps> = ({
	basic,
	css,
	orderData,
	isFetching,
}) => {
	return (
		<TableContainer
			bg={css?.tableBg || '#EEF0F7'}
			borderRadius={`${css?.tableRadius || 8}px`}
		>
			<Flex
				borderBottom={`1px solid ${css?.tableBorder || '#fff'}`}
				px='24px'
				w='full'
			>
				<Pagination basic={basic} css={css} data={orderData && orderData} />
			</Flex>

			<Table fontFamily={basic?.secondaryFont} size='md' variant={'unstyled'}>
				<Thead>
					<Tr
						fontFamily={basic?.secondaryFont}
						borderBottom={`1px solid ${css?.tableBorder || '#fff'}`}
					>
						<Th>Customer</Th>
						<Th>Delivery Status</Th>
						<Th>Order Date</Th>
						<Th>Total Items</Th>
						<Th>Vat</Th>
						<Th>Sub Total</Th>
						<Th>Total Price</Th>
						<Th>Due Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					{isFetching &&
						[1, 2, 3, 4, 5].map((item: number) => (
							<OrderTableRowSkeleton key={item} />
						))}

					{orderData?.doc?.length > 0 ? (
						orderData.doc.map((order: any, i: number) => (
							<OrderTableRow
								key={i}
								basic={basic}
								css={css}
								customer={order?.customer?.name}
								date={order?.orderDate}
								deliveryStatus={order?.status}
								dueAmount={order?.dueAmount}
								subTotal={order?.subTotal}
								totalItems={order?.totalItems}
								totalPrice={order?.total}
								vat={order?.vat}
								isFetching={isFetching}
								orderId={order?._id}
							/>
						))
					) : (
						<TextNormal px='1.5rem' py='1rem' basic={basic}>
							No more orders found!
						</TextNormal>
					)}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default OrderList;
