import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ContainerProps = FlexProps & {
	children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Center
			w={{ base: 'auto', lg: '58rem' }}
			h='auto'
			mx='auto'
			borderRadius='4px'
			bg={colors?.cardBg}
			overflow='hidden'
			{...props}>
			{children}
		</Center>
	);
};

export default Container;
