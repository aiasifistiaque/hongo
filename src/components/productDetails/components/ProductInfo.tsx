/* eslint-disable @typescript-eslint/no-explicit-any */
import Price from '@/components/home/products/sections/Price';
import { CommonTitle, TextNormal } from '@/components/utils';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, CenterProps, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductInfoProps = CenterProps & {
	data: any;
};

const ProductInfo: FC<ProductInfoProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Box {...props}>
			<TextNormal color={colors?.textColor} mb='12px'>
				{data?.category?.name}
			</TextNormal>
			<CommonTitle fontSize='2rem'>{data?.name}</CommonTitle>
			<Flex alignItems='center' gap={4}>
				{/* <Rating ratingValue={data?.rating || 4} /> */}
				{/* <TextNormal
					color={colors?.textColor}
				>{`${data?.totalReview} reviews`}</TextNormal> */}
			</Flex>
			<Flex mb='.5rem'>
				<Price fontSize='1.5rem' price={data?.price} />
			</Flex>
			<TextNormal color={colors?.textColor} mb='24px'>
				{data?.shortDescription}
			</TextNormal>
		</Box>
	);
};

export default ProductInfo;
