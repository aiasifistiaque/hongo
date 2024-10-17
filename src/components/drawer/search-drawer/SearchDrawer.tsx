'use client';
import {
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { DrawerHeader, Flex } from '@chakra-ui/react';
import { Column, SearchInput, TextNormal } from '@/components';
import { SearchDrawerHeaderMaxWidth } from '@/lib/config/constants';
import InputSearchIcon from './InputSearchIcon';
import useCustomStyle from '@/hooks/useCustomStyle';

type SearchDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
};

const SearchDrawer: FC<SearchDrawerProps> = ({ isOpen, onClose }) => {
	const btnRef = useRef<HTMLButtonElement>(null);
	const { colors } = useCustomStyle();

	return (
		<Drawer
			isOpen={isOpen}
			placement='top'
			onClose={onClose}
			finalFocusRef={btnRef}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />

				{/* <SearchDrawerHeader /> */}
				<DrawerHeader m={0}>
					<Column
						alignItems='center'
						maxW={SearchDrawerHeaderMaxWidth}
						m={{ base: '1.5rem auto', md: '4.5rem auto' }}
						h='full'
					>
						<Flex w='full' position='relative'>
							<SearchInput type='text' placeholder='I am looking for...' />
							<InputSearchIcon />
						</Flex>
						<Flex>
							<TextNormal mr='12px' color={colors.textColor}>
								Quick Search:
							</TextNormal>
						</Flex>
					</Column>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);
};

export default SearchDrawer;
