/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

import CustomerItem from './CustomerItem';
import moment from 'moment';
import AmountItem from './AmountItem';

type CustomerDetailsProps = BoxProps & {
	data: any;
};

const CustomerDetails: FC<CustomerDetailsProps> = ({ data }) => {
	const orderDate = data?.createdAt;

	const formattedDate = moment(orderDate).format('MM/DD/YYYY');
	const formattedTime = moment(orderDate).format('h:mm:ss A');

	return (
		<Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap='6'>
			<Box py='1rem'>
				<CustomerItem name='Customer:' value={data?.address?.name} />
				<CustomerItem name='Phone:' value={data?.address?.phone} />
				<CustomerItem
					name='Order Date:'
					value={`${formattedDate}, ${formattedTime}`}
				/>
				<CustomerItem name='Order Status:' value={data?.status} />
			</Box>
			<Box py='1rem'>
				<AmountItem name='Total:' value={data?.total} />
				<AmountItem name='Paid Amount:' value={data?.paidAmount} />
				<AmountItem name='Due Amount:' value={data?.dueAmount} />
				<CustomerItem
					name='Payment Method:'
					value={`${
						data?.paymentMethod == 'cash on delivery' || 'cash'
							? 'COD'
							: data?.paymentMethod
					}`}
				/>
			</Box>
		</Grid>
	);
};

export default CustomerDetails;
