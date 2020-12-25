import React, { useState } from "react";
import "./ProductReviews.scss";
import StarRatings from "react-star-ratings";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { Controller, Scene } from "react-scrollmagic";
export default function ProductReviews() {
  const [modal, setModal] = useState("commentModal");
  const submitHandle = ()=>{
    document.querySelector(".submitNotify").classList.add("success");
    const timeout = setTimeout(() => {
      document.querySelector(".submitNotify").classList.remove("success");
    }, 3000);
    setModal("commentModal");
    return () => {
      clearTimeout(timeout);
    };
  }
  function renderCommentModal() {
    return (
      <div className={modal}>
        <div className="modalContent">
          <div className="close">
            <AiOutlineClose
              onClick={() => {
                setModal("commentModal");
              }}
              className="icon"
            />
          </div>
          <div className="title">
            <h6>Write your review</h6>
          </div>
          <div className="overall">
            <h6>Overall Rating *</h6>
            <StarRatings
              changeRating
              className="rating"
              rating={0}
              starHoverColor="#222"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="2px"
            />
          </div>
          <div className="reviewTitle">
            <h6>Review Title (require)</h6>
            <div className="inputGroup">
              <input
                className="input"
                type="text"
                placeholder="Headline or summary for your review"
              />
              <span className="line"></span>
            </div>
          </div>
          <div className="review">
            <h6>Review (require)</h6>
            <textarea
              type="text"
              placeholder="Write your review here. Reviews must be at least 5 characters long and meet basic standards for internet decorum to be published."
            />
          </div>
          <button onClick={()=>{
            submitHandle()
          }}>Submit</button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="productReviews">
        <Controller>
          <Scene
            triggerElement='.title'
            triggerHook='.5'
            classToggle='fade'
          >
            <div className="title">
              <h6>Reviews</h6>
            </div>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            triggerElement=".ratingContainer"
            triggerHook=".5"
            classToggle="fade"
          >
            <div className="ratingContainer">
              <div className="content">
                <div className="totalRating">
                  <StarRatings
                    className="rating"
                    rating={3.3}
                    starRatedColor="#222"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <p>3.5 / 5.0</p>
                </div>
                <p className="totalReview">3 Reviews</p>
                <div className="eachRate">
                  <div className="rate">
                    <h6>5 Stars</h6>
                    <div className="percent">
                      <div></div>
                    </div>
                    <p>(0)</p>
                  </div>
                  <div className="rate">
                    <h6>4 Stars</h6>
                    <div className="percent">
                      <div style={{ width: 33.33 }}></div>
                    </div>
                    <p>(2)</p>
                  </div>
                  <div className="rate">
                    <h6>3 Stars</h6>
                    <div className="percent">
                      <div style={{ width: 66.67 }}></div>
                    </div>
                    <p>(1)</p>
                  </div>
                  <div className="rate">
                    <h6>2 Stars</h6>
                    <div className="percent">
                      <div></div>
                    </div>
                    <p>(0)</p>
                  </div>
                  <div className="rate">
                    <h6>1 Star</h6>
                    <div className="percent">
                      <div></div>
                    </div>
                    <p>(0)</p>
                  </div>
                </div>
                <div className="writeReview">
                  <button
                    onClick={() => {
                      setModal("commentModal open");
                    }}
                  >
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="commentSection">
                <div className="sortBy">
                  <select>
                    <option>Sort Lowest to Highest</option>
                    <option>Sort Highest to Lowest </option>
                    <option>Sort by Most Recent Reviews </option>
                    <option>Sort by Most Helpful Reviews </option>
                  </select>
                </div>
                <div className="commentBox">
                  <div className="commentContent">
                    <StarRatings
                      className="rating"
                      rating={3.5}
                      starRatedColor="#222"
                      numberOfStars={5}
                      name="rating"
                      starDimension="15px"
                      starSpacing="2px"
                    />
                    <h6>Good but the some a flaw</h6>
                    <p>
                      I ended up returning this to get the traditional embody.
                      The problem is that the foam is thicker on this (Logitech)
                      version except where the front of the seat pan adjusts the
                      thicker foam is nice but the thic Read More
                    </p>
                  </div>
                  <div className="commentTime">
                    <h6>August 22, 2020</h6>
                    <p>Ryan S</p>
                    <div>
                      <p>
                        <AiFillCheckCircle className="icon" /> Purchased 2 days
                        ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="commentBox">
                  <div className="commentContent">
                    <StarRatings
                      className="rating"
                      rating={3.5}
                      starRatedColor="#222"
                      numberOfStars={5}
                      name="rating"
                      starDimension="15px"
                      starSpacing="2px"
                    />
                    <h6>Pretty good, could be better</h6>
                    <p>
                      Overall, I would say this new G version of the Embody is
                      an upgrade over the existing Embody. The addition of foam
                      up the spine of the back, and the foam installed in the
                      seat is very much needed on these chairs. The fabric used
                      on the Read More
                    </p>
                  </div>
                  <div className="commentTime">
                    <h6>August 22, 2020</h6>
                    <p>Ryan S</p>
                    <div>
                      <p>
                        <AiFillCheckCircle className="icon" /> Purchased 2 days
                        ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="commentBox">
                  <div className="commentContent">
                    <StarRatings
                      className="rating"
                      rating={4}
                      starRatedColor="#222"
                      numberOfStars={5}
                      name="rating"
                      starDimension="15px"
                      starSpacing="2px"
                    />
                    <h6>Pretty good, could be better</h6>
                    <p>
                      Overall, I would say this new G version of the Embody is
                      an upgrade over the existing Embody. The addition of foam
                      up the spine of the back, and the foam installed in the
                      seat is very much needed on these chairs. The fabric used
                      on the Read More
                    </p>
                  </div>
                  <div className="commentTime">
                    <h6>August 22, 2020</h6>
                    <p>Ryan S</p>
                    <div>
                      <p>
                        <AiFillCheckCircle className="icon" /> Purchased 2 days
                        ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scene>
        </Controller>
      </div>
      {renderCommentModal()}
    </>
  );
}
