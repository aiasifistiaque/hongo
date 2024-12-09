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

export default function Home() {
	const {
		homePageServices,
		products,
		categoriesData,
		sportsCollection,
		winterCollection,
	} = data;
	const { colors } = useCustomStyle();

	return (
		<PageLayout>
			{/* Slider */}
			<Banner data={data?.bannerData} />
			{/* Slider Bottom */}
			<SectionWrapper>
				<SliderBottom data={homePageServices} />
			</SectionWrapper>

			<SectionWrapper>
				<Categories data={categoriesData?.doc} />
			</SectionWrapper>

			<SectionPadding py={'3rem'} bg={colors?.secondary}>
				<CommonTitle mb='4rem'>Products</CommonTitle>
				<Products data={products?.doc} />
			</SectionPadding>

			<SectionWrapper>
				<ProductCarousel
					title={'Sports Collection'}
					data={sportsCollection?.doc}
				/>
			</SectionWrapper>

			<SectionWrapper>
				<ProductCarousel
					title='Winter Collection'
					data={winterCollection?.doc}
				/>
			</SectionWrapper>
		</PageLayout>
	);
}

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	const { colors } = useCustomStyle();
	return <SectionPadding bg={colors?.secondary}>{children}</SectionPadding>;
};
