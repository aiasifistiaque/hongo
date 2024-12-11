'use client';
import { PageLayout, SectionPadding, TextNormal } from '@/components';
import SmallBanner from '@/components/banner/SmallBanner';
import FaqItem from '@/components/faq/FaqItem';
import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { Accordion } from '@chakra-ui/react';

export default function Home() {
	const colors = useColors();
	return (
		<PageLayout>
			{/* Slider */}
			<SmallBanner bannarData={data?.faq?.banner} />
			{/* Slider Bottom */}
			<SectionPadding
				px={{ base: '1rem', sm: '2rem', md: '3rem', lg: '15rem', xl: '20rem' }}
				py='4rem'
				bg={colors?.bg}>
				<TextNormal
					textAlign='center'
					fontWeight='600'
					fontSize={{ base: '1.5rem', lg: '3rem' }}
					mb='3rem'>
					Frequently Asked Questions
				</TextNormal>
				<Accordion allowToggle>
					{data?.faq?.data?.map((item, i) => (
						<FaqItem
							key={i}
							data={item}
						/>
					))}
				</Accordion>
			</SectionPadding>
		</PageLayout>
	);
}
