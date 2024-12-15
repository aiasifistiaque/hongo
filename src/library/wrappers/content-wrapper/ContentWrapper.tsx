'use client';

import { useGetStoreQuery } from '@/store/services/storeApi';
import { FC, ReactNode } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

type Type = {
	children?: ReactNode;
};

const ContentWrapper: FC<Type> = ({ children }) => {
	const { data, isLoading, isFetching, isError } = useGetStoreQuery({});

	if (isLoading || isFetching || isError || !data)
		return (
			<Center
				w='100vw'
				flex={1}
				h='100vh'>
				<Spinner size='xl' />
			</Center>
		);

	return children;
};

export default ContentWrapper;
