'use client';

import {
	PageLayout,
	SliderBottom,
	Banner,
	Categories,
	SectionPadding,
	Products,
	CommonTitle,
} from '@/components';
import { ProductCarousel } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { ReactNode } from 'react';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { useColors } from '@/hooks';
import { FlexProps } from '@chakra-ui/react';

export default function Home() {
	const { homePageServices, products, categoriesData, sportsCollection, winterCollection } = data;

	const { data: apiData, isLoading } = useGetStoreQuery({});

	if (isLoading || !apiData) return <PageLayout isLoading={true} />;

	return (
		<PageLayout isLoading={isLoading || !apiData}>
			{/* Slider */}
			<Banner data={data?.bannerData} />
			{/* Slider Bottom */}
			<SectionWrapper>
				<SliderBottom data={apiData?.content?.services} />
			</SectionWrapper>

			<SectionWrapper>
				<Categories data={apiData?.content?.collections} />
			</SectionWrapper>

			<SectionPadding py={'3rem'}>
				<CommonTitle mb='4rem'>Products</CommonTitle>
				<Products />
			</SectionPadding>

			{apiData?.content?.productList?.map((item: any, i: number) => (
				<SectionWrapper key={i}>
					<ProductCarousel item={item} />
				</SectionWrapper>
			))}
			{/* 
			<SectionWrapper>
				<ProductCarousel
					title={'Sports Collection'}
					data={sportsCollection?.doc}
				/>
			</SectionWrapper>

			<SectionWrapper borderBottomWidth={0}>
				<ProductCarousel
					title='Winter Collection'
					data={winterCollection?.doc}
				/>
			</SectionWrapper> */}
		</PageLayout>
	);
}

const SectionWrapper = ({ children, ...props }: FlexProps & { children: ReactNode }) => {
	const colors = useColors();
	return (
		<SectionPadding
			bg={colors?.bg}
			borderBottomWidth={0}
			borderBottomColor={colors?.border}>
			{children}
		</SectionPadding>
	);
};
