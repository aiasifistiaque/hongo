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

	categoriesData: {
		search: '',
		sort: '-createdAt',
		page: 1,
		limit: 10,
		skip: 0,
		query: '',
		fields: '',
		docsInPage: 10,
		totalDocs: 53,
		totalPages: 6,
		doc: [
			{
				meta: {
					keywords: [],
				},
				_id: '67556ed8563cd4fb004b38f2',
				name: 'Superhero Action Figures',
				image:
					'https://images.pexels.com/photos/8014549/pexels-photo-8014549.jpeg?auto=compress&cs=tinysrgb&w=800',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T10:03:04.734Z',
				updatedAt: '2024-12-08T10:03:04.734Z',
				slug: 'superhero-action-figures',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556ead563cd4fb004b38e4',
				name: 'Sports Equipment',
				image:
					'https://images.pexels.com/photos/12956005/pexels-photo-12956005.jpeg?auto=compress&cs=tinysrgb&w=800',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T10:02:21.916Z',
				updatedAt: '2024-12-08T10:02:21.916Z',
				slug: 'sports-equipment',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556e72563cd4fb004b38d6',
				name: 'Electronic Toys',
				image:
					'https://images.pexels.com/photos/7631694/pexels-photo-7631694.jpeg?auto=compress&cs=tinysrgb&w=800',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T10:01:22.422Z',
				updatedAt: '2024-12-08T10:01:22.422Z',
				slug: 'electronic-toys',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556e50563cd4fb004b38c8',
				name: 'Legos',
				image:
					'https://images.pexels.com/photos/3661352/pexels-photo-3661352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T10:00:48.910Z',
				updatedAt: '2024-12-08T10:00:48.910Z',
				slug: 'legos',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556e2e563cd4fb004b38ba',
				name: 'Board Games and Puzzles',
				image:
					'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T10:00:14.955Z',
				updatedAt: '2024-12-08T10:00:14.955Z',
				slug: 'board-games-and-puzzles',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556dfe563cd4fb004b38a3',
				name: 'Toddler Toys',
				image:
					'https://images.pexels.com/photos/590750/pexels-photo-590750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				displayInHomePage: false,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: false,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T09:59:26.409Z',
				updatedAt: '2024-12-08T09:59:38.044Z',
				slug: 'toddler-toys',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556ca209cfec16485e925d',
				name: 'Pretend Play',
				image:
					'https://images.pexels.com/photos/8293720/pexels-photo-8293720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				displayInHomePage: false,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: false,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T09:53:38.776Z',
				updatedAt: '2024-12-08T09:59:38.044Z',
				slug: 'pretend-play',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '67556c6c09cfec16485e924f',
				name: 'Adventure Toys',
				image:
					'https://images.pexels.com/photos/978710/pexels-photo-978710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				displayInHomePage: false,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: false,
				priority: 0,
				isDeleted: false,
				shop: '67556b5a09cfec16485e919a',
				createdAt: '2024-12-08T09:52:44.335Z',
				updatedAt: '2024-12-08T09:59:38.044Z',
				slug: 'adventure-toys',
				__v: 0,
			},
			{
				meta: {
					keywords: [],
				},
				_id: '6746bb32382db6dd7faa878b',
				name: 'Popcorn',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 2,
				isDeleted: false,
				shop: '673d812e4afbe3652694a87d',
				createdAt: '2024-11-27T06:24:50.943Z',
				updatedAt: '2024-11-27T06:30:35.852Z',
				slug: 'popcorn',
				__v: 0,
				image:
					'data:image/jpeg;base64,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',
			},
			{
				meta: {
					keywords: [],
				},
				_id: '6746b918382db6dd7faa8627',
				name: 'Soup',
				displayInHomePage: true,
				displayInMenu: true,
				tags: [],
				isActive: true,
				isFeatured: true,
				priority: 1,
				isDeleted: false,
				shop: '673d812e4afbe3652694a87d',
				createdAt: '2024-11-27T06:15:52.604Z',
				updatedAt: '2024-11-27T06:23:24.297Z',
				slug: 'soup',
				__v: 0,
				image:
					'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA9QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAACAQMCAwUFBgQFAwUAAAABAgMABBEFIRIxQQYTUWFxFCIygaEHQlKRscFi0eHwIyQzU3IVQ5IIgpPC8f/EABoBAAEFAQAAAAAAAAAAAAAAAAQAAQIDBQb/xAArEQACAgICAQMDAwUBAAAAAAAAAQIDBBESITEFQVETIjIzYXEVQlKBoRT/2gAMAwEAAhEDEQA/AJEjB2PKplt05BTj/lXYlotUGKmRA2tY+oJ9TUZtIvwVYcHjTGUUhwL2eP8A2xtSeNQvupgelF93U1jps+oyhIBhB8bt8K0tD7KURNK6oiszMcKAMk1f2HYySZUk1Ob2WLY8C7uf2FaKyhs9IUrZx8dxjDXDDc+ngKY8ruSWJOfGmcteBa2Ky07R9NP+TsY3kHKaUcbfXl8qPa/lYbEAeFV3GB1/rUUt3FAMzSLGB1Y4qmVqXlkowb8ItluXY7vUqzt4msvL2j09Dw98HP8AAM1xe09tnCrJj0FDyz6YeWXRxbZeEbGOZvHIpXENpfRGK8tYZ4z92RAw+tZiHtLbkjIceoq0tdbtZiAHFND1HHl1yFLEuj/aVGtfZzpV6pfTWNlIRsq7oT5ivNO0nZfVNAlLXkOYM+7cR7p8/A+te8xTI4yh2qSSOOeMxTojxsCGVhkEUZGUZraZR3HpnzCxqNia9T7b/ZoAr33Z2MgAFmsxy/8Ab/KvKZUaNmR8q6kqVIwQfOk1onF7OPmoi2KRJB3NNxneo7H0dDnPlXqn2e6g0vZ+GPHEYHaLcZAxuM/IivKCQK132dXTC6vLbiCqyK4J8c4/eqMiO4FlT1I393M4iMKQ7ud+LOFHVif76UHbaHbJP7VPm5mGOBpsFI9+QXlnzok3jO5QsMjOfXP8qSHvIzw7jnQMXoLaTHXsgVw2Ao4tiOTGoO8FyoOWwBtwbrSFsZWLTTAKfurt9ameSOFjwoHXqOQFSXQz7Kzi7i+ZlHGSvCxG/D1zUU80lu2TaNMu+d8AeH61JdXD5Dqo5YDE8h40HNMyws7P8GCQdjz6+NWJlbQKZGMwTPPKgE7Y5n9qUMiy5EKAyjOw5Hlg0GkLvKz4IyMncAnOedTW6tFKD3Y2yHONgOdT2R0WiTXVjBHHBJCM54g8asxPiSfH9qVVUmJm4gCCSSd+dKpIjxRpIcUUnKgocfi+hoxVAAPGD8jWgBjq5jeujc8/oalt7d5pkjjOWY4xikMSadYPfTFR7ka/HIfu1dyTRwxC1s14IV/Nj4mo5SltCLS2Pujd26ufGh8n5VCUiUUSg7bn86Hur2OCJpJJAka/eNC6pqMNnatNM+I15eLHyrzjWdauNVnPG5WL7sY5AdKzr8l74xDKcdy7ZodV7YOxMWmgqB/3WGT8qojcXN45e4kaRj+I0LawFuHOdvGri2tgMfyrKut+WatVKXg5bwkgZqxiiAA2p0UQA5UQq7Vm2WbDoQ0cVMciamAONtqQFPHpQ7kWpBljqd1aEcEhK/hbetZpWuw3QEcuEkPQ1iQKerFcEbEdRROPm20PcX18A2Rh13LXuenKRw5B32rz/wC0bsFHq8Muq6XEE1BRmRFGBMB/9vOrjQNcJIt7ptuSueh861QIYAjqPzrrMTMhlQ2vPuc3kY88efFnybISjsrKQykhgRyPhUTMT1r077ZeyPsNx/1+wTEEpAu0UbK3R/n1+XnXlfGKJ0QT2hzE0VpN8dP1GC54iFRvf/4nnQJamMf60zimtDp6PZLW6gaMAqArjiDHn8qmNyxcJyIIA4T8XjWE7L6s0lr3c794YTuG546Y+W3yrVWWoyS5WJl4j8PEvLyrLshwegyE00XSy24i4nzI43Aztmg7xjLhHRcjc88AdAPOmwLwDvZVYS8wudvlTjMCvHOQfeygHMetRUiega7iuntu7gwjsTw94cH18z0z4Uy6gZVSKRlywHFgDf8AvFTT3JklU7uRk48Bz50BeXTyTBFwUGGwDwj51YpEGjkiLbQ4U8A4skULNdk8MjRlWX3UGSKmkiPAXnbjYHIU75PX9qitY1KsGUMq7jmT0/mas2RB3ZpnPGowuykk70qmuAskhWVggTYAbUqfoY1MKDwotEGBsNqFgOB7xAoyJlI3IrRADvADyFWlii2lq1yRiST3U8hQECiaRIlIy5xR17IGmCJ8EY4VFKTEiI5z7x3qKeUIvvHCgZY+ApxOxNZXtrqpt7JbeI4km5nwWgsmzitIIphyZme0WryanesEJECHCKPDxoW0tyxGRSsYe7t+/cf4kp4Y89B1NWVrEUOPDasy18Ea1cfYLtbcCrGFABioLeOjo0rHtntmhCPQ5V2qRRiuqtdxQzZfo6KcKYCOpp3LrUWhySlSU7U6okjgJGMdK2HZnVBcRezTNl1Huk9RWPqayuGtrlJFOCporEyZY9qmv9guXjq+tr3PQtTsYNT0+eyu07yKdCrDyNfK/aXSpdB1u70ufJaCQgMfvL90/l+9fVdjcC4to5VOQRXkH2/aEFksdcgTn/l5yB03Kk+m4+ddvCasgpR8HKNOMmmeP8VNJpHbpTSfKnHHRSyQSiSM4YfWtXoevkxiMALKPiAON/nWRJ8qYCytxKSD5VCytTQ8ZuJ69p12JQHmcu/gDsB+maOlkSVVFtEyyNtgcjXm2i68VdI5uNTyznb8q3Gn6lxH3CCW+9uKzLKpQYbCxNFg1pHAJeOR+JlAzxZVN+n99Kb3VpArFYlYL1O+T5+JpiT8BbidGzkADkD40ye5WGJuDMnEPeNRiyRFdyQ/EqHiGS4FDRsBCzxnA5brnepIjHwf5jLMc4UnY5HX6U5VbHBCvCi9GXmatT2RkDXC2/CjTOI2Od2bOaVRavYyXsyyPciHGRwFKVXLjryVdmpjt4m+KNT60XFbxDlGv5UNCfh9KMjO1aIEHaVCkbyzhRmNMD1NML8R9amh/wAPTpG/E+PyFCpyBqEiSHSthME4ry3tLfNfarIw3VTwqPIV6Jq03c2Uz+CGvMrCB7zUY0ReIlxt896zLZc7Q/HWo7Ly4tvZXigIBEcKAnz5n55JomzhJGTyFP1ja+K8874qeIe6pxgdBWflvTNChdbCY1wuQp4fGp0NdsV9smW1kmEScJKnbOfCnvHCbl4LEvIYlLOrNyOcYHjWfLGnKHNF7y64WfTkd3xsMmoIbkOI+8xG7rxBCdwKjubib2bghhVXVWDFvHP9KodS1N7i4W4CCJURIpWQfCcY+ecVKvEUo6fkAu9XhGf2+F/0vLg3MjEQRE8I4i2cYox45rdYu+XaQAqf2NAW81xDC0olT2fuuByTnI9KktdUOrK0btxCMgqfKr7KIfQ+5dohi5s7cl8X0w4HwqReVR0+PnWMzokOpjc8jnUhpjb0yEbLslc95bNFnPDuP3/vzpn2j6WNY7GajbFcuIi8ZxyZdx9RQPY6XhmkTzH12P7Vr54xPaSRHk6FTXY+kT5Y6Xwct6jDhez45VuJQcYzXc0RqcBttRu7cjBindfyY4+lCZrSA9nWNMNdzXKQjgJByDg1baVrc1i4EuXiOx33qqxSxUZRUlpjptHpOk6pbXYTulZlzkrsTVvxJGnEVMavtgMuT5nqK8kgnmgcPExVl32rT6Z2kj7lUuz3RXrwls+mKCsxmu4hELvk2sQgGRDEGK75I3qaMYIJJ4vDG4qig1ewlXvFn7xh7pKzBcefjVjDd/4almBGOQyc/OqVFryW8kwmQxOxZkRyeppUJ7Yj7BSQPAYpU/FC5F5aEPuDnFHIaAhITpkHnii0cYBJ26YrYM0tH20yD/m1CA0STxaXCRyDHNDLzquRJFV2kbh0m4P8FY/siqnU2kI3Rcith2iXj024H8BrDdn7tbPUCXOEdeEn9KzE0rns0qluvo1Guxf5uGdPhZQtNknErjg91VUKoHlQM97NLKYZccAwQB0OBUkJrMy5bm9GjQtRWywgjkkIaMNxIOLIHw460RDBLI7u0zWk4JZLgcI71Sfe2zyzyzyzUMEkiQypG5XvE4Wx4UckbNAJeLZQEx5A5/eoUXV1x8vYLn4t170kv5K/Ur0QywhVadONo3YkB5SOQxtv0+W2edZ/V7mC4W6jsbeeCzeU5m7nLE5wowfIjw516Pp0lpFDJNJ3athgrsm6nHL1rJ6Usxj1ZLRJZEupjlzjAYHmD90gk7fOtCCrf3owJUSrm4y8mZjmWR0tLdgGK5ZXJOB/EOYIqz06eHTLUXEhdVlQe5wZbizzwOQOxGfoMU3TNFeKWOUokmHzKGODIMnrg1cXNg3fKbaR1jIzhmzg0Nk30/jvoLxMbKjLnBaILLWWunwiEDzFXcBJAJ5mgobTuzxSEnruKNiK8gR6Vj3cG/sXR1OO5KCU32SGmnnXWPXxptDhJcdlzw3zAfhz9RW9AGHFYTsopa8c9QAPrW6T4W9K6r0X9JnOerfrHyd20Tuu1mrx4+G7f9aoyau+28gk7Yay4OQbt6oq2H5MxHc0s1ym53pDky12okepRvypCO4pUqVIQsZomO6uEXhS4lA8OI7UNT1NJr5FthQvLzG1zN/8hFKoQwrlNpfA+z2eGQ+VFJM+CCwFVMUtELKMb8quKjQWLmbSpV593J9CKiXHLwqLQJw9xNbA7zIcDxI3qfGCR1zVcySBNRiElu6H7ykV5ZIpjnZTsc49K9cmXMR8QMivN+0tp7NqTsPglPEpxWVkLjb/ACaONLrRy2kLsCxztVrAdhVHZty3q4tm2FZl67NSpltAat7RylncymLvETGRxY9DVNb78qubDisQ19chRDwYVCf9RjywKEojuz9izJk41PXkrJXmvyGjDQW5bhfh3bbAOD0BrSWcAa0ihtYIba3B93h5KDzPmxqumuvaY48wpFhcEJ1PWolaRUKpIyq2xwaJh6gqm4eUZ8/TJ2pT39zOXMUcN/NDayccAPun9frSkCqihQQ3U8/pTkAUcqWd81nSuTsctdGmsZqpQ5PfyLUltltYoBI0jSN/iAdPA+VNhkgt4W7lyzAY4SN2HzFcCAEnx513HjvVzzP8Y9AT9J2+UpvY2IkqAelPFcx4U4AnlQb7ZrrpGn7Gw57yYjYsAPkMn9RWqlkENpNKxwFUnPpVZ2ftfZrCMMMHG/qdzVf9pGrDRexWo3PFh2iKR+bNsP1rsvTKvp462cnnWfUuZ8watde1apeXBbJlnd8jzag+Kmn3QB4bUTp1uLmfDDKDn5+VGyaXbBW9A5PLzqeyspLtzg8Ma82q3vtPjmaJvgAHCQORAo23jht4STwxxr4n+80NLIXH7fJXK3roAi0q3zjgLHxNTNY2kZAaIEk/DXLvVo0HDaoXY/eP8qisrkK8kk5ySMkmoRVje2ypc2ytnASd1xgAkAeG9N6VHNI0kjOdyzE1JBBNO/dxKWPXyozel2E+ENZvCkHrk0TwymNx74OCB41pNF7Pl1WW6Qs3PgI2Hh86qtuhXHlIhOxQW2Z8cZGVUn0FKvSY9NEaKCqoOgApUF/UkvYo/wDS/gMjk8jU4k23qnjukPLI9amF2g58XyrX2FaLi0vDa3UVxHnijcMPPyrWXiIXWaE5ilUOpHgd6889qU8nIrYdlb9b6wk09nzNDl4s8yvUfKml2hBw3HiKzvanTPabMmNcvHlh6da0YHD7vhzrkkXerw9aAyKucf3RfVPizySHMb4NW9pIDj0ojtLo5t5jcwqe7J3HgaqraXhYA1k2LkjZqmn2jSWzZo5G4goJ2ByB51TWstWULg1mWJph0Wn5DlwBmnZqFXyKeDQrQQiTirmabmu02hztdFcFdphHcVZ6DZG6u1cj/DjIJ9fCgba3kuZu7Qdfi6AVvNGsEtLZQijP6nxo/AxXdavgBzslVVtLyywhjCqqgchXi3/qF18PNY6DA5PB/mZwPHcIP1P5V7BrOpW+jaXc6heOFihjLkk4r5M1/U7jtDr1zqNwTx3UvEBn4ByA+QArs1FQjpHLN7eysigkmP8AhjbxPKrvSoPZI274DJbIbO1ORUhCxoAc9PGrKBFjt2c7Y3bIoO6xtcSicyWO2N3JFHGRwqMsR0oq60EOeJiSAMYB29aK0m2Z4RcYA4jgNjnitbpfst8rQXoUT8OFQ+6G9KzJWyUuMQaU/g87OgWcfFHOZopSPdkO6A+flVLqtlPpxMEvD724ZTkMviDW8vbW3TUzFcs0EJOCc5wfnVBrOkZk9mEiOpyYZc7A+HzomjIe/uY9VupakZKNAT+laewtlhtcptt+ZrOKO5mKSAhlOCCORq/srreMcXuNkGispNpaL7+0PsLNbzVjO6ZdUXAPU77/ACxW405FtLZmdR3jHC8R61ltLljsrqJgCxl4lJPTH/7VyLg31wAzhEGwJrNvk29g022XCmBRveJxn4seNdoYQW1uoXvc/T9q7VG/2I7KxI4vwCp0hj/2l9cUMk6f7if+H9KlFwmPji/8f6V0xqaHyW8RG8Y+WK7ZubC6iurXKSxtxKc/r5UzvIz1T5CoXljU/c/On2LR6THJFqVmmoWwwD/qx9UbqDTByrEaDr76Rd94nC8LjhliJ2YeXnW+j9nvrZb/AE6XvbVxnYbr5EdKhJe6FvQJdWqXETBgDkYOaxGtaBJau0tspMfVeZFb5dqTxK/rQF+Nz+6PkJpvdf8AB5fbzMjcJBz51aW84IFaHUezcNwS0Y4H8VGPpVLNol3anZSyjqvWse+mUfyRr0ZEJLyERyZFEK1V8aSRnDAj1ouPirNlE0IyTCAacKYgJ9fKioLSaVgqIxPkKq0T5JeSMCp7a2e4k4UHzq2sOzs8hBm9xfA1ptP0y3s09xeJqMxvT7sh+NIByPUK6lpPbBdF0lLZFZxud8H96uwAo4jgYpD3edeSfar9owhSXQuz82ZiCtzcodox+FT4/pXWYuNDHhxRz1107pcmZ37Z+2w1m+Oh6a+dOtWHfOOUsg6eg/WvLeLhYMvMHNTyAZKjPjknNQld6u2Q0XEV6ioWRQ22WJG5PhQ0moSBOFnPCeS0BuvIkZqWztnvLmO3j3eRgozyFVOMV2ypwXuejdh9QFzpfCcNJA4JQ9R/f61sTplpexNwMA+8ke/T+YNYm2sItBgiezJZsjvD+PzrY6YsjxrKMqpHLrWLZKErG14M+TTl0Canp81uI0vY457c7d8EHeIPM9R671lNUtXtbrh91k5KQNq31yDglyWBGDnrWd1K3WYs5xxNvjpUuKT6IOPZ572msmS+SeIqFnXjwzcjyP6VLohiMQSQZlbbcbVe67FALWxS4iDurMQ2N1VsY59crQEmjXHdGe2uw+PhLLtH8h+tHJuypRYanyjpks1v3TB4sggEbU621OazPDjoTtREbAoO9IIC5Yg9fXrQV4yvI8OwYQO2AfTH6UPCHJ8ZFMYd6YanaSFB78eXPPfNKstt0pUcsOoK+jE1yMfFPzqYOcck+VVavUqSY/FRISH94eiflTCpJDFn26ZofviPxVxpzj71IWiVmfJ3J9MD9qP0PXb/AES4720YFG/1IZPgkHn4etVPH4Zrhc+Ap9jnsOk6lpnaFA9g/dXQHv20hHF8vEeYqdrd4jiRa8XSeWKRZInMbqcqyHBB9a1+jfaPf2oSHWIFv4R99TwygevJvnim0mQafsblU3qZYQegNB6Z2l7O6qQLe+EEp/7Vx7jD89vyq8jtw4DROjqeqnNM4J+URUmgH2C3f44lPypy6RZ5ybdfyqxW3Yc81MkRG2KpeJTJ7cCxX2LxJgUOmWibrbr+VHRwRpsqDHkMVIFCjLbDzqu1HtDo2lIXvtQt4sDkWBJ+VThjVR/GKFK2cvLZaKo6VFfX9pptq1zeTxwxICS7kDFebdoPtbghRotAtO/k/wB64JVB5gDc/T1ry/XNf1bXpu+1S6M34U5InovKrukQSbNj2++1K41NZNP7PM0Np8MlzyeQeC/hHnz9K8wfiPPrzorJA3VTULbj3sCob2Wa0QcNMKb1MceNLAPypCBWUDmRVh2dmSDWLeQr3gDe8q7nHKtR2WhtG05TMkUjkniUruNzir2QQInCEVBnYrQduRFbiwSy5LaJ3l057fDmUEnJwobB6CrzTYIVtY5I9SEkLc0I2B8PEVkpkhQiWaQg4OcHn61DZahCgZ01CN0Y8OFIH5jx86zIUeWuwOMG+0a7ULkEcMLghfPY/vVHcTkHLlRnoKEE5WQcMgKHpmq/V7maRkitc8ePfb8PhV9Wmty6FH5YJ2r1FGshbRbylxxY+6BvVbp2qXScMckgQfdkbp6082DueJ8lj40+LTnDcLrsc0T9WGtImp68Ekt5Gys9pPEkxOThMq58x4+lHWkNvq0vtgj9k1IDgliH+lcDHNT0PlVGYiqmOP3QNiw6mrzs5e21gs8V+jSW0oAZgfejbow/P6Cn5L2LlIqNRiNq8UDK8fDGPeI+KuV6fpcMPsq4druPmk0SjLD+IdD+VKrldpa0XcjzniNdWRj4UqVEhA/jOK4zkilSpCH8Z4RTeNqVKnENLGnj3eFueQDvXaVREcvcRy8CqMYHMc6ktdRvLbBtrqaHfGI5GAHyzSpU6bGaLFO2HaG3YJHq1zw/xNn9adN217SFgP8Aq1wM+GB+1KlT7YzK691zV7slbjVLyQE9ZTVTKxy0h95s4yd6VKlskl0QuTioTIw6/SlSqA7OEmmkZG9KlSExoUZpHYjzNKlSGJI55YH7yKRlfxzWjsNUuLi2DScGRtstdpULkwi12im6K+Cn1nU7kuYAwVScEgb4qpEaEFiMkeNKlV9SSh0PXFJHpnY+xtpezFu0kSswdiCRy3/pVlp1nA11dSmMcScQA6UqVZVncwCfkDNrC+HKDINR38EanKrurEj8hSpVTUQRmI0U7EbcWaPjtoixXh2Yb12lRq/Mu9yGSWSJsRSPHnnwMRmlSpUdpFp//9k=',
			},
		],
	},

	products: {
		search: '',
		sort: '-createdAt',
		page: 1,
		limit: 10,
		skip: 0,
		query: '',
		fields: '',
		docsInPage: 6,
		totalDocs: 6,
		totalPages: 1,
		doc: [
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752c11368cf70eeb250b52d',
				name: 'Titan Voyager 1000',
				shortDescription:
					'The Titan Voyager 1000 is a beast of a cruiser, built for serious riders who demand power and luxury. Featuring a massive 1000cc V-twin engine, a plush touring seat, and advanced rider-assist features, this bike redefines what it means to hit the open road.\n\nKey Features:\n\nEngine: 1000cc V-twin for unparalleled highway performance.\nComfort: Touring seat with backrest and heated options.\nTechnology: Advanced cruise control and navigation system.\nFuel Tank: 22 liters for long-distance travel.\nExtras: Full fairing, weatherproof saddlebags, and premium sound system.',
				description:
					'The Titan Voyager 1000 is a beast of a cruiser, built for serious riders who demand power and luxury. Featuring a massive 1000cc V-twin engine, a plush touring seat, and advanced rider-assist features, this bike redefines what it means to hit the open road.\n\nKey Features:\n\nEngine: 1000cc V-twin for unparalleled highway performance.\nComfort: Touring seat with backrest and heated options.\nTechnology: Advanced cruise control and navigation system.\nFuel Tank: 22 liters for long-distance travel.\nExtras: Full fairing, weatherproof saddlebags, and premium sound system.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/26866361/pexels-photo-26866361/free-photo-of-side-view-of-glossy-modern-harley-davidson-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 1000000,
				price: 1200000,
				isDiscount: false,
				discount: 0,
				slug: 'titan-voyager-1000',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 4,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:17:07.401Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 4800000,
				inventorySellPrice: 4800000,
				id: '6752c11368cf70eeb250b52d',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752c0c468cf70eeb250b503',
				name: 'Sunset Rider 400',
				shortDescription:
					'Lightweight and easy to handle, the Sunset Rider 400 is the perfect cruiser for beginners and urban riders. Its 400cc engine provides ample power for city commutes, while its compact frame and stylish design make it stand out in traffic.\n\nKey Features:\n\nEngine: 400cc single-cylinder for fuel-efficient performance.\nWeight: Lightweight frame for easy maneuverability.\nSeating: Low seat height for rider comfort and control.\nLighting: LED headlight and taillight for modern flair.\nAdditional Features: Smartphone mount, USB charging, and storage options.',
				description:
					'Lightweight and easy to handle, the Sunset Rider 400 is the perfect cruiser for beginners and urban riders. Its 400cc engine provides ample power for city commutes, while its compact frame and stylish design make it stand out in traffic.\n\nKey Features:\n\nEngine: 400cc single-cylinder for fuel-efficient performance.\nWeight: Lightweight frame for easy maneuverability.\nSeating: Low seat height for rider comfort and control.\nLighting: LED headlight and taillight for modern flair.\nAdditional Features: Smartphone mount, USB charging, and storage options.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/15741468/pexels-photo-15741468/free-photo-of-classic-motorbike-on-road-edge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: [],
				isFeatured: false,
				cost: 600000,
				price: 699000,
				isDiscount: false,
				discount: 0,
				slug: 'sunset-rider-400',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 9,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:15:48.332Z',
				updatedAt: '2024-12-06T09:15:48.332Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 6291000,
				inventorySellPrice: 6291000,
				id: '6752c0c468cf70eeb250b503',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752c03068cf70eeb250b46b',
				name: 'Heritage Classic 750',
				shortDescription:
					'The Heritage Classic 750 delivers timeless cruiser aesthetics with modern engineering. Its 750cc engine ensures a smooth ride, while its spacious saddlebags and large windshield make it ideal for long road trips. Perfect for riders who appreciate vintage charm with today’s reliability.\n\nKey Features:\n\nEngine: 750cc liquid-cooled V-twin for balanced performance.\nWheels: Wire-spoke wheels with tubeless tires.\nStorage: Lockable saddlebags with ample space.\nBraking System: Front and rear ABS for enhanced safety.\nExtras: Chrome detailing, heated grips, and retro-styled headlamp.',
				description:
					'The Heritage Classic 750 delivers timeless cruiser aesthetics with modern engineering. Its 750cc engine ensures a smooth ride, while its spacious saddlebags and large windshield make it ideal for long road trips. Perfect for riders who appreciate vintage charm with today’s reliability.\n\nKey Features:\n\nEngine: 750cc liquid-cooled V-twin for balanced performance.\nWheels: Wire-spoke wheels with tubeless tires.\nStorage: Lockable saddlebags with ample space.\nBraking System: Front and rear ABS for enhanced safety.\nExtras: Chrome detailing, heated grips, and retro-styled headlamp.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/10396353/pexels-photo-10396353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 699999,
				price: 800000,
				isDiscount: false,
				discount: 0,
				slug: 'heritage-classic-750',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 99,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:13:20.996Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 79200000,
				inventorySellPrice: 79200000,
				id: '6752c03068cf70eeb250b46b',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752bfe868cf70eeb250b43c',
				name: 'NightGlider 650',
				shortDescription:
					'With its sleek blacked-out design and 650cc parallel-twin engine, the NightGlider 650 is the cruiser for modern road warriors. Agile, powerful, and built for city streets or open highways, this bike is engineered for thrill seekers who value speed and sophistication.\n\nKey Features:\n\nEngine: 650cc parallel-twin with responsive acceleration.\nExhaust: Dual exhaust system for a deep, aggressive sound.\nLighting: All-LED lights for enhanced visibility and style.\nComfort: Forward foot controls and a relaxed seating position.\nExtras: USB port, compact storage compartment, and digital speedometer.',
				description:
					'With its sleek blacked-out design and 650cc parallel-twin engine, the NightGlider 650 is the cruiser for modern road warriors. Agile, powerful, and built for city streets or open highways, this bike is engineered for thrill seekers who value speed and sophistication.\n\nKey Features:\n\nEngine: 650cc parallel-twin with responsive acceleration.\nExhaust: Dual exhaust system for a deep, aggressive sound.\nLighting: All-LED lights for enhanced visibility and style.\nComfort: Forward foot controls and a relaxed seating position.\nExtras: USB port, compact storage compartment, and digital speedometer.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/2629412/pexels-photo-2629412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 900000,
				price: 949000,
				isDiscount: false,
				discount: 0,
				slug: 'nightglider-650',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 100,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:12:08.549Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 94900000,
				inventorySellPrice: 94900000,
				id: '6752bfe868cf70eeb250b43c',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752bf9a68cf70eeb250b41b',
				name: 'RoadMaster 800 Pro',
				description:
					'The RoadMaster 800 Pro is your ticket to effortless highway cruising. Powered by an 800cc V-twin engine, this cruiser combines brute strength with a smooth, refined ride. With its vintage-inspired design, leather saddlebags, and premium chrome accents, it’s perfect for both performance and style enthusiasts.\n\nKey Features:\n\nEngine: 800cc, air-cooled V-twin with exceptional torque.\nTransmission: 6-speed manual for seamless gear shifts.\nFuel Tank Capacity: 20 liters for extended rides.\nBrakes: Dual-disc ABS for safe, controlled stops.\nAdditional Features: Bluetooth connectivity, leather saddlebags, and a quick-release windshield.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/5794243/pexels-photo-5794243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 500000,
				price: 600000,
				isDiscount: false,
				discount: 0,
				slug: 'roadmaster-800-pro',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 100,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:10:50.725Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 60000000,
				inventorySellPrice: 60000000,
				id: '6752bf9a68cf70eeb250b41b',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752bf5a68cf70eeb250b3ec',
				name: 'ThunderCruise 500X',
				description:
					'Experience the ultimate in comfort and style with the ThunderCruise 500X. Designed for long-distance cruising, this bike features a powerful 500cc engine, a low-slung frame, and a plush, ergonomic seat for all-day riding comfort. The classic cruiser design is enhanced with modern touches, including LED lighting, a digital-analog dashboard, and chrome finishes.\n\nKey Features:\n\nEngine: 500cc, liquid-cooled, V-twin engine for smooth performance.\nTransmission: 6-speed manual with a belt drive for a quiet, efficient ride.\nSeating: Wide, cushioned seat with a relaxed riding posture.\nFuel Tank Capacity: 18 liters for extended journeys.\nWheels: Alloy wheels with durable tubeless tires.\nBraking System: Dual-disc ABS for superior stopping power.\nAdditional Features: USB charging port, saddlebags, and a windshield for added convenience.',
				isActive: true,
				unit: 'pc',
				unitValue: 1,
				image:
					'https://images.pexels.com/photos/1192332/pexels-photo-1192332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 400000,
				price: 450000,
				isDiscount: false,
				discount: 0,
				slug: 'cruiser',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 10,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:09:46.647Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 4500000,
				inventorySellPrice: 4500000,
				id: '6752bf5a68cf70eeb250b3ec',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752c11368cf70eeb250b52d',
				name: 'Titan Voyager 1000',
				shortDescription:
					'The Titan Voyager 1000 is a beast of a cruiser, built for serious riders who demand power and luxury. Featuring a massive 1000cc V-twin engine, a plush touring seat, and advanced rider-assist features, this bike redefines what it means to hit the open road.\n\nKey Features:\n\nEngine: 1000cc V-twin for unparalleled highway performance.\nComfort: Touring seat with backrest and heated options.\nTechnology: Advanced cruise control and navigation system.\nFuel Tank: 22 liters for long-distance travel.\nExtras: Full fairing, weatherproof saddlebags, and premium sound system.',
				description:
					'The Titan Voyager 1000 is a beast of a cruiser, built for serious riders who demand power and luxury. Featuring a massive 1000cc V-twin engine, a plush touring seat, and advanced rider-assist features, this bike redefines what it means to hit the open road.\n\nKey Features:\n\nEngine: 1000cc V-twin for unparalleled highway performance.\nComfort: Touring seat with backrest and heated options.\nTechnology: Advanced cruise control and navigation system.\nFuel Tank: 22 liters for long-distance travel.\nExtras: Full fairing, weatherproof saddlebags, and premium sound system.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/26866361/pexels-photo-26866361/free-photo-of-side-view-of-glossy-modern-harley-davidson-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 1000000,
				price: 1200000,
				isDiscount: false,
				discount: 0,
				slug: 'titan-voyager-1000',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 4,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:17:07.401Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 4800000,
				inventorySellPrice: 4800000,
				id: '6752c11368cf70eeb250b52d',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752c0c468cf70eeb250b503',
				name: 'Sunset Rider 400',
				shortDescription:
					'Lightweight and easy to handle, the Sunset Rider 400 is the perfect cruiser for beginners and urban riders. Its 400cc engine provides ample power for city commutes, while its compact frame and stylish design make it stand out in traffic.\n\nKey Features:\n\nEngine: 400cc single-cylinder for fuel-efficient performance.\nWeight: Lightweight frame for easy maneuverability.\nSeating: Low seat height for rider comfort and control.\nLighting: LED headlight and taillight for modern flair.\nAdditional Features: Smartphone mount, USB charging, and storage options.',
				description:
					'Lightweight and easy to handle, the Sunset Rider 400 is the perfect cruiser for beginners and urban riders. Its 400cc engine provides ample power for city commutes, while its compact frame and stylish design make it stand out in traffic.\n\nKey Features:\n\nEngine: 400cc single-cylinder for fuel-efficient performance.\nWeight: Lightweight frame for easy maneuverability.\nSeating: Low seat height for rider comfort and control.\nLighting: LED headlight and taillight for modern flair.\nAdditional Features: Smartphone mount, USB charging, and storage options.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/15741468/pexels-photo-15741468/free-photo-of-classic-motorbike-on-road-edge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: [],
				isFeatured: false,
				cost: 600000,
				price: 699000,
				isDiscount: false,
				discount: 0,
				slug: 'sunset-rider-400',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 9,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:15:48.332Z',
				updatedAt: '2024-12-06T09:15:48.332Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 6291000,
				inventorySellPrice: 6291000,
				id: '6752c0c468cf70eeb250b503',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752c03068cf70eeb250b46b',
				name: 'Heritage Classic 750',
				shortDescription:
					'The Heritage Classic 750 delivers timeless cruiser aesthetics with modern engineering. Its 750cc engine ensures a smooth ride, while its spacious saddlebags and large windshield make it ideal for long road trips. Perfect for riders who appreciate vintage charm with today’s reliability.\n\nKey Features:\n\nEngine: 750cc liquid-cooled V-twin for balanced performance.\nWheels: Wire-spoke wheels with tubeless tires.\nStorage: Lockable saddlebags with ample space.\nBraking System: Front and rear ABS for enhanced safety.\nExtras: Chrome detailing, heated grips, and retro-styled headlamp.',
				description:
					'The Heritage Classic 750 delivers timeless cruiser aesthetics with modern engineering. Its 750cc engine ensures a smooth ride, while its spacious saddlebags and large windshield make it ideal for long road trips. Perfect for riders who appreciate vintage charm with today’s reliability.\n\nKey Features:\n\nEngine: 750cc liquid-cooled V-twin for balanced performance.\nWheels: Wire-spoke wheels with tubeless tires.\nStorage: Lockable saddlebags with ample space.\nBraking System: Front and rear ABS for enhanced safety.\nExtras: Chrome detailing, heated grips, and retro-styled headlamp.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/10396353/pexels-photo-10396353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 699999,
				price: 800000,
				isDiscount: false,
				discount: 0,
				slug: 'heritage-classic-750',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 99,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:13:20.996Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 79200000,
				inventorySellPrice: 79200000,
				id: '6752c03068cf70eeb250b46b',
			},
			{
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
				_id: '6752bfe868cf70eeb250b43c',
				name: 'NightGlider 650',
				shortDescription:
					'With its sleek blacked-out design and 650cc parallel-twin engine, the NightGlider 650 is the cruiser for modern road warriors. Agile, powerful, and built for city streets or open highways, this bike is engineered for thrill seekers who value speed and sophistication.\n\nKey Features:\n\nEngine: 650cc parallel-twin with responsive acceleration.\nExhaust: Dual exhaust system for a deep, aggressive sound.\nLighting: All-LED lights for enhanced visibility and style.\nComfort: Forward foot controls and a relaxed seating position.\nExtras: USB port, compact storage compartment, and digital speedometer.',
				description:
					'With its sleek blacked-out design and 650cc parallel-twin engine, the NightGlider 650 is the cruiser for modern road warriors. Agile, powerful, and built for city streets or open highways, this bike is engineered for thrill seekers who value speed and sophistication.\n\nKey Features:\n\nEngine: 650cc parallel-twin with responsive acceleration.\nExhaust: Dual exhaust system for a deep, aggressive sound.\nLighting: All-LED lights for enhanced visibility and style.\nComfort: Forward foot controls and a relaxed seating position.\nExtras: USB port, compact storage compartment, and digital speedometer.',
				isActive: true,
				image:
					'https://images.pexels.com/photos/2629412/pexels-photo-2629412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				images: [],
				category: {
					_id: '6752bba968cf70eeb250b1ba',
					name: 'Cruiser',
				},
				shop: {
					_id: '670d6f77db71c3672d566018',
					name: 'Think Shop',
					isExpired: false,
				},
				collection: ['6752bc4168cf70eeb250b215'],
				isFeatured: false,
				cost: 900000,
				price: 949000,
				isDiscount: false,
				discount: 0,
				slug: 'nightglider-650',
				weight: 0,
				tags: [],
				allowStock: true,
				stock: 100,
				damage: 0,
				lowStockAlert: 0,
				status: 'published',
				vat: 0,
				isVisible: true,
				customAttributes: [],
				customSections: [],
				faq: [],
				createdAt: '2024-12-06T09:12:08.549Z',
				updatedAt: '2024-12-06T11:22:52.835Z',
				__v: 0,
				inStock: true,
				inventoryCostPrice: 94900000,
				inventorySellPrice: 94900000,
				id: '6752bfe868cf70eeb250b43c',
			},
		],
	},
	order: {
		_id: '6741965f80a49a1627718ba7',
		user: '670d6f77db71c3672d56601c',
		items: [
			{
				name: 'Black tshirt-copy',
				image:
					'https://img.drz.lazcdn.com/static/bd/p/f113d608762e25bb4250f7fa37811946.jpg_720x720q80.jpg',
				_id: '67234fb0c1b77f11a1d44dc9',
				qty: 1,
				unitPrice: 400,
				totalPrice: 400,
				vat: 8,
				unitVat: 8,
				returnQty: 0,
				id: '67234fb0c1b77f11a1d44dc9',
			},
		],
		total: 500,
		returnAmount: 0,
		vat: 8,
		subTotal: 400,
		isPaid: false,
		paidAmount: 0,
		profit: 92,
		dueAmount: 500,
		address: {
			name: 'Joseph Stalin',
			email: 'asifistiaque@thinkcrypt.io',
			phone: '01828398225',
			city: 'Dhaka',
			state: '',
			street: '5B, House 88, Road 17/A, Banani',
			postalCode: '1213',
			country: 'Bangladesh',
		},
		shippingCharge: 100,
		paymentMethod: 'COD',
		status: 'delivered',
		customer: '674030078f6e554a84c9940d',
		orderDate: '2024-11-23T08:46:23.770Z',
		isCancelled: false,
		discount: 8,
		isDelivered: true,
		shop: {
			_id: '670d6f77db71c3672d566018',
			name: 'Think Shop',
			template: 1,
			email: 'john.doe@example.com',
			expire: '2024-11-11T12:14:23.664Z',
			trial: true,
			phone: '01828398225',
			isDeleted: false,
			isActive: true,
			createdAt: '2024-10-14T19:22:31.316Z',
			updatedAt: '2024-12-05T04:42:22.515Z',
			__v: 4,
			description:
				"Welcome to Think Shop!!\nThink Shop is a trendy clothing brand offering stylish, high-quality apparel for fashion-forward individuals. Known for its modern designs and versatile pieces, Jane's Shop provides customers with the perfect blend of comfort, elegance, and everyday wear. \nWhether you're dressing up for an event or keeping it casual, Think Shop has something for everyone!",
			package: '6728ba9f9c4674d8bdd21b76',
			id: '0001',
			logo: 'https://arewabooks.s3.us-east-2.amazonaws.com/Frame%20677.png_1732519867820',
			address: 'Flat A5, 4/11 Humayun Road, Mohammadpur',
			faq: [
				{
					title: 'Do you sell tshirt?',
					description: 'Yes, we have variety of tshirt options available',
					_id: '674441261280106952d0caf3',
					id: '674441261280106952d0caf3',
				},
				{
					title: 'Do you allow cash on delievry?',
					description: 'Yes',
					_id: '674441a61280106952d0cb09',
					id: '674441a61280106952d0cb09',
				},
			],
			terms: [
				'No exchange on perishable goods',
				'Return should be made within 30 days',
			],
			smsBalance: 3.9999999999999973,
			smsExpense: 6,
			daraz: '',
			facebook: 'https://facebook.com/thinkcryptio',
			instagram: 'https://instagram.com/thinkcrypt',
			linkedin: '',
			telegram: '',
			tiktok: '',
			twitter: '',
			website: 'https://thinkcrypt.io',
			whatsapp: '',
			youtube: '',
			shippingCharge: 0,
			isExpired: true,
		},
		origin: 'invoice',
		createdAt: '2024-11-23T08:46:23.776Z',
		updatedAt: '2024-11-26T09:42:35.315Z',
		invoice: '0025',
		__v: 0,
		delivery: '6741968380a49a1627718bd1',
		totalItems: 1,
		name: '0025',
		id: '6741965f80a49a1627718ba7',
	},

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
