'use client';
import {
	CommonTitle,
	PageLayout,
	Products,
	SectionPadding,
	TextNormal,
} from '@/components';

import SmallBanner from '@/components/banner/SmallBanner';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';

export default function Home() {
	const { colors } = useCustomStyle();

	const categoryData = data?.productsByCategory?.data;
	const categoryName = categoryData?.doc[0]?.category?.name;
	return (
		<PageLayout>
			{/* Slider */}
			<SmallBanner bannarData={data?.productsByCategory?.banner} />
			{/* Slider Bottom */}
			<SectionPadding py='3rem' bg={colors?.secondary}>
				<CommonTitle mb={2}>{categoryName}</CommonTitle>
				<TextNormal>
					{`Explore products from category ${categoryName}`}
				</TextNormal>
			</SectionPadding>
			<SectionPadding py='3rem' bg={colors?.secondary}>
				<Products data={data?.productsByCategory?.data?.doc} />
			</SectionPadding>
		</PageLayout>
	);
}
