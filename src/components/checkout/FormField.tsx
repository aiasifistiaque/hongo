/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';

import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { FC } from 'react';

type FormFieldProps = {
	isRequired: boolean;
	type: string; // Supports both "text" and "textarea"
	label: string;
	value: string | number;
	placeholder?: string;
	onChange: (value: string | number) => void;
};

const FormField: FC<FormFieldProps> = ({
	isRequired,
	type,
	label,
	value,
	placeholder,
	onChange,
}) => {
	const { colors } = useCustomStyle();
	return (
		<FormControl isRequired={isRequired}>
			<FormLabel>{label}</FormLabel>
			{type === 'textarea' ? (
				<Textarea
					placeholder={placeholder}
					value={value}
					onChange={e => onChange(e.target.value)}
					border={`1px solid ${colors?.borderColor}`}
					rows={5}
				/>
			) : (
				<Input
					type={type}
					placeholder={placeholder}
					value={value}
					border={`1px solid ${colors?.borderColor}`}
					onChange={e =>
						onChange(type === 'number' ? +e.target.value : e.target.value)
					}
				/>
			)}
		</FormControl>
	);
};

export default FormField;
