'use client';
import {
	PageLayout,
	SliderBottom,
	Banner,
	Categories,
	SectionPadding,
	Products,
} from '@/components';
import Footer from '@/components/footer/Footer';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';

export default function Home() {
	const { homePageServices, products, footer } = data;
	const { colors } = useCustomStyle();

	return (
		<PageLayout>
			{/* Slider */}
			<Banner data={data?.bannerData} />
			{/* Slider Bottom */}
			<SectionPadding bg={colors?.secondary}>
				<SliderBottom data={homePageServices} />
			</SectionPadding>

			<SectionPadding bg={colors?.secondary}>
				<Categories data={data?.categories} />
			</SectionPadding>

			{/* Products*/}
			<SectionPadding bg={colors?.secondary}>
				<Products data={products} />
			</SectionPadding>
			<SectionPadding bg={colors?.footer}>
				<Footer data={footer}/>
			</SectionPadding>
		</PageLayout>
	);
}
