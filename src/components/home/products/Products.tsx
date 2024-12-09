/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import { productCartHeight, cartBoxShadow } from '@/lib/config/constants';

import React, { FC } from 'react';
import ProductCart from './sections/ProductCart';

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

const Products: FC<ProductsProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();

	return (
		<Box bg={colors.secondary} {...props}>
			<Grid templateColumns={TEMPLATE_COLUMNS} gap={6}>
				{data?.map((item: any, i: number) => (
					<GridItem
						key={i}
						w='100%'
						h={productCartHeight}
						boxShadow={cartBoxShadow}
					>
						<ProductCart data={item} />
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default Products;
