'use client';

import { Heading, Flex, FlexProps } from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { FC } from 'react';

import { Tr, Td } from '@chakra-ui/react';
import { currency } from '@/lib/config/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type OrderTableRowProps = FlexProps & {
	basic: any;
	css: any;
	customer: any;
	deliveryStatus: any;
	date: any;
	totalItems: any;
	vat: any;
	subTotal: any;
	totalPrice: any;
	dueAmount: any;
	isFetching: boolean;
	orderId: any;
};

const OrderTableRow: FC<OrderTableRowProps> = ({
	basic,
	css,
	customer,
	deliveryStatus,
	date,
	totalItems,
	vat,
	subTotal,
	totalPrice,
	dueAmount,
	isFetching,
	orderId,
}) => {
	const router = useRouter();
	const formattedDate = format(new Date(date), 'dd/MM/yyyy');
	const formattedTime = format(new Date(date), 'h:mm:ss a');

	// const getStatusColor = (status: string) => {
	// 	switch (status) {
	// 		case 'pending':
	// 			return 'blue.500';
	// 		case 'completed':
	// 			return 'green.500';
	// 		case 'cancelled':
	// 			return 'red.500';
	// 		case 'order-placed':
	// 			return 'purple.500';
	// 		default:
	// 			return 'gray.500';
	// 	}
	// };

	const handleClick = () => {
		router.push(`/invoice/${orderId}`);
	};

	const tdStyle = {
		cursor: 'pointer',
	};

	return (
		<Tr
			borderBottom={`1px solid ${css?.tableBorder || '#fff'}`}
			margin='0px'
			padding='0px'
		>
			<Td onClick={handleClick} {...tdStyle}>
				{customer}
			</Td>
			<Td onClick={handleClick} {...tdStyle}>
				{deliveryStatus}
			</Td>
			<Td
				onClick={handleClick}
				{...tdStyle}
			>{`${formattedDate}, ${formattedTime}`}</Td>
			<Td onClick={handleClick} {...tdStyle}>
				{totalItems}
			</Td>
			<Td onClick={handleClick} {...tdStyle}>{`${
				currency?.symbol
			} ${vat.toLocaleString()} `}</Td>
			<Td onClick={handleClick} {...tdStyle}>{`${
				currency?.symbol
			} ${subTotal.toLocaleString()} `}</Td>
			<Td onClick={handleClick} {...tdStyle}>{`${
				currency?.symbol
			} ${totalPrice.toLocaleString()} `}</Td>
			<Td onClick={handleClick} {...tdStyle}>{`${
				currency?.symbol
			} ${dueAmount.toLocaleString()}`}</Td>
		</Tr>
	);
};

export default OrderTableRow;
