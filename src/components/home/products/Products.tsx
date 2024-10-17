/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonTitle } from '@/components/utils';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import { productCartHeight, cartBoxShadow } from '@/lib/config/constants';

import React, { FC } from 'react';
import ProductCart from './components/ProductCart';

type ProductsProps = BoxProps & {
	data: any;
};

const Products: FC<ProductsProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();


	
	return (
		<Box py='4rem' bg={colors.secondary} {...props}>
			<CommonTitle mb='4rem'>Products</CommonTitle>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					xl: 'repeat(4, 1fr)',
					'2xl': 'repeat(5, 1fr)',
					// '2xl': 'repeat(4, 1fr)',
				}}
				gap={6}
			>
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
