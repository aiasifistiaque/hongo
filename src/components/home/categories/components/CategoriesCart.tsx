/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextBold } from '@/components/utils';
import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

const FLEX_WI = { base: '12rem', xl: '14rem' };

type CategoriesCartProps = FlexProps & {
	data: any;
};

const CategoriesCart: FC<CategoriesCartProps> = ({ data, ...props }) => {
	return (
		<Flex alignItems='center' flexDir='column' {...props}>
			<Flex w={FLEX_WI} h={FLEX_WI} mb='16px'>
				<Image
					w='full'
					h='full'
					objectFit='cover'
					src={data?.image}
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
