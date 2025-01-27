import { EditButton, TextNormal, TextButton } from '@/components';
import { useColors } from '@/hooks';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type AccountHeaderProps = FlexProps & {
	basic: any;
	css: any;
	title: string;
	isEdit: boolean;
	handleEdit: (value: boolean) => void;
	handleSubmit: () => void;
	isLoading?: boolean;
};

const AccountHeader: FC<AccountHeaderProps> = ({
	basic,
	css,
	title,
	isEdit,
	handleEdit,
	handleSubmit,
	isLoading,
	...props
}) => {
	const colors = useColors();
	const BORDER = `1px solid ${css?.borderColor || '#e7e7e7'}`;

	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			pb='1rem'
			borderBottom={BORDER}
			{...props}
		>
			<TextNormal
				fontSize={`${css?.subtitleSize || 16}px`}
				fontWeight={css?.subtitleWeight || 600}
				color={css?.subtitleColor}
				basic={basic}
			>
				{title}
			</TextNormal>
			<EditButton
				display={isEdit ? 'none' : 'block'}
				onClick={() => handleEdit(true)}
				basic={basic}
				w={`${css?.editBtnWidth}px`}
				h={`${css?.editBtnHeight || 32}px`}
			>
				Edit
			</EditButton>
			<Flex display={isEdit ? 'flex' : 'none'} gap={2}>
				<EditButton
					onClick={() => handleEdit(false)}
					basic={basic}
					border='none'
					color={css?.fgColor || '#3b3b3b'}
				>
					Cancel
				</EditButton>
				<EditButton
					w={`${css?.editBtnWidth}px`}
					h={`${css?.editBtnHeight || 32}px`}
					isLoading={isLoading}
					onClick={handleSubmit}
					basic={basic}
				>
					Save
				</EditButton>
			</Flex>
		</Flex>
	);
};

export default AccountHeader;
