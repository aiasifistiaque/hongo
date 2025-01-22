import { TextNormal, Icon } from '@/components';
import { useColors, useContent, useFont } from '@/hooks';
import { Box, BoxProps, Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';

import React, { FC } from 'react';

type LogoImageProps = FlexProps & {
	image: string;
};

const LogoImage: FC<LogoImageProps> = ({ image, ...props }) => {
	return (
		<Flex
			{...props}
			w='full'
			h='full'
			alignItems='center'
			justifyContent={{ base: 'center', md: 'flex-start' }}
			{...props}
		>
			<Link href='/'>
				<Image
					w='auto'
					h={{ base: '3.5rem', md: '4rem' }}
					objectFit='contain'
					src={image || ''}
					alt='Logo Image'
				/>
			</Link>
		</Flex>
	);
};

export default LogoImage;
