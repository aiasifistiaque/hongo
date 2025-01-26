/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

import CustomerItem from './CustomerItem';
import moment from 'moment';
import AmountItem from './AmountItem';

type CustomerDetailsProps = BoxProps & {
	data: any;
	basic: any;
	css: any;
};

const CustomerDetails: FC<CustomerDetailsProps> = ({ data, basic, css }) => {
	const orderDate = data?.createdAt;

	const formattedDate = moment(orderDate).format('MM/DD/YYYY');
	const formattedTime = moment(orderDate).format('h:mm:ss A');

	return (
		<Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap='6'>
			<Box py='1rem'>
				<CustomerItem
					basic={basic}
					css={css}
					name='Customer:'
					value={data?.address?.name}
				/>
				<CustomerItem
					basic={basic}
					css={css}
					name='Phone:'
					value={data?.address?.phone}
				/>
				<CustomerItem
					basic={basic}
					css={css}
					name='Order Date:'
					value={`${formattedDate}, ${formattedTime}`}
				/>
				<CustomerItem
					basic={basic}
					css={css}
					name='Order Status:'
					value={data?.status}
				/>
			</Box>
			<Box py='1rem'>
				<AmountItem basic={basic} css={css} name='Total:' value={data?.total} />
				<AmountItem
					basic={basic}
					css={css}
					name='Paid Amount:'
					value={data?.paidAmount}
				/>
				<AmountItem
					basic={basic}
					css={css}
					name='Due Amount:'
					value={data?.dueAmount}
				/>
				<CustomerItem
					basic={basic}
					css={css}
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
