import {FaHeart} from 'react-icons/fa';

import './footer.scss';
const Footer = ()=>{
    return (
        <div className='footer-container'>
            Made With <FaHeart style={{color: 'red'}}/> By <b>Ashu</b>
        </div>
    );
}

export default Footer;