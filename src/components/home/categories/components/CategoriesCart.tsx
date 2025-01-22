'use clinet';
import { TextBold, TextNormal } from '@/components/utils';
import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { useContent, useGetItemByName } from '@/hooks';
import { useGetAllQuery } from '@/store/services/commonApi';
import { SIZES } from '@/lib/config/constants';

const FLEX_WI = { base: '9rem', sm: '10rem', lg: '12rem', xl: '14rem' };

type CategoriesCartProps = FlexProps & {
	data: any;
};

const CategoriesCart: FC<CategoriesCartProps> = ({ data, ...props }) => {
	const { name, image } = useGetItemByName({ id: data?.id, path: data?.type });
	const { content } = useContent();

	const href =
		data?.type === 'categories'
			? `/category/${data?.id}`
			: `/category/collection/${data?.id}`;

	const responsive = SIZES?.collection;

	return (
		<Link href={'#'}>
			<Flex alignItems='center' flexDir='column' {...props}>
				<Flex w={FLEX_WI} h={FLEX_WI} mb='16px'>
					<Image
						w='full'
						h='full'
						objectFit='cover'
						src={image}
						alt='Categories Image'
						borderRadius={content?.collections?.borderRadius || 4}
					/>
				</Flex>
				<TextNormal textTransform='uppercase' fontSize={responsive?.name}>
					{name}
				</TextNormal>
			</Flex>
		</Link>
	);
};

export default CategoriesCart;
