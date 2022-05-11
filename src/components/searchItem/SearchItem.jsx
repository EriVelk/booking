import React from 'react'
import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://media.staticontent.com/media/pictures/090e1ef8-de87-4150-810d-f6865c7e37d8/300x200" className='siImg' alt="" />
            <div className='siDesc'>
                <h1 className='siTitle'>Tower Street Apartments</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitle'>Studio Apartment with Air Conditioning</span>
                <span className='siFeatures'>
                    Entire studio - 1 bathroom - 21m 1 full bed
                </span>
                <span className='siCancelOp'>
                    Free cancellation
                </span>
                <span className='siCancelOpSubtitle'>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className='siDetails'>
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )

}

export default SearchItem