'use client';
import {
	CollectionCard,
	CollectionPage,
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

const page = () => {
	const { data: apiData, isLoading } = useGetStoreQuery({});
	if (isLoading || !apiData) return <PageLayout isLoading={true} />;

	const content = apiData?.content;
	const collectionPage = apiData?.content?.collectionPage;

	return (
		<PageLayout isLoading={isLoading || !apiData}>
			<SmallBanner image={collectionPage?.image}>
				{collectionPage?.title || 'All Collections'}
			</SmallBanner>

			<CollectionPage />
		</PageLayout>
	);
};

export default page;
