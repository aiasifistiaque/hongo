import { Icon } from '@/components/icon';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SearchButtonProps = CenterProps & {
	children?: string;
	onOpen: () => void;
};

const BTN_WIDTH = { base: '2rem', md: '2.8rem' };

const SearchButton: FC<SearchButtonProps> = ({ onOpen, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius='50%'
			backgroundColor={colors?.primary}
			cursor='pointer'
			display={{ base: 'flex', lg: 'none' }}
			mr='8px'
			onClick={onOpen}
			{...props}
		>
			<Icon color={colors.white} size={18} name='search' />
		</Center>
	);
};

export default SearchButton;
