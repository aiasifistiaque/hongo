import { Header, SectionPadding, TopHeader } from '@/components';
import React, { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import { Box } from '@chakra-ui/react';
import Footer from '../footer/Footer';
import useCustomStyle from '@/hooks/useCustomStyle';
type LayoutProps = {
	children?: ReactNode;
};

const PageLayout: FC<LayoutProps> = ({ children }) => {
	const { topHeader, footer } = data;
	const { colors } = useCustomStyle();
	return (
		<>
			<TopHeader data={topHeader} />
			<Header />
			<Box minH={'80vh'}>{children}</Box>
			<SectionPadding bg={colors.footer}>
				<Footer data={footer} />
			</SectionPadding>
		</>
	);
};

export default PageLayout;
