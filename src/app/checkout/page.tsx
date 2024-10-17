'use client';
import { PageLayout, SectionPadding } from '@/components';
import { Box } from '@chakra-ui/react';
// import useCustomStyle from '@/hooks/useCustomStyle';

export default function Home() {
	// const { colors } = useCustomStyle();
	return (
		<PageLayout>
			<SectionPadding>
				<Box>Checkout</Box>
			</SectionPadding>
		</PageLayout>
	);
}
