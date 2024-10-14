'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextBoldProps = TextProps & {
	children?: string;
};

const TextBold: FC<TextBoldProps> = ({ children, ...props }) => {
	const { colors, fonts } = useCustomStyle();
	return (
		<Text
			fontFamily={fonts.inter}
			fontSize='1rem'
			fontWeight='600'
			color={colors?.titleColor}
			{...props}
		>
			{children}
		</Text>
	);
};

export default TextBold;
