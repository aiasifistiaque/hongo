'use client';
import { Icon } from '@/components/icon';
import { Center, CenterProps, Input, InputProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { searchInputWidth } from '@/lib/config/constants';
import React, { FC, ReactNode, useState } from 'react';
import { useColors, useContent } from '@/hooks';

type SearchInputProps = CenterProps & {};

const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
	const [searchValue, setSearchValue] = useState('');
	const router = useRouter();

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSearchPage = () => {
		if (searchValue.trim()) {
			router.push(`/search/${encodeURIComponent(searchValue.trim())}`);
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
	const { content } = useContent();

	return (
		<Container {...props}>
			<SearchInputField
				onKeyDown={handleKeyDown}
				onChange={handleSearchValue}
			/>
			<SearchButton onClick={handleSearchPage}>
				<Icon name='search' color={content?.header?.searchBoxIcon} />
			</SearchButton>
		</Container>
	);
};

export default SearchInput;

const Container = ({
	children,
	...props
}: CenterProps & { children: ReactNode }) => {
	const { content } = useContent();

	return (
		<Center
			position='relative'
			display={{ base: 'none', lg: 'flex' }}
			w={searchInputWidth}
			{...props}
		>
			{children}
		</Center>
	);
};

const SearchInputField = ({ ...props }: InputProps & {}) => {
	const colors = useColors();
	const { content } = useContent();

	return (
		<Input
			pr='4rem'
			type='text'
			placeholder={content?.header?.searchBoxText}
			borderRadius={content?.header?.searchBoxRadius}
			w={searchInputWidth}
			borderColor={content?.header?.searchBoxBg}
			color={colors?.primaryText}
			bg={content?.header?.searchBoxFg}
			_placeholder={{
				color: content?.header?.searchBoxTextColor,
			}}
			py='1.5rem'
			{...props}
		/>
	);
};

const SearchButton = ({
	children,
	...props
}: CenterProps & { children: ReactNode }) => {
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
			{...props}
		>
			{children}
		</Center>
	);
};
