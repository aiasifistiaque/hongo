'use client';

import { Center, Flex, Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type TopHeaderProps = {
	data?: any;
};

import { useContent } from '@/library';

const TopHeader: FC<TopHeaderProps> = () => {
	const { content } = useContent();

	return (
		<Container>
			{content?.banner?.leftText && <BannerText>{content?.banner?.leftText}</BannerText>}
			{content?.banner?.leftText && content?.banner?.rightText && <BannerText>|</BannerText>}
			{content?.banner?.rightText && <BannerText>{content?.banner?.rightText}</BannerText>}
		</Container>
	);
};

const Container = ({ children }: { children: ReactNode }) => {
	const { content, basic } = useContent();

	if (content?.banner?.hide) return null;

	return (
		<Center
			display={{ base: 'none', md: 'flex' }}
			py={`${content?.banner?.paddingY}px` || '8px'}
			w='full'
			h={content?.banner?.height || 'auto'}
			bg={content?.banner?.bgColor || basic?.primaryColor}
			color={content?.banner?.fgColor || 'white'}
			gap='30px'>
			{children}
		</Center>
	);
};

const BannerText = ({ children }: { children: ReactNode }) => {
	const { content, basic } = useContent();

	return (
		<Text
			fontFamily={content?.banner?.fontFamily || basic?.primaryFont}
			color='inherit'
			fontSize={content?.banner?.fontSize || '1rem'}
			letterSpacing={content?.banner?.letterSpacing || 0}
			fontWeight={content?.banner?.fontWeight || '400'}>
			{children}
		</Text>
	);
};

export default TopHeader;
