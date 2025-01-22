import React, { FC } from 'react';
import { CommonTitle } from '@/components';
import { SIZES } from '@/lib/config/constants';
import { TextProps } from '@chakra-ui/react';

type TitleProps = TextProps & {
	children: any;
};

const Title: FC<TitleProps> = ({ children }) => {
	const responsive = SIZES?.collection;
	return (
		<CommonTitle
			fontSize={responsive?.title}
			mb={{ base: '2rem', md: '3rem' }}
			pr='5rem'
			lineHeight={{ base: '2.5rem', sm: '3.5rem' }}
		>
			{children}
		</CommonTitle>
	);
};

export default Title;
