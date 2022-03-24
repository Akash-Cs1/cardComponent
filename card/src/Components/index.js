import React from 'react'
import "./testCard.css"

const handleClick=(e)=>{
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.color = 'black'
    console.log(e.target);
}

function TestCard() {
  return (
    <div className="mainbx bg-black text-white h-1/5">
      <div className="cardBox">
        <div className="container">
          <div className="imageContainer ">
            <span className="pngContainer">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </span>
          </div>
          <div className="textContent">
            <h3 className='text1'>How did we do?</h3>
            <p className="text2">please let us know how we did with your support request. All fedbacks are Appreciated to help us improve our offsprings ! </p>
          </div>
          <div className="page">
            <div className="pageNumbers">1</div>
            <div className="pageNumbers">2</div>
            <div className="pageNumbers">3</div>
            <div className="pageNumbers">4</div>
            <div className="pageNumbers">5</div>
          </div>
          <div className="submitButton">
            <button className='submiteButton'>Submite</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default TestCard