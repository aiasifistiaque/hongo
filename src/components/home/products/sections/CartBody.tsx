/* eslint-disable @typescript-eslint/no-explicit-any */

import { Column, TextNormal } from '@/components';
import Rating from '@/components/utils/rating/Rating';
import { Box, FlexProps } from '@chakra-ui/react';

import React, { FC } from 'react';
import Price from './Price';
type CartBodyProps = FlexProps & {
	data: any;
};

const CartBody: FC<CartBodyProps> = ({ data, ...props }) => {
	return (
		<Column alignItems='center' gap={2} p='.8rem' {...props}>
			<TextNormal fontSize='1.2rem'>{data?.name}</TextNormal>
			<Box>
				<Rating ratingValue={data?.rating || '3'} />
			</Box>
			<Price fontWeight='bold' fontSize='1rem' price={data?.price} />
		</Column>
	);
};

export default CartBody;
