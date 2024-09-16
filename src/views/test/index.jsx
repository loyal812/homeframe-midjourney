import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeartSVG from '../../components/heartImg';
import BrushIcon from '../../components/brushIcon';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import Loading from '../../components/Loading';

const Slider = () => {
    const { general } = useSelector((state) => state);
    const { loading } = general;
    const midjouryImgs = useSelector((state) => state.midjourney.midjourneyImgs);
    console.log(midjouryImgs);
    return (
        <div className='main'>
            <Splide options={{
                rewind: 'true',
                type: 'loop',
                perPage: 3,
                focus: 'center', gap: 40,
                breakpoints: {
                    1000: {
                        perPage: 1,
                        gap: 20,
                    },
                }
            }} aria-label="React Splide Example">
                {midjouryImgs.map((item, index) => (
                    <SplideSlide key={index}>
                        <div className='component'>
                            <div className='frame relative'>
                                <img src='/assets/img/colorDefault.jpeg' alt='frame' />
                                {<Loading />}
                            </div>
                            <div className='image'>
                                <img src={item} alt={index}/>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
                
            </Splide>

            <div className='frame'>
                <div className='wishlist'>
                    <HeartSVG className='icon' />
                    <div className='text'>Add to Wish List</div>
                </div>
                <div className='wishlist'>
                    <BrushIcon className='icon' />
                    <div className='text'>Customizing</div>
                </div>
            </div>
        </div>
    );
}
export default Slider;