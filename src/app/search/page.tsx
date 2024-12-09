'use client';
import {
	CommonTitle,
	PageLayout,
	Products,
	SectionPadding,
} from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import React, { ReactNode } from 'react';
// import { useSearchParams } from 'next/navigation';

const FONT_SIZE = { base: '1rem', md: '2rem', lg: '2.8rem' };

const SearchPage = () => {
	// const searchParams = useSearchParams();
	// const searchValue = searchParams.get('value');

	const { productsBySearch } = data;
	return (
		<PageLayout>
			<SectionWrapper>
				<CommonTitle
					textAlign='center'
					fontSize={FONT_SIZE}
				>{`Search: ${6} result found for adfdf`}</CommonTitle>
			</SectionWrapper>
			<SectionWrapper>
				<Products data={productsBySearch?.doc} />
			</SectionWrapper>
		</PageLayout>
	);
};

export default SearchPage;

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	const { colors } = useCustomStyle();
	return (
		<SectionPadding py='2rem' bg={colors?.secondary}>
			{children}
		</SectionPadding>
	);
};
