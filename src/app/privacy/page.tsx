'use client';
import { PageLayout, SectionPadding, TextNormal } from '@/components';
import Quote from '@/components/about/Quote';
import SmallBanner from '@/components/banner/SmallBanner';
import PrivacyData from '@/components/privacy/PrivacyData';
import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { useGetStoreQuery } from '@/store/services/storeApi';

export default function Home() {
	const colors = useColors();
	const { data: apiData, isLoading } = useGetStoreQuery({});
	const privacy = data?.privacy;

	return (
		<PageLayout apiData={apiData} isLoading={isLoading}>
			{/* Slider */}
			<SmallBanner bannarData={data?.privacy?.banner} />
			{/* Slider Bottom */}
			<SectionPadding
				px={{ base: '1rem', sm: '2rem', md: '3rem', lg: '15rem', xl: '20rem' }}
				py='3rem'
				bg={colors?.bg}
			>
				<TextNormal
					fontWeight='600'
					fontSize={{ base: '2rem', lg: '3rem' }}
					mb='2rem'
				>
					Privacy Policy
				</TextNormal>
				<TextNormal mb='1.5rem'>{privacy?.overview}</TextNormal>
				<PrivacyData data={privacy?.collectData} />
				<PrivacyData data={privacy?.useData} />
				<PrivacyData data={privacy?.shareData} />
				<PrivacyData data={privacy?.cookies} />
				<PrivacyData data={privacy?.security} />
				<PrivacyData data={privacy?.rights} />

				<Quote>{privacy?.greetings}</Quote>
			</SectionPadding>
		</PageLayout>
	);
}
