'use client';

import { CommonTitle, PageLayout, Products, SectionPadding } from '@/components';
import React, { ReactNode } from 'react';
import { useColors } from '@/hooks';
import { useParams } from 'next/navigation';

const FONT_SIZE = { base: '1rem', md: '2rem', lg: '2.8rem' };

const SearchPage = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<PageLayout isLoading={false}>
			<SectionWrapper>
				<CommonTitle
					textAlign='center'
					fontSize={FONT_SIZE}>{`Search: Results found for ${id}`}</CommonTitle>
			</SectionWrapper>
			<SectionWrapper>
				<Products search={id} />
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
