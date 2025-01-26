'use client';
import { Header, SectionPadding, TopHeader } from '@/components';
import React, { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import { Box, Center, Spinner } from '@chakra-ui/react';
import Footer from '../footer/Footer';
import { useColors, useContent } from '@/hooks';
type LayoutProps = {
	children?: ReactNode;
	isLoading?: boolean;
	apiData: {
		basic: any;
		content: any;
	};
};

const PageLayout: FC<LayoutProps> = ({ children, isLoading, apiData }) => {
	if (isLoading)
		return (
			<Center w='100vw' flex={1} h='100vh'>
				<Spinner size='xl' />
			</Center>
		);
	const { topHeader, footer } = data;
	const color = useColors();
	const { basic, content } = apiData;
	const bgColor = content?.footer?.bgColor;

	return (
		<>
			<TopHeader content={content} basic={basic} data={topHeader} />
			<Header basic={basic} content={content} />

			<Box minH={'80vh'}>{children}</Box>
			<SectionPadding bg={bgColor}>
				<Footer apiData={apiData} data={footer} />
			</SectionPadding>
		</>
	);
};

export default PageLayout;
