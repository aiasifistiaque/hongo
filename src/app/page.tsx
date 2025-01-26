import { getStore } from '@/components/utils/functions/getStore';

import { HomePage } from '@/components';
import { Metadata, NextPage, ResolvingMetadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type HomePageProps = {
	params: Promise<{
		id: string;
	}>;
};

export async function generateMetadata(
	{ params }: HomePageProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { id: productId } = await params;

	const storeData = await getStore();

	const metaData = storeData?.shop?.meta;

	const previousImages = (await parent).openGraph?.images || [];

	const basicStoreData = storeData?.basic;
	const shopData = storeData?.shop;

	return {
		title: metaData?.title || basicStoreData?.name,
		description: metaData?.description || shopData?.description,
		openGraph: {
			title: metaData?.title || basicStoreData?.name,
			description: metaData?.description || shopData?.description,
			images: [basicStoreData?.logo, ...previousImages],
			type: 'website',
			locale: 'en-us',
			url: `${BASE_URL}`,
			siteName: `${BASE_URL}`,
		},
	};
}

const Home: NextPage<HomePageProps> = async ({ params }) => {
	const { id } = await params;

	return <HomePage />;
};

export default Home;
