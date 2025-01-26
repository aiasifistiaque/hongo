'use client';

import { Center, Flex, Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type TopHeaderProps = {
	data?: any;
	content?: any;
	basic: any;
};

const TopHeader: FC<TopHeaderProps> = ({ content, basic }) => {
	return (
		<Container content={content} basic={basic}>
			{content?.banner?.leftText && (
				<BannerText content={content} basic={basic}>
					{content?.banner?.leftText}
				</BannerText>
			)}
			{content?.banner?.leftText && content?.banner?.rightText && (
				<BannerText content={content} basic={basic}>
					|
				</BannerText>
			)}
			{content?.banner?.rightText && (
				<BannerText content={content} basic={basic}>
					{content?.banner?.rightText}
				</BannerText>
			)}
		</Container>
	);
};

const Container = ({
	children,
	content,
	basic,
}: {
	children: ReactNode;
	content: any;
	basic: any;
}) => {
	if (content?.banner?.hide) return null;

	return (
		<Center
			display={{ base: 'none', md: 'flex' }}
			py={`${content?.banner?.paddingY}px` || '8px'}
			w='full'
			h={content?.banner?.height || 'auto'}
			bg={content?.banner?.bgColor || basic?.primaryColor}
			color={content?.banner?.fgColor || 'white'}
			gap='30px'
		>
			{children}
		</Center>
	);
};

const BannerText = ({
	children,
	content,
	basic,
}: {
	children: ReactNode;
	content: any;
	basic: any;
}) => {
	return (
		<Text
			fontFamily={content?.banner?.fontFamily || basic?.primaryFont}
			color='inherit'
			fontSize={content?.banner?.fontSize || '1rem'}
			letterSpacing={content?.banner?.letterSpacing || 0}
			fontWeight={content?.banner?.fontWeight || '400'}
		>
			{children}
		</Text>
	);
};

export default TopHeader;
