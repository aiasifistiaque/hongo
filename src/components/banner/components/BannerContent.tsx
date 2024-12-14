import { CommonTitle, TextNormal, getAlignment } from '@/components';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import BannerButton from './BannerButton';
import { useContent } from '@/hooks';
import { padding } from '@/lib/config/constants';

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
	const { content } = useContent();
	return (
		<Flex
			w={{ base: '100%', lg: '80%' }}
			position='absolute'
			direction='column'
			align={getAlignment(content?.hero?.align)}
			color='white'
			textAlign={content?.hero?.align}
			p='1.5rem'
			px={{ base: padding.layoutPadding_X_Mobile, lg: padding.layoutPadding_X }}
			{...props}>
			<TextNormal
				textTransform='uppercase'
				color={content?.hero?.subTitleColor}
				lineHeight='1.5rem'
				mb='1rem'>
				{content?.hero?.subTitle}
			</TextNormal>
			<CommonTitle
				mb='3rem'
				fontSize={{ base: '2.6rem', lg: '5.6rem' }}
				lineHeight={{ base: '2.8rem', lg: '5rem' }}
				color={content?.hero?.titleColor}>
				{content?.hero?.title}
			</CommonTitle>
			<BannerButton
				btnLink={content?.hero?.href || '#'}
				btnText={content?.hero?.btnText}
			/>
		</Flex>
	);
};

export default BannerContent;
