// import { EditButton } from '@/components';
// import { TextNormal } from '@/components';
// import { Box, Button, Center, CenterProps, Flex } from '@chakra-ui/react';
// import React, { FC } from 'react';
// import { AddressModal } from './index';

// type AddressHeaderProps = CenterProps & {
// 	basic: any;
// 	css: any;
// };

// const AddressHeader: FC<AddressHeaderProps> = ({ basic, css, ...props }) => {
// 	return (
// 		<Flex alignItems='center' justifyContent='space-between' {...props}>
// 			<TextNormal
// 				color={css?.fgColor || '#3a3a3a'}
// 				fontSize={`${css?.titleSize || 16}px`}
// 				fontWeight={css?.titleWeight || 600}
// 				basic={basic}
// 			>
// 				Manage Address
// 			</TextNormal>
// 			<AddressModal basic={basic} css={css}>
// 				<EditButton
// 					fontSize={`${css?.btnSize || 16}px`}
// 					px={4}
// 					py={5}
// 					bg={css?.primaryBtnBg || '#FEF0E8'}
// 					color={css?.primaryBtnFg || '#F26E21'}
// 					basic={basic}
// 					borderRadius={`${css?.btnRadius || 4}px`}
// 					border='none'
// 					_hover={{
// 						bg: css?.primaryBtnBg || '#FEF0E8',
// 					}}
// 				>
// 					Add new address
// 				</EditButton>
// 			</AddressModal>
// 		</Flex>
// 	);
// };

// export default AddressHeader;
