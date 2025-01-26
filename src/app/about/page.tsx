'use client';

import { PageLayout, SectionPadding, TextNormal } from '@/components';
import Content from '@/components/about/Content';
import Quote from '@/components/about/Quote';
import SmallBanner from '@/components/banner/SmallBanner';
import { useColors, useContent } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { useGetStoreQuery } from '@/store/services/storeApi';

const PX = { base: '1rem', sm: '2rem', md: '3rem', lg: '15rem', xl: '20rem' };

export default function About() {
	const colors = useColors();
	const { data: apiData, isLoading } = useGetStoreQuery({});
	return (
		<PageLayout apiData={apiData} isLoading={isLoading}>
			{/* Slider */}
			<SmallBanner image={apiData?.content?.aboutPage?.image}>
				{apiData?.content?.aboutPage?.title}
			</SmallBanner>
			{/* Slider Bottom */}
			<SectionPadding px={PX} py='3rem' bg={colors?.bg}>
				{/* <TextNormal
					fontWeight='600'
					fontSize='3rem'
					mb='2rem'>
					{content?.aboutPage?.title}
				</TextNormal> */}
				<div
					dangerouslySetInnerHTML={{
						__html: apiData?.content?.aboutPage?.description || '',
					}}
				/>
				{/* <Content data={data?.about?.mission} />
				<Content data={data?.about?.productRange} />
				<Content data={data?.about?.productRange} />
				<Content data={data?.about?.customerCentric} />
				<Content data={data?.about?.trustedQuality} />
				<Content data={data?.about?.seamlessShopping} />
				<Content data={data?.about?.reliableDelivery} />
				<Content data={data?.about?.reliableDelivery} />
				<Content data={data?.about?.sustainablePractice} />
				<Content data={data?.about?.community} />
				<Quote>{data?.about?.greetings}</Quote> */}
			</SectionPadding>
		</PageLayout>
	);
}
