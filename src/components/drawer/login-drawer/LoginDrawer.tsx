'use client';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	BoxProps,
	Box,
	FormControlProps,
	Flex,
	TextProps,
} from '@chakra-ui/react';
import { useState, useRef, ReactNode, FC } from 'react';

import { TextButton, TextNormal } from '@/components';
import { LoginUi, RegisterUi } from './components/index';

type LoginModalProps = BoxProps & {
	isOpen: boolean;
	onClose: () => void;
	content?: any;
	basic?: any;
};

const LoginModal: FC<LoginModalProps> = ({
	isOpen,
	onClose,
	content,
	basic,
}) => {
	const css = content?.authModalCss;
	const [page, setPage] = useState('login');

	const handleUiPage = (value: string) => {
		setPage(value);
	};

	return (
		<Box>
			<Modal
				blockScrollOnMount={true}
				isOpen={isOpen}
				onClose={onClose}
				closeOnOverlayClick={false}
			>
				<ModalOverlay />
				<ModalContent bg={css?.bgColor} minH='400px' maxW='550px' mx='1rem'>
					<ModalCloseButton />
					<ModalBody pt='1.2rem' pb='2rem'>
						<HeadingText basic={basic} content={content}>
							{page === 'login' ? 'Account Login' : 'Register Account'}
						</HeadingText>
						{page === 'login' ? (
							<LoginUi
								basic={basic}
								content={content}
								handleUiPage={handleUiPage}
							/>
						) : (
							<RegisterUi
								basic={basic}
								content={content}
								handleUiPage={handleUiPage}
							/>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default LoginModal;

const HeadingText = ({
	children,
	basic,
	content,
	...props
}: TextProps & { children: any; basic: any; content: any }) => {
	const css = content?.loginModal;
	return (
		<TextNormal
			color={css?.titleColor}
			textAlign={css?.titleAlign || 'left'}
			fontSize={{
				base: `${css?.titleSizeBase || 14}px`,
				lg: `${css?.titleSizeBg || 20}px`,
			}}
			fontWeight={css?.titleFontWeight || 600}
			content={content}
			mb='2rem'
			{...props}
		>
			{children}
		</TextNormal>
	);
};
