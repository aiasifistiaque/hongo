'use client';

import React from 'react';
import { getAlignment } from '@/library';
import { useContent } from '@/hooks';
import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const HeroCTA = () => {
	const { content } = useContent();
	return (
		<Flex
			gap='4'
			align={getAlignment(content?.hero?.align)}>
			<Link href={content?.hero?.href || '#'}>
				<Button
					fontSize={content?.hero?.btnFontSize ? `${content?.hero?.btnFontSize}px` : '0'}
					h={content?.hero?.btnHeight ? `${content?.hero?.btnHeight}px` : '44px'}
					w={content?.hero?.btnWidth ? `${content?.hero?.btnWidth}px` : '100px'}
					color={content?.hero?.btnTextColor}
					bg={content?.hero?.btnColor}
					borderRadius={content?.hero?.btnRadius ? `${content?.hero?.btnRadius}px` : '0'}
					_hover={{
						bg: content?.hero?.btnHoverColor,
						color: content?.hero?.btnHoverTextColor,
						borderColor: content?.hero?.btnHoverBorderColor,
					}}
					p='16px 18px'>
					{content?.hero?.btnText}
				</Button>
			</Link>
		</Flex>
	);
};

export default HeroCTA;
