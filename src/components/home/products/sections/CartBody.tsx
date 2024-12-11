/* eslint-disable @typescript-eslint/no-explicit-any */

import { Column, TextNormal } from '@/components';
import Rating from '@/components/utils/rating/Rating';
import { Box, FlexProps } from '@chakra-ui/react';

import React, { FC } from 'react';
import Price from './Price';
import { useColors } from '@/hooks';
type CartBodyProps = FlexProps & {
	data: any;
};

const CartBody: FC<CartBodyProps> = ({ data, ...props }) => {
	const colors = useColors();
	return (
		<Column
			bg={colors.cardBg}
			alignItems='center'
			gap={2}
			p='.8rem'
			{...props}>
			<TextNormal
				noOfLines={2}
				fontSize='1.2rem'>
				{data?.name}
			</TextNormal>
			<Box>
				<Rating ratingValue={data?.rating || '3'} />
			</Box>
			<Price
				fontWeight='bold'
				fontSize='1rem'
				price={data?.price.toLocaleString()}
			/>
		</Column>
	);
};

export default CartBody;
