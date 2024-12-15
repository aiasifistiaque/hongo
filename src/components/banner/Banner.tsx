'use client';

import { BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useContent } from '@/hooks';
import {
	BgImage,
	HeroCTA,
	HeroSubTitle,
	HeroTitle,
	HongoHeroContainer,
	getAlignment,
} from '@/library';
import { padding } from '@/lib/config/constants';

type BannerProps = BoxProps & {
	data: any;
};

const PADDING_X = { base: padding.layoutPadding_X_Mobile, lg: padding.layoutPadding_X };

const Banner: FC<BannerProps> = ({ data, ...props }) => {
	const { content } = useContent();

	return (
		<BgImage
			src={content?.hero?.image}
			minH='90vh'
			justify={getAlignment(content?.hero?.align)}>
			<HongoHeroContainer
				px={PADDING_X}
				content={content}>
				<HeroSubTitle />
				<HeroTitle />
				<HeroCTA />
			</HongoHeroContainer>
		</BgImage>
	);
};

export default Banner;
