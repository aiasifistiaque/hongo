'use client';
import { TextButton, TextNormal } from '@/components';
import {
	Box,
	BoxProps,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';
import FormInfoText from './FormInfoText';
import FormControlComp from './FormControlComp';
import { useLgoinMutation } from '@/store/services/authApi';
import { useCustomToast } from '@/hooks';
import { useAppDispatch } from '@/library';
import { login } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';

type LoginUiProps = BoxProps & {
	basic: any;
	content: any;
	handleUiPage: (value: string) => void;
};

const LoginUi: FC<LoginUiProps> = ({ basic, content, handleUiPage }) => {
	const router = useRouter();
	const [trigger, result] = useLgoinMutation();
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const { data, error, isError, isLoading, isSuccess } = result;

	useCustomToast({
		isError,
		isSuccess,
		error: error,
		isLoading,
		successText: 'Login successful',
		successTitle: 'Success',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		trigger(formData);
	};

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
			router.push('/dashboard/account');
		}
	}, [result, router]);

	const css = content?.authModalCss;

	return (
		<form onSubmit={handleSubmit}>
			<FormControlComp
				label='E-Mail'
				placeholder='E-Mail'
				type={'email'}
				isRequired={true}
				css={css}
				value={formData.email}
				name={'email'}
				onChange={handleFormData}
			/>

			<FormControl mb='2rem'>
				<Flex justifyContent='space-between' alignItems='center' mb='.5rem'>
					<FormLabel
						fontWeight={css?.labelWeight || 600}
						fontSize={`${css?.labelSize || 12}px`}
						mb='0px'
					>
						Password
					</FormLabel>
					<TextButton
						fontWeight={css?.labelWeight || 600}
						fontSize={`${css?.labelSize || 12}px`}
						css={css}
						color={css?.danger || '#ef4a23'}
					>
						Forgotten Password?
					</TextButton>
				</Flex>
				<Input
					placeholder='Password'
					type='password'
					name='password'
					value={formData.password}
					onChange={handleFormData}
				/>
			</FormControl>

			<Box>
				<PrimaryBtn isLoading={isLoading} type='submit' css={css}>
					Login
				</PrimaryBtn>
			</Box>
			<Box my='1.5rem'>
				<FormInfoText basic={basic} css={css}>
					Don't have an account?
				</FormInfoText>
			</Box>

			<Box>
				<SecondaryBtn onClick={() => handleUiPage('register')} css={css}>
					Create Your Account
				</SecondaryBtn>
			</Box>
		</form>
	);
};

export default LoginUi;
