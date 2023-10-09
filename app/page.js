import { Footer, FooterBanner, Herobanner, Navbar } from '@/components';
import product from '@/sanity/sanity-ecommerce/schemas/product';
import React from 'react';

const page = () => {
	return (
		<>
			<Navbar />
			<Herobanner />
			<div className="products-heading">
				<h1>Best Selling Products</h1>
				<p>Art for the new people</p>
			</div>
			<div className="products-container">
				{['Prodct1', 'Product2'].map((product) => product)}
			</div>
			<FooterBanner />
			<Footer />
		</>
	);
};

export default page;
