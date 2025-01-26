import { Icon, IconNameOptions } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';

const HeaderIcon = ({
	name,
	size,
	...props
}: {
	name: IconNameOptions;
	href?: string;
	size?: number;
}) => {
	const { colors } = useCustomStyle();
	return <Icon name={name} size={size || 22} color={colors.dark} {...props} />;
};

export default HeaderIcon;

// import { Icon, IconNameOptions } from '@/components/icon';
// import { TextNormal } from '@/components';
// import { Center, CenterProps } from '@chakra-ui/react';
// import React, { FC } from 'react';
// import { useColors } from '@/hooks';
// const BTN_WIDTH = { base: '2.4rem', md: '2.8rem' };

// type HeaderIconProps = CenterProps & {
// 	content: any;
// 	name: IconNameOptions;
// 	type?: string;
// 	basic: any;
// 	cartTotal?: any;
// 	onOpen?: () => void;
// };

// const HeaderIcon: FC<HeaderIconProps> = ({
// 	content,
// 	name,
// 	type,
// 	basic,
// 	cartTotal,
// 	onOpen,
// 	...props
// }) => {
// 	const colors = useColors();

// 	return (
// 		<Center
// 			w={BTN_WIDTH}
// 			h={BTN_WIDTH}
// 			borderRadius={content?.header?.iconRadius}
// 			backgroundColor={content?.header?.iconBg || colors?.brand}
// 			cursor='pointer'
// 			position='relative'
// 			{...props}
// 		>
// 			<Center
// 				position='absolute'
// 				w={'1.2rem'}
// 				h={'1.2rem'}
// 				top='-2px'
// 				right='-2px'
// 				fontSize='.775rem'
// 				color={content?.header?.tagFg}
// 				bg={content?.header?.tagBg}
// 				borderRadius='50%'
// 				fontWeight='500'
// 				{...props}
// 			>
// 				<TextNormal
// 					fontSize='10px'
// 					fontWeight='bold'
// 					color={content?.header?.countFg || '#fff'}
// 				>
// 					{cartTotal}
// 				</TextNormal>
// 			</Center>
// 			<Icon
// 				color={content?.header?.iconFg || colors.brand}
// 				size={18}
// 				name='cart'
// 			/>
// 		</Center>
// 	);
// };

// export default HeaderIcon;
