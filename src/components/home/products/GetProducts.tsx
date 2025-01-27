/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import { productCartHeight, cartBoxShadow } from '@/lib/config/constants';
import { useGetAllQuery } from '@/store/services/commonApi';

import React, { FC } from 'react';
import ProductCart from './sections/ProductCart';
import { useColors } from '@/hooks';
import { TextNormal } from '@/components/utils';

const TEMPLATE_COLUMNS = {
	base: 'repeat(1, 1fr)',
	sm: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	xl: 'repeat(4, 1fr)',
	'2xl': 'repeat(5, 1fr)',
};

type ProductsProps = BoxProps & {
	data: any;
};

const GetProducts: FC<ProductsProps> = ({ data, ...props }) => {
	const colors = useColors();

	if (!data) return null;

	return (
		<Box
			borderBottomWidth={1}
			pb='72px'
			borderBottomColor={colors?.border}
			{...props}
		>
			<Grid templateColumns={TEMPLATE_COLUMNS} gap={6}>
				{data?.doc?.length > 0 ? (
					data?.doc?.map((item: any, i: number) => (
						<GridItem
							bg={colors?.cardBg}
							key={i}
							w='100%'
							borderRadius={colors?.cardRadius}
						>
							<ProductCart data={item} />
						</GridItem>
					))
				) : (
					<TextNormal>No products found</TextNormal>
				)}
			</Grid>
		</Box>
	);
};

export default GetProducts;
