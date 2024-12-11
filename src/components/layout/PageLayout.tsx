'use client';
import { Header, SectionPadding, TopHeader } from '@/components';
import React, { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import { Box, Center, Spinner } from '@chakra-ui/react';
import Footer from '../footer/Footer';
import { useColors } from '@/hooks';
type LayoutProps = {
	children?: ReactNode;
	isLoading?: boolean;
};

const PageLayout: FC<LayoutProps> = ({ children, isLoading = false }) => {
	const { topHeader, footer } = data;
	const color = useColors();

	if (isLoading)
		return (
			<Center
				w='100vw'
				flex={1}
				h='100vh'>
				<Spinner size='xl' />
			</Center>
		);

	return (
		<>
			<TopHeader data={topHeader} />
			<Header />
			<Box minH={'80vh'}>{children}</Box>
			<SectionPadding bg={color.footerBg}>
				<Footer data={footer} />
			</SectionPadding>
		</>
	);
};

export default PageLayout;
