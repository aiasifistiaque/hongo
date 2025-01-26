/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	FormField,
	OrderSummary,
	PageLayout,
	SectionPadding,
	TextNormal,
} from '@/components';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import { addressFields } from '@/lib/config/data';
import { useState } from 'react';
import { AddressTypes } from '@/lib/types/AddressTypes';
import CheckoutPage from '@/components/checkout/Checkout';
import { useContent } from '@/hooks';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Checkout } from '@/components/checkout-page';
// import useCustomStyle from '@/hooks/useCustomStyle';

// const PX = { base: '1rem', sm: '2rem', md: '3rem', lg: '5rem', xl: '20rem' };

export default function Home() {
	const { data, isLoading } = useGetStoreQuery({});

	return (
		<PageLayout isLoading={isLoading}>
			<SectionPadding py={12} pb={32}>
				<Checkout
					content={data?.content}
					basic={data?.basic}
					storeId={data?.shop?.id}
				/>
			</SectionPadding>
		</PageLayout>
	);
}
