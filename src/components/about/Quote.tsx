import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type QuoteProps = TextProps & {
	children?: string;
};
// comment
const Quote: FC<QuoteProps> = ({ children, ...props }) => {
	const { fonts } = useCustomStyle();
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
