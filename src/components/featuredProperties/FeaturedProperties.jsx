import React from 'react'
import "./featuredproperties.css"

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg' alt='' className='fpImg' />
                <span className='fpName'>Aparthotel Stare Miastro</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg' alt='' className='fpImg' />
                <span className='fpName'>Aparthotel Stare Miastro</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img src='https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg' alt='' className='fpImg' />
                <span className='fpName'>Aparthotel Stare Miastro</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties