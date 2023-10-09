import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Herobanner = () => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">Small text</p>
				<h3>MID TEXT</h3>
				<Image src={``} alt={`art`} className="hero-banner-image" />
				<div className="">
					<Link href={`/product/ID`}>
						<button type="button">Button Text</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta ipsam repudiandae placeat laboriosam
							eveniet eos porro excepturi rerum corrupti
							reiciendis.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Herobanner;
