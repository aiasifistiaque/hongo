'use client';
import useCustomFont from '@/hooks/useCustomFont';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextNormalProps = TextProps & {
	children?: string | number;
};

const TextNormal: FC<TextNormalProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	const { fonts } = useCustomFont();
	return (
		<Text
			fontFamily={fonts.inter}
			fontSize='1rem'
			fontWeight='400'
			color={colors?.titleColor}
			{...props}
		>
			{children}
		</Text>
	);
};

export default TextNormal;
