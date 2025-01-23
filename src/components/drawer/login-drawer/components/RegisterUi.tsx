import { TextButton, TextNormal } from '@/components';
import {
	Box,
	BoxProps,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Input,
	Text,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';
import FormControlComp from './FormControlComp';
import FormInfoText from './FormInfoText';
import { useRegisterMutation } from '@/store/services/authApi';

import { useAppDispatch } from '@/library';
import { login } from '@/store/slices/authSlice';
import { useColors, useCustomToast } from '@/hooks';
import { useRouter } from 'next/navigation';

type RegisterUiProps = BoxProps & {
	basic: any;
	content: any;
	handleUiPage: (value: string) => void;
};

const RegisterUi: FC<RegisterUiProps> = ({ basic, content, handleUiPage }) => {
	const css = content?.authModalCss;
	const router = useRouter();
	const [trigger, result] = useRegisterMutation();

	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const { data, error, isError, isLoading, isSuccess } = result;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const body = {
			name: formData?.fullName,
			email: formData?.email,
			password: formData?.password,
			confirm: formData?.confirmPassword,
		};
		trigger(body);
	};

	useCustomToast({
		isError,
		isSuccess,
		error: error,
		isLoading,
		successText: 'Registration successful',
		successTitle: 'Success',
	});
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
			router.push('/dashboard/account');
			window?.location?.reload();
		}
	}, [result]);

	const colors = useColors();

	return (
		<form onSubmit={handleSubmit}>
			<FormControlComp
				label='Full Name'
				placeholder='Full Name'
				type={'text'}
				isRequired={true}
				css={css}
				value={formData.fullName}
				name={'fullName'}
				onChange={handleFormData}
			/>

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

			<FormControlComp
				label='Password'
				placeholder='Password'
				type={'password'}
				isRequired={true}
				css={css}
				value={formData.password}
				name={'password'}
				onChange={handleFormData}
			/>

			<FormControlComp
				label='Confirm Password'
				placeholder='Confirm Password'
				type={'password'}
				isRequired={true}
				css={css}
				value={formData.confirmPassword}
				name={'confirmPassword'}
				onChange={handleFormData}
			/>

			<Box mt='1.5rem'>
				<PrimaryBtn isLoading={isLoading} type='submit' css={css}>
					Continue
				</PrimaryBtn>
			</Box>
			<Box my='1.5rem'>
				<FormInfoText basic={basic} css={css}>
					Already have an account?
				</FormInfoText>
			</Box>

			<Flex justifyContent='center'>
				<Text
					fontSize={`${css?.secondaryTextSize}px`}
					color={css?.fgColor || '#000'}
				>
					If you already have an account with us, please login here
					<TextButton
						onClick={() => handleUiPage('login')}
						textDecoration='underline'
						css={css}
						color={css?.danger || '#ef4a23'}
					>
						login
					</TextButton>
				</Text>
			</Flex>
		</form>
	);
};

export default RegisterUi;
