import  './Share.css';
import {MdOutlinePermMedia} from 'react-icons/md';
import {PiTagSimpleBold} from 'react-icons/pi';
import {CiLocationOn} from 'react-icons/ci';
import {MdTagFaces} from 'react-icons/md';



const Share = () => {
  return (
    <div className='share-container'>
      <div className="share-wrapper">
        <div className="post">
          <img src="assets/person/1.jpeg" alt="" className="shareimg" />
          <input className='shareinput' placeholder="What's in your mind Beny"  type="text" />
        </div>
        <hr />
        <div className="shareaction">
          <div className='sharepost'>
            <MdOutlinePermMedia className='shareicon'/>
            <span className='sharetext'>Media</span>
          </div>
          <div className='sharepost'>
            <PiTagSimpleBold className='shareicon'/>
            <span className='sharetext'>Tag</span>
          </div>
          <div className='sharepost'>
            <CiLocationOn className='shareicon'/>
            <span className='sharetext'>Location</span>
          </div>
          <div className='sharepost'>
            <MdTagFaces className='shareicon'/>
            <span className='sharetext'>Feelings</span>
          </div>
          <button className='sharebutton'> SHARE</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
