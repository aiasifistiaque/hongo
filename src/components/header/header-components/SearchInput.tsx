'use client';
import { Icon } from '@/components/icon';
import { InputRadius } from '@/lib/config/constants';
import { Center, CenterProps, Input, InputProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { searchInputWidth } from '@/lib/config/constants';
import React, { FC, ReactNode, useState } from 'react';
import { useColors } from '@/hooks';

type SearchInputProps = CenterProps & {};

const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
	const [searchValue, setSearchValue] = useState('');
	const router = useRouter();

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

	const colors = useColors();

	return (
		<Container {...props}>
			<SearchInputField
				onKeyDown={handleKeyDown}
				onChange={handleSearchValue}
			/>
			<SearchButton onClick={handleSearchPage}>
				<Icon
					name='search'
					color={colors?.brand}
				/>
			</SearchButton>
		</Container>
	);
};

export default SearchInput;

const Container = ({ children, ...props }: CenterProps & { children: ReactNode }) => {
	return (
		<Center
			position='relative'
			mr='16px'
			display={{ base: 'none', lg: 'flex' }}
			w={searchInputWidth}
			{...props}>
			{children}
		</Center>
	);
};

const SearchInputField = ({ ...props }: InputProps & {}) => {
	const colors = useColors();
	return (
		<Input
			pr='4rem'
			type='text'
			placeholder='Search your desired products'
			borderRadius={InputRadius}
			w={searchInputWidth}
			borderColor={colors?.brand}
			color={colors?.primaryText}
			py='1.5rem'
			{...props}
		/>
	);
};

const SearchButton = ({ children, ...props }: CenterProps & { children: ReactNode }) => {
	const colors = useColors();

	return (
		<Center
			w='40px'
			h='40px'
			position='absolute'
			top='6px'
			right='12px'
			cursor='pointer'
			userSelect='none'
			{...props}>
			{children}
		</Center>
	);
};
