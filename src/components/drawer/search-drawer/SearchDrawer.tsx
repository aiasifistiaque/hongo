'use client';
import {
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
} from '@chakra-ui/react';
import { FC, ReactNode, useRef, useState } from 'react';
import { DrawerHeader, Flex } from '@chakra-ui/react';
import { Column, SearchInput, TextNormal } from '@/components';
import { SearchDrawerHeaderMaxWidth } from '@/lib/config/constants';
import InputSearchIcon from './InputSearchIcon';
import useCustomStyle from '@/hooks/useCustomStyle';
import { useRouter } from 'next/navigation';

type SearchDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
};

const SearchDrawer: FC<SearchDrawerProps> = ({ isOpen, onClose }) => {
	const [searchValue, setSearchValue] = useState('');
	const router = useRouter();
	const btnRef = useRef<HTMLButtonElement>(null);
	const { colors } = useCustomStyle();

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSearchPage = () => {
		if (searchValue.trim()) {
			router.push(`/search?value=${encodeURIComponent(searchValue.trim())}`);
		} else {
			alert('Please enter a search value'); // Replace with better UX if needed
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearchPage();
		}
	};

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
					<ColumnComponent>
						<Flex w='full' position='relative'>
							<SearchInput
								onKeyDown={handleKeyDown}
								handleSearchValue={handleSearchValue}
							/>
							<InputSearchIcon onClick={handleSearchPage} />
						</Flex>
						<Flex>
							<TextNormal mr='12px' color={colors.textColor}>
								Quick Search:
							</TextNormal>
						</Flex>
					</ColumnComponent>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);
};

export default SearchDrawer;

const ColumnComponent = ({ children }: { children: ReactNode }) => (
	<Column
		alignItems='center'
		maxW={SearchDrawerHeaderMaxWidth}
		m={{ base: '1.5rem auto', md: '4.5rem auto' }}
		h='full'
	>
		{children}
	</Column>
);
