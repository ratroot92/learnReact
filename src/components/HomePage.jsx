import React from 'react';

import ShopPage from './ShopPage';
import CategoryStrip from './ShopCompoenents/CategoryStrip';

export default function HomePage() {
	return (
		<>
			<div className='col-md-12 m-0 p-0'>
				<CategoryStrip />
			</div>
			<div className='col-md-12'>
				<ShopPage />
			</div>
		</>
	);
}
