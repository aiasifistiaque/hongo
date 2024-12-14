import { Icon } from '@/components/icon';
import { useContent } from '@/hooks';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SearchButtonProps = CenterProps & {
	children?: string;
	onOpen: () => void;
};

const BTN_WIDTH = { base: '2rem', md: '2.8rem' };

const SearchButton: FC<SearchButtonProps> = ({ onOpen, ...props }) => {
	const { content } = useContent();
	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius={content?.header?.iconRadius}
			backgroundColor={content?.header?.iconBg}
			cursor='pointer'
			display={{ base: 'flex', lg: 'none' }}
			mr='8px'
			onClick={onOpen}
			{...props}>
			<Icon
				color={content?.header?.iconFg}
				size={18}
				name='search'
			/>
		</Center>
	);
};

export default SearchButton;
