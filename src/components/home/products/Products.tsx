'use client';

import { Box, BoxProps, Flex, Grid, GridItem } from '@chakra-ui/react';
import { productCartHeight, cartBoxShadow } from '@/lib/config/constants';
import { useGetAllQuery } from '@/store/services/commonApi';

import React, { FC } from 'react';
import ProductCart from './sections/ProductCart';
import { useColors } from '@/hooks';

const TEMPLATE_COLUMNS = {
	base: 'repeat(1, 1fr)',
	sm: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	xl: 'repeat(4, 1fr)',
	'2xl': 'repeat(5, 1fr)',
};

type ProductsProps = BoxProps & {
	search?: string;
};

const Products: FC<ProductsProps> = ({ search, ...props }) => {
	const colors = useColors();

	const { data } = useGetAllQuery({
		path: 'products',
		limit: 8,
		search: search,
	});

	if (!data) return null;

	return (
		<Grid
			borderBottomWidth={1}
			pb='72px'
			borderBottomColor={colors?.border}
			templateColumns={TEMPLATE_COLUMNS}
			gap={6}>
			{data?.doc?.map((item: any, i: number) => (
				<ProductCart
					data={item}
					key={i}
				/>
			))}
		</Grid>
	);
};

export default Products;
