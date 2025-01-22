/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import SearchInput from '../header/header-components/SearchInput';
import { searchInputWidth } from '@/lib/config/constants';
import { useColors, useContent } from '@/hooks';

type FooterProps = BoxProps & {
	data: any;
};

const Footer: FC<FooterProps> = ({ data, ...props }) => {
	const colors = useColors();
	const { content } = useContent();
	// const { bgColor, fgColor } = content?.footer;
	const bgColor = content?.footer?.bgColor;
	const fgColor = content?.footer?.fgColor;

	return (
		<Box bg={bgColor} color={fgColor} py='4rem' {...props}>
			<Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
				<Item>
					<Contact />
				</Item>
				<Item>
					<QuickLinks data={data?.pages} />
				</Item>
				<Item>
					<Box w='full' h='auto'>
						<SearchInput width={searchInputWidth} />
					</Box>
				</Item>
			</Grid>
		</Box>
	);
};

const Item = ({ children }: { children: React.ReactNode }) => (
	<GridItem w='100%' h='auto'>
		{children}
	</GridItem>
);

export default Footer;
