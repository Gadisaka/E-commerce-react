import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './../../store/cartSlice';

const CarActionBtns = ({ car }) => {
	const dispatch = useDispatch();
	const carCount = useSelector(state => state.cart.cars[car.id]);

	const addToCartHandler = () => {
		dispatch(addToCart(car));
	};

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(car.id));
	};

	return (
		<div className='flex items-center gap-[0.8rem] rounded-[4px] text-[#12273d] text-[2.4rem] font-bold'>
			<button className='rounded-tr-md rounded-br-md bg-[#741906] w-[3rem]'  onClick={removeFromCartHandler}>
				-
			</button>
			<p>{carCount}</p>
			<button className='rounded-tr-md rounded-br-md bg-[#741906] w-[3rem]' onClick={addToCartHandler}> 
				+
			</button>
		</div>
	);
};

export default CarActionBtns;