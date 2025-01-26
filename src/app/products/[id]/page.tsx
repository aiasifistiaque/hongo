import { getAProduct } from '@/components/utils/functions/getAProduct';

import { ProductDetailsPage } from '@/components';
import { Metadata, NextPage, ResolvingMetadata } from 'next';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type SingleProductProps = {
	params: Promise<{
		id: string;
	}>;
};

export async function generateMetadata(
	{ params }: SingleProductProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { id: productId } = await params;

	const productData = await getAProduct(productId);

	const metaData = productData?.meta;

	console.log('ProductData', productData);
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: metaData?.title || productData?.name,
		description: metaData?.description || productData?.description,
		openGraph: {
			title: metaData?.title || productData?.name,
			description: metaData?.description || productData?.description,
			images: [productData?.image, ...previousImages],
			type: 'website',
			locale: 'en-us',
			url: `${BASE_URL}`,
			siteName: `${BASE_URL}`,
		},
	};
}

const SingleProduct: NextPage<SingleProductProps> = async ({ params }) => {
	const { id } = await params;

	return <ProductDetailsPage />;
};

export default SingleProduct;
