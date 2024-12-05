import { FiUser, FiSearch, FiHeart } from 'react-icons/fi';
import { LuShoppingBag } from 'react-icons/lu';

export const data = {
	topHeader: {
		textFirst: 'Free shipping on orders $99 and above',
		textSecond: 'Save up to 20% on all new users',
	},
	header: {
		logo: '/logo/headerLogo.svg',
		navLinks: [
			{
				label: 'Home',
				link: '/',
			},
			{
				label: 'Shop',
				link: '/shop',
			},
			{
				label: 'Collections',
				link: '/collections',
			},
			{
				label: 'Pages',
				link: '/pages',
			},
			{
				label: 'Blog',
				link: '/blog',
			},
			{
				label: 'Features',
				link: '/features',
			},
		],
		icons: [
			{
				icon: FiSearch,
			},
			{
				icon: FiUser,
			},
			{
				icon: FiHeart,
			},
			{
				icon: LuShoppingBag,
			},
		],
	},

	bannerData: {
		label: 'Handmade Crockery Collection',
		title: 'Elegant crockery makes meals special',
		imgSrc: './slider/sliderOne.webp',
		btn: {
			text: 'Shop Collection',
			link: '/',
		},
	},
	homePageServices: [
		{
			imgSrc: '/home/service/serviceOne.svg',
			title: 'Modern plate',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
		{
			imgSrc: '/home/service/serviceTwo.svg',
			title: 'Trendy vase',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
		{
			imgSrc: '/home/service/serviceThree.svg',
			title: 'Handmade mug',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
		{
			imgSrc: '/home/service/serviceFour.svg',
			title: 'Classic pottery',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
	],

	categories: [
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
	],

	products: [
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 3,
			_id: 'dfs23',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 3,
			_id: 'dfs232',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 4,
			_id: 'dfs23',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 2,
			_id: 'dfs236',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20.0,
			rating: 5,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 3,
			_id: 'dfs44',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 3,
			_id: 'dfs209',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 4,
			_id: 'dfs563',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 2,
			_id: 'dfe23',
			category: 'winter',
			stock: 23,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20.0,
			rating: 5,
			_id: 'd7hs23',
			category: 'winter',
			stock: 23,
		},
	],

	footer: {
		address: {
			label: 'Contact Us',
			address: '23 Market street san francisco HG 76543, United States.',
			phone: '(+983) 1234567',
			mail: 'hello@domain.com',
		},
		pages: {
			label: 'Quick Links',
			links: [
				{
					name: 'About',
					link: '/about',
				},
				{
					name: 'Privacy Policy',
					link: '/privacy',
				},

				{
					name: 'FAQ',
					link: '/faq',
				},
				{
					name: 'Contact',
					link: '/contact',
				},
			],
		},
	},

	singleProduct: {
		productDetails: {
			_id: 'abc123',
			name: 'Africana bowl with handle',
			category: 'Winter',
			rating: 4,
			price: 324,
			shortDescription:
				'Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body.',
			imgSrc: '/product/productOne.webp',
			totalReview: 3,
			description: {
				label: 'Product description',
				value:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper, eget euismod orci. Cum sociis natoque penatibus et magnis and montes nascetur ridiculus mus. Vestibulum and ultricies aliquam convallis.',
			},
			shipping: {
				label: 'Shipping and return',
				value:
					'Lorem ipsum dolor consectetur adipiscing eiusmod tempor labore dolore magna enim ad minim veniam nostrud. Lorem ipsum dolor consectetur adipiscing. orem ipsum dolor consectetur.',
				lists: [
					'Dispatch: Within 24 Hours',
					'Free shipping across all products.',
					'International delivery time - 7-10 business days',
					'Cash on delivery might be available',
					'Easy 30 days returns and exchanges',
				],
			},
			additionalInformation: {
				label: 'Additional information',
				value: {
					Name: 'Africana bowl with handle',
					SKU: 'HN-620012',
					Vendor: 'Aurarts',
					Title: 'Default Title',
				},
			},
		},
		relatedProducts: [
			{
				imgSrc: '/searchProduct/productOne.webp',
				productName: 'Africana katori set',
				price: 20,
				rating: 3,

				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productTwo.webp',
				productName: 'Africana katori set',
				price: 200,
				rating: 3,
				_id: 'dfs563ad',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productOne.webp',
				productName: 'Africana katori set',
				price: 20,
				rating: 4,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productTwo.webp',
				productName: 'Africana katori set',
				price: 200,
				rating: 2,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productOne.webp',
				productName: 'Africana katori set',
				price: 20.0,
				rating: 5,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productOne.webp',
				productName: 'Africana katori set',
				price: 20,
				rating: 3,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productTwo.webp',
				productName: 'Africana katori set',
				price: 200,
				rating: 3,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productOne.webp',
				productName: 'Africana katori set',
				price: 20,
				rating: 4,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productTwo.webp',
				productName: 'Africana katori set',
				price: 200,
				rating: 2,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
			{
				imgSrc: '/searchProduct/productOne.webp',
				productName: 'Africana katori set',
				price: 20.0,
				rating: 5,
				_id: 'dfs563',
				category: 'winter',
				stock: 23,
			},
		],
	},

	about: {
		banner: {
			imgSrc: './slider/sliderThree.webp',
			text: 'About',
		},
		mission: {
			label: 'Our Mission',
			paraOne:
				'A mission statement is a simple statement about the goals, values, andobjectives of an organization. A mission statement summarizes why abusiness exists and helps a company respond to change and make decisionsthat align with its vision.',
			paraTwo:
				'Our mission is simple: to offer a shopping experience that combinesquality, convenience, and value. We aim to create a platform that’s morethan a marketplace – it’s a trusted resource for discovering products you love, providing easy access to items that enhance your life',
		},
		productRange: {
			label: 'Wide Product Range',
			paraOne:
				'We believe in variety and diversity, curating a vast selection of products to cater to all kinds of preferences and needs. Whether you’re searching for the latest fashion trends, premium electronics, household essentials, or unique gifts, we have it all. Our team works diligently to expand our collection, constantly adding new and exciting products to ensure there’s something for everyone.',
			paraTwo:
				'Our mission is simple: to offer a shopping experience that combines quality, convenience, and value. We aim to create a platform that’s more than a marketplace – it’s a trusted resource for discovering products you love, providing easy access to items that enhance your life',
		},
		customerCentric: {
			label: 'Customer-Centric Approach',
			paraOne:
				"Customer satisfaction is our top priority. We’re here to make sure that your experience on our site is smooth from start to finish. Our dedicated customer support team is always available to help with questions, order tracking, returns, and more. We listen to our customers' feedback and continuously work to improve every aspect of our service.",
		},
		trustedQuality: {
			label: 'Trusted Quality',
			paraOne:
				'Quality is at the core of our brand. We carefully select each product based on rigorous standards, partnering with trusted suppliers to bring you only the best. Every item undergoes a thorough quality check, ensuring it meets our promise of excellence. This commitment to quality sets us apart and helps build trust with our valued customers.',
		},
		seamlessShopping: {
			label: 'Seamless Shopping Experience',
			paraOne:
				'Our website is designed with you in mind, featuring an intuitive interface that makes it easy to find what you need. With advanced search filters, personalized recommendations, and a streamlined checkout process, we aim to make shopping simple, fast, and enjoyable. Your safety and convenience are paramount, which is why we offer multiple payment options and robust security measures for a worry-free shopping experience.',
		},
		reliableDelivery: {
			label: 'Fast & Reliable Delivery',
			paraOne:
				'We know that timely delivery is crucial. Our logistics team works with reputable delivery partners to ensure your order reaches you safely and on time. We offer a variety of shipping options to suit your preferences, including expedited services for those last-minute needs.',
		},
		sustainablePractice: {
			label: 'Sustainable Practices',
			paraOne:
				'we’re committed to making a positive impact. We continuously strive to adopt sustainable practices in our operations, from eco-friendly packaging to responsible sourcing. By supporting sustainable products and reducing our environmental footprint, we aim to contribute to a better, greener future.',
		},
		community: {
			label: 'Community & Care',
			paraOne:
				'We believe in giving back to our community and are passionate about supporting meaningful causes. We work closely with local artisans, small businesses, and social initiatives to bring unique and impactful products to our store. Our aim is to connect customers with products they love while making a positive difference in the world.',
		},
		greetings:
			'Thank you for choosing [Your Website Name] as your trusted e-commerce platform. We’re excited to be part of your journey and look forward to serving you with dedication, passion, and excellence.',
	},
	privacy: {
		banner: {
			imgSrc: './slider/sliderTwo.webp',
			text: 'Privacy',
		},
		overview:
			'Welcome to [Your Website Name]. Protecting your privacy and the security of your personal information is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website or use our services. By accessing our site and using our services, you agree to the practices described here.',
		collectData: {
			label: 'Information We Collect',
			shortDescription:
				'To provide you with a seamless shopping experience, we may collect the following information:',
			points: [
				{
					head: 'Personal Information:',
					description:
						'When you create an account, place an order, or interact with customer service, we may collect personal information, such as your name, email address, phone number, shipping address, and payment details.',
				},
				{
					head: 'Usage Data:',
					description:
						'We gather information about your interactions on our website, including pages viewed, items added to your cart, browsing times, and clicks. This data helps us improve our website functionality and personalize your experience.',
				},
				{
					head: 'Device and Location Information:',
					description:
						'We may collect data related to your device and approximate location to enhance site performance and secure your account.',
				},
			],
		},
		useData: {
			label: 'How We Use Your Information',
			shortDescription:
				'We use your data responsibly and transparently to provide you with high-quality service. Specific uses include:',
			points: [
				{
					head: 'Order Processing:',
					description:
						'To process orders, handle payments, and provide updates on delivery status.',
				},
				{
					head: 'Customer Support:',
					description:
						'To assist you with inquiries, handle returns, and respond to feedback, ensuring a smooth shopping experience.',
				},
				{
					head: 'Site Improvement and Personalization:',
					description:
						'To enhance our websites functionality, create personalized recommendations, and make your experience more relevant.',
				},
				{
					head: 'Marketing and Promotions:',
					description:
						'With your consent, we may send promotional offers, newsletters, and information on upcoming sales. You can opt-out of these communications at any time.',
				},
				{
					head: 'Security and Fraud Prevention:',
					description:
						'To protect our site, your account, and our users against unauthorized access, fraud, or malicious activity.',
				},
			],
		},
		shareData: {
			label: 'How We Share Your Information',
			shortDescription:
				'We value your privacy and only share information with trusted third parties when necessary:',
			points: [
				{
					head: 'Service Providers:',
					description:
						'We work with partners (such as payment processors, delivery services, and IT support) to fulfill our obligations and maintain our website. They only have access to the information needed to perform their functions.',
				},
				{
					head: 'Legal Requirements:',
					description:
						'We may disclose your data if required by law, such as responding to court orders or regulatory requests.',
				},
				{
					head: 'Business Transfers:',
					description:
						'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity to ensure continuity of service.',
				},
			],
		},
		cookies: {
			label: 'Cookies and Tracking Technologies',
			shortDescription:
				'To enhance your experience, we use cookies and similar tracking technologies:',
			points: [
				{
					head: 'Cookies:',
					description:
						'Small data files placed on your device to remember your preferences, such as items in your cart, and to deliver relevant content.',
				},
				{
					head: 'Analytics Tools:',
					description:
						'We use tools like Google Analytics to gather insights into how our website is used, which helps us improve functionality and design.',
				},
			],
		},
		security: {
			label: 'Data Security',
			shortDescription:
				'We are committed to safeguarding your personal information. We implement strict security measures to prevent unauthorized access, misuse, alteration, or destruction of your data. This includes:',
			points: [
				{
					head: 'Encryption:',
					description:
						'All payment information is encrypted and processed through secure payment gateways.',
				},
				{
					head: 'Restricted Access:',
					description:
						'Only authorized personnel have access to your personal information, ensuring it is handled responsibly.',
				},
				{
					head: 'Regular Audits:',
					description:
						'We conduct regular security checks and updates to protect your information from potential threats.',
				},
			],
		},
		rights: {
			label: 'Your Rights and Choices',
			shortDescription:
				'We respect your rights over your personal information and provide you with options to manage it:',
			points: [
				{
					head: 'Access and Update:',
					description:
						'You can access or update your information at any time through your account settings.',
				},
				{
					head: 'Data Portability:',
					description:
						'You have the right to request a copy of the data we hold about you in a structured, machine-readable format.',
				},
				{
					head: 'Opt-Out of Marketing:',
					description:
						'You may unsubscribe from marketing emails by following the unsubscribe link included in each email.',
				},
				{
					head: 'Delete Account:',
					description:
						'To delete your account or any personal information, please contact our customer support team. Note that certain data may be retained for legal or security reasons.',
				},
			],
		},
		greetings:
			'Thank you for trusting us with your information. We are dedicated to providing a safe, transparent, and enjoyable shopping experience.',
	},
	faq: {
		banner: {
			imgSrc: './slider/sliderTwo.webp',
			text: 'FAQ',
		},
		data: [
			{
				question: 'How do I place an order?',
				answer:
					'To place an order, simply browse our product categories, select the item you want, and click When you’re ready to purchase, go to your cart, click and follow the instructions to enter your shipping and payment details.',
			},
			{
				question: 'What payment methods do you accept?',
				answer:
					'We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted for your safety.',
			},
			{
				question: 'Can I cancel or change my order after it’s been placed?',
				answer:
					'You can cancel or modify your order if it hasn’t been processed for shipping. Please contact our customer service team as soon as possible for assistance with cancellations or changes.',
			},
			{
				question: 'How can I track my order?',
				answer:
					'Once your order ships, you’ll receive an email with tracking information. You can use the tracking number provided to check the status of your order directly on the carrier’s website.',
			},
			{
				question: 'Do you offer international shipping?',
				answer:
					'Yes, we offer international shipping to selected countries. Shipping fees and delivery times may vary based on your location. Please check our shipping page or contact customer service for specific information.',
			},
			{
				question: 'What is your return policy?',
				answer:
					"We want you to be completely satisfied with your purchase. If you're not, you may return the product within 30 days of delivery for a full refund or exchange. Items must be unused, in their original packaging, and accompanied by proof of purchase.",
			},
			{
				question: 'How do I initiate a return or exchange?',
				answer:
					'To start a return or exchange, contact our customer service team with your order number and reason for return. We’ll provide instructions and a return label if applicable.',
			},
			{
				question: 'How long will it take to receive my refund?',
				answer:
					'Once we receive your return, we process refunds within 5-7 business days. Depending on your bank, the refund may take additional time to appear in your account.',
			},
			{
				question: 'Do you offer gift cards?',
				answer:
					'Yes, we offer digital gift cards that can be purchased on our website. They are available in various denominations and can be redeemed during checkout.',
			},
			{
				question: 'How can I contact customer support?',
				answer:
					'Our customer support team is available to help you via email at support@[yourwebsitename].com, phone at +1 (XXX) XXX-XXXX, or live chat on our website during business hours.',
			},
			{
				question: 'Are there any discounts or promotions?',
				answer:
					'We offer seasonal discounts, promotions, and special deals for our subscribers. Sign up for our newsletter or check our page to stay updated on the latest offers.',
			},
		],
	},
	contact: {
		banner: {
			imgSrc: './slider/sliderOne.webp',
			text: 'Contact',
		},
	},
};

export const addressFields = [
	{
		label: 'Recipient Name',
		type: 'text',
		placeholder: 'Recipient Name',
		fieldKey: 'name',
		isRequired: true,
	},
	{
		label: 'Recipient Email',
		type: 'email',
		placeholder: 'Recipient Email',
		fieldKey: 'email',
		isRequired: true,
	},
	{
		label: 'Recipient Phone',
		type: 'text',
		placeholder: 'Recipient Phone',
		fieldKey: 'phone',
		isRequired: true,
	},
	{
		label: 'Street Address',
		type: 'textarea',
		placeholder: 'Street Address',
		fieldKey: 'street',
		isRequired: true,
	},
	{
		label: 'City',
		type: 'text',
		placeholder: 'City',
		fieldKey: 'city',
		isRequired: true,
	},
	{
		label: 'State',
		type: 'text',
		placeholder: 'State',
		fieldKey: 'state',
		isRequired: false,
	},
	{
		label: 'Country',
		type: 'text',
		placeholder: 'Country',
		fieldKey: 'country',
		isRequired: false,
	},
	{
		label: 'Post Code',
		type: 'number',
		placeholder: 'Post Code',
		fieldKey: 'postalCode',
		isRequired: true,
	},
];
