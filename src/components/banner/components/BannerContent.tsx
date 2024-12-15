import { getAlignment } from '@/components';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useContent } from '@/hooks';
import { padding } from '@/lib/config/constants';
import { HeroCTA, HeroSubTitle, HeroTitle } from '@/library';

type BannerContentProps = FlexProps & {
	data: {
		label: string;
		title: string;
		btn: {
			text: string;
			link: string;
		};
	};
};

const BannerContent: FC<BannerContentProps> = ({ data, ...props }) => {
	const { content, basic } = useContent();
	return (
		<Flex
			w={{ base: '100%', lg: '80%' }}
			position='absolute'
			direction='column'
			align={getAlignment(content?.hero?.align)}
			textAlign={content?.hero?.align}
			p='1.5rem'
			px={{ base: padding.layoutPadding_X_Mobile, lg: padding.layoutPadding_X }}
			{...props}>
			<HeroSubTitle />
			<HeroTitle />
			<HeroCTA />
		</Flex>
	);
};

export default BannerContent;
