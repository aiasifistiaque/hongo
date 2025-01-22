/* eslint-disable @typescript-eslint/no-explicit-any */

import { Column, TextNormal } from '@/components';
import Rating from '@/components/utils/rating/Rating';
import { Box, Flex, FlexProps } from '@chakra-ui/react';

import React, { FC } from 'react';
import Price from './Price';
import { useColors, useFont } from '@/hooks';
type CartBodyProps = FlexProps & {
	data: any;
};

const CartBody: FC<CartBodyProps> = ({ data, ...props }) => {
	const font = useFont();
	const colors = useColors();
	return (
		<Flex
			flexDir='column'
			bg={colors.cardBg}
			gap={2}
			flex={1}
			p='.8rem'
			{...props}
		>
			<TextNormal
				fontFamily={font?.primaryFont}
				fontWeight='500'
				noOfLines={2}
				minH='60px'
				textAlign='center'
				fontSize='1.2rem'
			>
				{data?.name}
			</TextNormal>
			<Column w='full' align='center' justify='flex-end' flex={1}>
				<Box>
					<Rating ratingValue={data?.rating || '3'} />
				</Box>
				<Price
					fontFamily={font?.primaryFont}
					fontWeight='bold'
					fontSize='1rem'
					price={data?.price.toLocaleString()}
				/>
			</Column>
		</Flex>
	);
};

export default CartBody;
