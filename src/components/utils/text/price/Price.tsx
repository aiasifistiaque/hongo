import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type NormalTextProps = TextProps & {
	children: string | number;
};

const NormalText: FC<NormalTextProps> = ({ children, ...props }) => {
	return (
		<Text
			fontFamily='inter'
			color='black'
			fontWeight='400'
			fontSize='1rem'
			{...props}
		>
			{children}
		</Text>
	);
};

export default NormalText;
