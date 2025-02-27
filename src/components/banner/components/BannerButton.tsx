import { useContent } from '@/hooks';
import { Button, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { getAlignment } from '@/components';

type BannerButtonProps = FlexProps & {
	btnText: string;
	btnLink: string;
};

const BannerButton: FC<BannerButtonProps> = ({ btnText, btnLink, ...props }) => {
	const { content } = useContent();
	return (
		<Flex
			gap='4'
			align={getAlignment(content?.hero?.align)}
			{...props}>
			<Link href={btnLink}>
				<Button
					fontSize={content?.hero?.btnFontSize ? `${content?.hero?.btnFontSize}px` : '0'}
					h={content?.hero?.btnHeight ? `${content?.hero?.btnHeight}px` : '44px'}
					w={content?.hero?.btnWidth ? `${content?.hero?.btnWidth}px` : '100px'}
					color={content?.hero?.btnTextColor}
					bg={content?.hero?.btnColor}
					borderRadius={content?.hero?.btnRadius ? `${content?.hero?.btnRadius}px` : '0'}
					_hover={{
						bg: content?.hero?.btnHoverColor,
						color: content?.hero?.btnHoverTextColor,
						borderColor: content?.hero?.btnHoverBorderColor,
					}}
					p='16px 18px'>
					{btnText}
				</Button>
			</Link>
		</Flex>
	);
};

export default BannerButton;
