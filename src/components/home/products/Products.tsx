'use client';

import {
	Box,
	BoxProps,
	Flex,
	Grid,
	GridItem,
	useBreakpointValue,
} from '@chakra-ui/react';
import { productCartHeight, cartBoxShadow } from '@/lib/config/constants';
import { useGetAllQuery } from '@/store/services/commonApi';

import React, { FC } from 'react';
import ProductCart from './sections/ProductCart';
import { useColors } from '@/hooks';
import { ProductCardSkeleton } from '@/components/skeleton';

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

	const { data, isLoading, isFetching } = useGetAllQuery({
		path: 'products',
		limit: 8,
		search: search,
	});

	if (!data) return null;

	const skeletonCard = (
		<Grid
			gap={8}
			gridTemplateColumns={{
				base: '1fr',
				sm: '1fr 1fr',
				md: 'repeat(3, 1fr)',
				// lg: 'repeat(4, 1fr)',
				xl: 'repeat(4, 1fr)',
			}}
		>
			{[1, 2, 3, 4, 5]?.map((item: any) => (
				<ProductCardSkeleton key={item} />
			))}
		</Grid>
	);

	if (isLoading || isFetching) {
		return skeletonCard;
	}

	return (
		<Grid
			borderBottomWidth={1}
			pb='72px'
			borderBottomColor={colors?.border}
			templateColumns={TEMPLATE_COLUMNS}
			gap={6}
		>
			{data?.doc?.map((item: any, i: number) => (
				<ProductCart data={item} key={i} />
			))}
		</Grid>
	);
};

export default Products;
