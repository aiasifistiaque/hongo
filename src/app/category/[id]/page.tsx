'use client';
import {
	CommonTitle,
	PageLayout,
	Pagination,
	SectionPadding,
	TextNormal,
} from '@/components';

import GetProducts from '@/components/home/products/GetProducts';
import { useColors } from '@/hooks';
import { useAppSelector } from '@/library';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Box, Flex, Select } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const colors = useColors();
	const [sort, setSort] = useState('-createdAt');
	const { id } = useParams<{ id: string }>();
	const { data: apiData, isLoading } = useGetStoreQuery({});

	const { page, limit, search } = useAppSelector(state => state.table);
	const { data: catData, isFetching: catFetching } = useGetByIdQuery(
		{
			path: 'categories',
			id: id,
		},
		{ skip: !id }
	);

	const { data, isFetching, refetch } = useGetAllQuery(
		{
			path: 'products',
			sort,
			page,
			limit,
			filters: {
				category_in: id,
			},
		},
		{ skip: !id }
	);

	return (
		<PageLayout apiData={apiData} isLoading={isLoading}>
			{/* Slider */}
			{/* <SmallBanner bannarData={catData?.name} /> */}
			{/* Slider Bottom */}
			<SectionPadding py='3rem' bg={colors?.bg}>
				<Flex justifyContent='space-between'>
					<Box>
						<CommonTitle mb={2}>{catData?.name}</CommonTitle>
						<TextNormal
							fontSize={{ base: '1rem', md: '1.4rem' }}
						>{`Explore products from category ${catData?.name}`}</TextNormal>
					</Box>

					<Box>
						<Select
							value={sort}
							placeholder='Sort by'
							onChange={e => {
								setSort(e.target.value);
							}}
						>
							<option value='-price'>Price (High-Low)</option>
							<option value='price'>Price (Low-High)</option>
							<option value='name'>Name (A-Z)</option>
							<option value='-name'>Price (Z-A)</option>
							<option value='-createdAt'>Newest</option>
						</Select>
					</Box>
				</Flex>
			</SectionPadding>
			<SectionPadding pb='3rem' bg={colors?.bg}>
				<GetProducts data={data} />
				<Box>
					<Pagination
						data={data}
						basic={apiData?.basic}
						content={apiData?.content}
						justifyContent='flex-end'
					/>
				</Box>
			</SectionPadding>
		</PageLayout>
	);
}
