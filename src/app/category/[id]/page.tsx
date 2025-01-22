'use client';
import {
	CommonTitle,
	PageLayout,
	Products,
	SectionPadding,
	TextNormal,
} from '@/components';

import SmallBanner from '@/components/banner/SmallBanner';
import GetProducts from '@/components/home/products/GetProducts';
import { useColors } from '@/hooks';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { Box, Flex, Select } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const colors = useColors();
	const [sort, setSort] = useState('-createdAt');
	const { id } = useParams<{ id: string }>();

	const { data: catData, isFetching: catFetching } = useGetByIdQuery(
		{
			path: 'categories',
			id: id,
		},
		{ skip: !id }
	);

	console.log('CatData', catData);

	const { data, isFetching } = useGetAllQuery(
		{
			path: 'products',
			sort,
			limit: 20,
			filters: {
				category_in: id,
			},
		},
		{ skip: !id }
	);

	return (
		<PageLayout isLoading={false}>
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
							value='sort'
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
			</SectionPadding>
		</PageLayout>
	);
}
