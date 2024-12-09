import { Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

type LogoProps = FlexProps & {
	imgSrc: string;
};

const Logo: FC<LogoProps> = ({ imgSrc, ...props }) => {
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

export default Logo;
