'use client';
import { CommonTitle, PageLayout, Products, SectionPadding, TextNormal } from '@/components';

import SmallBanner from '@/components/banner/SmallBanner';
import GetProducts from '@/components/home/products/GetProducts';
import { useColors } from '@/hooks';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { useParams } from 'next/navigation';

export default function Home() {
	const colors = useColors();
	const { id } = useParams<{ id: string }>();

	const { data: catData, isFetching: catFetching } = useGetByIdQuery(
		{
			path: 'categories',
			id: id,
		},
		{ skip: !id }
	);

	const { data, isFetching } = useGetAllQuery({
		path: 'products',
		limit: 20,
		filter: {
			category_in: id,
		},
	});

	if (!data) return null;

	return (
		<PageLayout isLoading={false}>
			{/* Slider */}
			{/* <SmallBanner bannarData={catData?.name} /> */}
			{/* Slider Bottom */}
			<SectionPadding
				py='3rem'
				bg={colors?.bg}>
				<CommonTitle mb={2}>{catData?.name}</CommonTitle>
				<TextNormal>{`Explore products from category ${catData?.name}`}</TextNormal>
			</SectionPadding>
			<SectionPadding
				pb='3rem'
				bg={colors?.bg}>
				<GetProducts data={data} />
			</SectionPadding>
		</PageLayout>
	);
}
