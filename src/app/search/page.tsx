'use client';
import { CommonTitle, PageLayout, Products, SectionPadding } from '@/components';
import { data } from '@/lib/config/data';
import React, { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { useColors } from '@/hooks';

const FONT_SIZE = { base: '1rem', md: '2rem', lg: '2.8rem' };

const SearchPage = () => {
	const { productsBySearch } = data;
	return (
		<PageLayout isLoading={false}>
			<SectionWrapper>
				<CommonTitle
					textAlign='center'
					fontSize={FONT_SIZE}>{`Search: ${6} result found for adfdf`}</CommonTitle>
			</SectionWrapper>
			<SectionWrapper>
				<Products search={''} />
			</SectionWrapper>
		</PageLayout>
	);
};

export default SearchPage;

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	const colors = useColors();
	return (
		<SectionPadding
			py='2rem'
			bg={colors?.bg}>
			{children}
		</SectionPadding>
	);
};
