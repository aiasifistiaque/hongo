'use client';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '../utils';
import useCustomStyles from '@/hooks/useCustomStyle';
import { useColors, useContent } from '@/hooks';
type TopHeaderProps = {
	data: {
		textFirst: string;
		textSecond: string;
	};
};

const TopHeader: FC<TopHeaderProps> = ({ data }) => {
	const colors = useColors();
	const { content } = useContent();

	return (
		<Box
			display={{ base: 'none', lg: 'block' }}
			py='8px'
			w='full'
			h='auto'
			bg={colors?.bannerBg}>
			<Flex
				color={colors?.bannerFg}
				gap='30px'
				justifyContent='center'>
				<TextNormal color={colors?.bannerFg}>{content?.banner?.leftText}</TextNormal>
				<TextNormal color={colors?.bannerFg}>|</TextNormal>
				<TextNormal color={colors?.bannerFg}>{content?.banner?.rightText}</TextNormal>
			</Flex>
		</Box>
	);
};

export default TopHeader;
