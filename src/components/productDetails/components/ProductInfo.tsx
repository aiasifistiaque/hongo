import Price from '@/components/home/products/sections/Price';
import { CommonTitle, TextNormal } from '@/components/utils';
import Rating from '@/components/utils/rating/Rating';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, CenterProps, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductInfoProps = CenterProps & {
	data: {
		category: string;
		name: string;
		rating: number;
		totalReview: number;
		price: string | number;
		shortDescription: string;
	};
};

const ProductInfo: FC<ProductInfoProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Box {...props}>
			<TextNormal color={colors?.textColor} mb='12px'>
				{data?.category}
			</TextNormal>
			<CommonTitle fontSize='2rem'>{data?.name}</CommonTitle>
			<Flex my='12px' alignItems='center' gap={4}>
				<Rating ratingValue={data?.rating} />
				<TextNormal
					color={colors?.textColor}
				>{`${data?.totalReview} reviews`}</TextNormal>
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
