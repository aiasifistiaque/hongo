'use client';

import { BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import Container from './components/Container';
import BannerImage from './components/BannerImage';
import BannerContent from './components/BannerContent';
import { useContent } from '@/hooks';
import { getAlignment } from '@/components';

// import { HeaderIcon } from '@/components';
type BannerProps = BoxProps & {
	data: any;
};

const Banner: FC<BannerProps> = ({ data, ...props }) => {
	const { content } = useContent();

	return (
		<Container
			{...props}
			align={getAlignment(content?.hero?.align)}>
			<BannerImage imgSrc={content?.hero?.image} />
			<BannerContent data={data} />
		</Container>
	);
};

export default Banner;
