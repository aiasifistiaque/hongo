import useCustomFont from '@/hooks/useCustomFont';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type QuoteProps = TextProps & {
	children?: string;
};

const Quote: FC<QuoteProps> = ({ children, ...props }) => {
	const { fonts } = useCustomFont();
	return (
		<Text
			py='3rem'
			textAlign='center'
			fontWeight='600'
			fontSize={{ base: '1.2rem', lg: '2rem' }}
			fontFamily={fonts.inter}
			{...props}
		>
			{' '}
			{`“`}
			{children}
			{`”`}
		</Text>
	);
};

export default Quote;
