'use clinet';
import { TextBold } from '@/components/utils';
import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { useContent, useGetItemByName } from '@/hooks';
import { useGetAllQuery } from '@/store/services/commonApi';

const FLEX_WI = { base: '12rem', xl: '14rem' };

type CategoriesCartProps = FlexProps & {
	data: any;
};

const CategoriesCart: FC<CategoriesCartProps> = ({ data, ...props }) => {
	const { name, image } = useGetItemByName({ id: data?.id, path: data?.type });
	const { content } = useContent();

	const href =
		data?.type === 'categories' ? `/category/${data?.id}` : `/category/collection/${data?.id}`;

	return (
		<Link href={href}>
			<Flex
				alignItems='center'
				flexDir='column'
				{...props}>
				<Flex
					w={FLEX_WI}
					h={FLEX_WI}
					mb='16px'>
					<Image
						w='full'
						h='full'
						objectFit='cover'
						src={image}
						alt='Categories Image'
						borderRadius={content?.collections?.borderRadius || 4}
					/>
				</Flex>
				<TextBold
					textTransform='uppercase'
					fontSize='1.2rem'>
					{name}
				</TextBold>
			</Flex>
		</Link>
	);
};

export default CategoriesCart;
