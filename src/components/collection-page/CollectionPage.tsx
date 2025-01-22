'use client';
import {
	CollectionCard,
	CommonTitle,
	PageLayout,
	TextNormal,
} from '@/components';
import SmallBanner from '@/components/banner/SmallBanner';
import { useColors, useContent } from '@/hooks';
import { useGetAllQuery } from '@/store/services/commonApi';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Box, Center, Flex, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';

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
		<Grid
			gridTemplateColumns={{
				base: '1fr 1fr',
				md: 'repeat(3, 1fr)',
				xl: 'repeat(4, 1fr)',
			}}
		>
			{data?.doc?.map((item: any, i: number) => (
				<CollectionCard type={item?.type} id={item?.id} key={i} />
			))}
			{colData?.doc?.map((item: any, i: number) => (
				<CollectionCard type={item?.type} id={item?.id} key={i} />
			))}
		</Grid>
	);
};

export default CollectionPage;
