'use client';
import { PageLayout, SectionPadding } from '@/components';
import ProductDetails from '@/components/productDetails/ProductDetails';
import RelatedProrduct from '@/components/slider/RelatedProduct';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { useParams } from 'next/navigation';

export default function Home() {
	const { id } = useParams<{ id: string }>();
	const { singleProduct, relatedProduct } = data;
	const { colors } = useCustomStyle();


	return (
		<PageLayout>
			<SectionPadding bg={colors?.secondary}>
				<ProductDetails id={id} data={singleProduct} />
			</SectionPadding>

			<SectionPadding bg={colors?.secondary}>
				<RelatedProrduct data={relatedProduct?.doc} />
			</SectionPadding>
		</PageLayout>
	);
}
