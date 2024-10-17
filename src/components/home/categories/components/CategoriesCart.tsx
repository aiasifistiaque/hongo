import { TextBold } from '@/components/utils';
import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type CategoriesCartProps = FlexProps & {
	data?: {
		imgSrc: string;
		name: string;
	};
};

const CategoriesCart: FC<CategoriesCartProps> = ({ data, ...props }) => {
	return (
		<Flex alignItems='center' flexDir='column' {...props}>
			<Flex
				w={{ base: '12rem', xl: '14rem' }}
				h={{ base: '12rem', xl: '14rem' }}
				mb='16px'
			>
				<Image
					w='full'
					h='full'
					objectFit='cover'
					src={data?.imgSrc}
					alt='Categories Image'
					borderRadius='50%'
				/>
			</Flex>
			<TextBold textTransform='uppercase' fontSize='1.2rem'>
				{data?.name}
			</TextBold>
		</Flex>
	);
};

export default CategoriesCart;
