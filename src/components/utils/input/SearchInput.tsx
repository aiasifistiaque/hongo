'use client';
import { Input, InputProps } from '@chakra-ui/react';

import { FC } from 'react';

type SearchInputProps = InputProps & {
	type?: string;
	placeholder?: string;
	handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = ({
	type,
	placeholder,
	handleSearchValue,
	onKeyDown,
	...props
}) => {
	return (
		<Input
			type={type || 'text'}
			w='full'
			borderRadius='1.5rem'
			placeholder={placeholder || 'I am looking for...'}
			size='lg'
			mb='16px'
			pr='3.5rem'
			onChange={handleSearchValue}
			onKeyDown={onKeyDown}
			{...props}
		/>
	);
};

export default SearchInput;
