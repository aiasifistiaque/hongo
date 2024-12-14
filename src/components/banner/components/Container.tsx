import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ContainerProps = FlexProps & {
	children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
	return (
		<Flex
			w='100%'
			h='90vh'
			direction='column'
			align='center'
			justify='center'
			position='relative'
			{...props}>
			{children}
		</Flex>
	);
};

export default Container;
