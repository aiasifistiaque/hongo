import { Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

type DesktopLogoProps = FlexProps & {
	imgSrc: string;
};

const DesktopLogo: FC<DesktopLogoProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex
			w='full'
			h='full'
			alignItems='center'
			justifyContent='flex-start'
			{...props}
		>
			<Link href='/'>
				<Image
					w='auto'
					h='2.5rem'
					objectFit='contain'
					src={imgSrc}
					alt='Logo Image'
				/>
			</Link>
		</Flex>
	);
};

export default DesktopLogo;
