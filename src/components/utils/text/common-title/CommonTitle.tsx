import { useFont } from '@/hooks';
import useCustomFont from '@/hooks/useCustomFont';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CommonTitleProps = TextProps & {
	children: string | number;
};

const CommonTitle: FC<CommonTitleProps> = ({ children, ...props }) => {
	const { fonts } = useCustomFont();
	const { primaryFont } = useFont();

	return (
		<Text
			fontFamily={primaryFont}
			fontStyle='normal'
			fontWeight='500'
			fontSize='3.5rem'
			lineHeight='3.5rem'
			{...props}>
			{children}
		</Text>
	);
};

export default CommonTitle;
