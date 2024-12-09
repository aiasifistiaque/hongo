import { Icon } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, CenterProps } from '@chakra-ui/react';
import { FC } from 'react';

type InputSearchIconProps = CenterProps & {};

const InputSearchIcon: FC<InputSearchIconProps> = ({ ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Center
			w={'40px'}
			h={'40px'}
			position='absolute'
			top='4px'
			right='15px'
			cursor='pointer'
			fontSize='1.3rem'
			color={colors.textColor}
			userSelect='none'
			{...props}
		>
			<Icon name={'search'} color={colors.dark} />
		</Center>
	);
};

export default InputSearchIcon;
