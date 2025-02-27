import { TextNormal } from '@/components';
import { Avatar, Box, Flex, FlexProps, Skeleton } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProfileHeaderImageProps = FlexProps & {
	basic: any;
	css: any;
	selfData: any;
	isLoading?: boolean;
};

const ProfileHeaderImage: FC<ProfileHeaderImageProps> = ({
	basic,
	css,
	selfData,
	isLoading,
	...props
}) => {
	return (
		<Flex alignItems='center' {...props} mb='1.4rem'>
			<Avatar src={selfData?.image || 'https://bit.ly/broken-link'} />
			{isLoading ? (
				<Skeleton ml='20px' w='100px' h='20px' borderRadius='12px' />
			) : (
				<TextNormal
					fontSize={{
						base: `${css?.titleSizeBase || 16}px`,
						lg: `${css?.titleSizeBg || 18}px`,
					}}
					fontWeight={css?.titleWeight || 600}
					color={css?.titleColor}
					ml='12px'
					basic={basic}
				>
					{`Hello ${selfData?.name}`}
				</TextNormal>
			)}
		</Flex>
	);
};

export default ProfileHeaderImage;
