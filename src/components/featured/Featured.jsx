import React from 'react'
import useFetch from '../../hooks/useFetch';
import "./featured.css";

const Featured = () => {

    const {data, loading, error} = useFetch("https://booking-react-node.herokuapp.com/api/hotels/count-by-city?cities=Cancun,CDMX,Monterrey,Guadalajara")

  return (
    <div className='featured'>
        {loading ? ("Loading please wait"):(<><div className='featuredItem'>
            <img src='https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=' alt='bed' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1 className='f-title'>Cancun</h1>
                <h2 className='f-subtitle'>{data[0]} properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=' alt='bed' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1 className='f-title'>CDMX</h1>
                <h2 className='f-subtitle'>{data[1]} properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=' alt='bed' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1 className='f-title'>Monterrey</h1>
                <h2 className='f-subtitle'>{data[2]} properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=' alt='bed' className='featuredImg'/>
            <div className='featuredTitles'>
                <h1 className='f-title'>Guadalajara</h1>
                <h2 className='f-subtitle'>{data[3]} properties</h2>
            </div>
        </div></>)}
    </div>
  )
}

export default Featured