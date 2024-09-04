import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeartSVG from '../../components/heartImg';
import BrushIcon from '../../components/brushIcon';
const Slider = () => {
    return (
        <div className='main'>
            <Splide options={{
                rewind: 'true',
                type: 'loop',
                perPage: 3,
                focus: 'center', gap: 40
            }} aria-label="React Splide Example">
                <SplideSlide>
                    <div className='component'>
                        <div className='frame'>
                            <img src='/assets/img/colorDefault.jpeg' />
                        </div>
                        <div className='image'>
                            <img src='/assets/img/1.png' />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='component'>
                        <div className='frame'>
                            <img src='/assets/img/colorDefault.jpeg' />
                        </div>
                        <div className='image'>
                            <img src='/assets/img/2.png' />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='component'>
                        <div className='frame'>
                            <img src='/assets/img/colorDefault.jpeg' />
                        </div>
                        <div className='image'>
                            <img src='/assets/img/3.png' />
                        </div>
                    </div>
                </SplideSlide>
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