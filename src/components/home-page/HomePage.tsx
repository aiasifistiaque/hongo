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
import { data } from '@/lib/config/data';
import { ReactNode } from 'react';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { useColors } from '@/hooks';
import { FlexProps } from '@chakra-ui/react';

const HomePage = () => {
	const { data: apiData, isLoading } = useGetStoreQuery({});
	if (isLoading || !apiData)
		return <PageLayout apiData={apiData} isLoading={isLoading} />;

	return (
		<PageLayout apiData={apiData} isLoading={isLoading || !apiData}>
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
				<CommonTitle mb='2rem'>Products</CommonTitle>
				<Products />
			</SectionPadding>

			{apiData?.content?.productList?.map((item: any, i: number) => (
				<SectionWrapper key={i}>
					<ProductCarousel item={item} />
				</SectionWrapper>
			))}
		</PageLayout>
	);
};

export default HomePage;

const SectionWrapper = ({
	children,
	...props
}: FlexProps & { children: ReactNode }) => {
	const colors = useColors();
	return (
		<SectionPadding
			bg={colors?.bg}
			borderBottomWidth={0}
			borderBottomColor={colors?.border}
			{...props}
		>
			{children}
		</SectionPadding>
	);
};
