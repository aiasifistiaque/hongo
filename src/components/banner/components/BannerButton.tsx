import { useContent } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type BannerButtonProps = FlexProps & {
	btnText: string;
	btnLink: string;
};

const BannerButton: FC<BannerButtonProps> = ({ btnText, btnLink, ...props }) => {
	const { content } = useContent();
	return (
		<Flex
			gap='4'
			{...props}>
			<Link href={btnLink}>
				<Button
					color={content?.hero?.btnTextColor}
					borderRadius='0px'
					w='full'
					h='auto'
					p='16px 18px'
					bg={content?.hero?.btnColor}
					border={`1px solid ${content?.hero?.btnColor}`}
					_hover={{ backgroundColor: 'transparent', color: content?.hero?.btnColor }}>
					{btnText}
				</Button>
			</Link>
		</Flex>
	);
};

export default BannerButton;
