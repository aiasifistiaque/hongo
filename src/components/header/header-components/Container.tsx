import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ContainerProps = BoxProps & {
	children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Box
			w='full'
			h='80px'
			bg={colors.secondary}
			borderBottom={`1px solid ${colors?.lightPrimary}`}
			py='.5rem'
			{...props}
		>
			{children}
		</Box>
	);
};

export default Container;
