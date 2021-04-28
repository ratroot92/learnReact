import React from 'react';
import Modal from 'react-modal';
import ShopCart from './ShopCart';

export default function CartModal({control,setControl,cart}) {
	// const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			width: '60%',
			transform: 'translate(-50%, -50%)',
			overflowY: 'auto',
			height: '500px', // <-- This sets the height
		},
		overlay: { zIndex: 1000 },
	};
	// function openModal() {
	// 	setIsOpen(true);
	// 	console.log('====================================');
	// 	console.log('openModal');
	// 	console.log('====================================');
	// }

	// function afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	console.log('====================================');
	// 	console.log('afterOpenModal');
	// 	console.log('====================================');
	// }

	function closeModal() {
		console.log('====================================');
		console.log('closeModal');
		console.log('====================================');
		setControl(false);
	}

	return (
		<Modal
			isOpen={control}
			// onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Cart Modal'
		>
			<div clasName='cantainer-fluid'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='card'>
							<div className='card-header bg-success'><h3>Shopping Bag </h3></div>
							<div className='card-body'>
                                <ShopCart cart={cart}/>
                            </div>
							<div className='card-footer text-center'>
                            <button className='btn btn-sm btn-danger' onClick={closeModal}>
				close
			</button>
                            </div>
						</div>
					</div>
				</div>
			</div>
			
		</Modal>
	);
}
