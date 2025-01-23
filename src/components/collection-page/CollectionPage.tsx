'use client';
import {
	CollectionCard,
	CommonTitle,
	PageLayout,
	SectionPadding,
	TextNormal,
} from '@/components';
import SmallBanner from '@/components/banner/SmallBanner';
import { useColors, useContent } from '@/hooks';
import { useGetAllQuery } from '@/store/services/commonApi';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Box, Center, Flex, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';

const TEMPLATE_COLUMNS = {
	base: '1fr',
	sm: '1fr 1fr',
	md: 'repeat(3, 1fr)',
	lg: 'repeat(3, 1fr)',
	xl: 'repeat(4, 1fr)',
	'2xl': 'repeat(5, 1fr)',
};

const CollectionPage = () => {
	const { data, isFetching, isUninitialized, isError } = useGetAllQuery({
		path: 'categories',
		limit: 999,
		filters: {
			isActive: true,
		},
	});

	const { data: colData } = useGetAllQuery({
		path: 'collections',
		limit: 999,
		filters: {
			isActive: true,
		},
	});

	return (
		<SectionPadding>
			<Box py='4rem'>
				<CommonTitle
					fontSize={{ base: '1.5rem', md: '2rem', lg: '3.5rem' }}
					mb='1rem'
				>
					All Collections
				</CommonTitle>
				<TextNormal fontSize={{ base: '1rem', md: '1.5rem' }} mb='2rem'>
					Explore our collections
				</TextNormal>
				<Grid gridTemplateColumns={TEMPLATE_COLUMNS} gap={4}>
					{data?.doc?.map((item: any, i: number) => (
						<Link href={`/category/${item._id}`} key={i}>
							<CollectionCard type='categories' item={item} key={i} />
						</Link>
					))}
					{colData?.doc?.map((item: any, i: number) => (
						<Link href={`/category/collection/${item._id}`} key={i}>
							<CollectionCard type='collections' item={item} key={i} />
						</Link>
					))}
				</Grid>
			</Box>
		</SectionPadding>
	);
};

export default CollectionPage;
