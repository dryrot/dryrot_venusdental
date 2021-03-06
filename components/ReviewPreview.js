import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Review from "/pages/Review/review.json";

const ReviewPreview = (props) => {
  const reviewPreview  = Review.slice(0, 9);
  const ReviewBox = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000030;
    font-size: ${(props) => props.theme.fontSize.default};
    .review_seemore {
      cursor: pointer;
      color: #848bb7;
    }
    ${({ theme }) => theme.mobile`
         width: auto;
         margin-top: 50px;
    `}
  `;

  const ReviewTitle = styled.span`
    width: 100px;
    height: 50px;
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.fontSize.semiBold};
    font-weight: 400;
    line-height: 3;
    padding-left: 20px;

    ${({ theme }) => theme.desktop`
       padding-left: 60px;
    `}

    ${({ theme }) => theme.tablet`
              font-size: ${theme.mFontSize.semiBold};
    `}
  `;

  const ReviewImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url("image/home_review_1.jpg");
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    ${({ theme }) => theme.mobile`
        display: none;
    `}
  `;

  const ReviewListBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0px 12px;
    ul {
      list-style: circle;
      padding-left: 0;
      cursor: pointer;
      margin: 0;
    }

    ul:last-child {
      border-bottom: 0;
      box-shadow: none;
    }

    li {
      margin: 16px 0px;
    }

    ._review_list {
      padding-left: 20px;
      ${({ theme }) => theme.desktop`
        padding-left: 60px;
    `}
    }

    ${({ theme }) => theme.mobile`
        display: none;
    `}

    ${({ theme }) => theme.tablet`
              font-size: ${theme.mFontSize.default};
    `}
  `;

  const ReviewSeeMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    line-height: 3;
    text-align: end;
    cursor: pointer;
    i {
      font-size: 30px;
    }

    &:hover {
      font-weight: 600;
    }

    ${({ theme }) => theme.mobile`
        font-size: ${theme.mFontSize.reviewSmall};
        i {
          font-size: 15px;
        }
    `}
  `;

  const MReviewBox = styled.div`
    display: none;
    ${({ theme }) => theme.mobile`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.mFontSize.review};    
    margin: 10px;
    ul {
      margin: 0;
      list-style: circle;
      margin-bottom: 10px;
    }
    `}
  `;

  const MReviewList = styled.div`
    display: none;
    ${({ theme }) => theme.mobile`
        display: block;
    `}
  `;

  return (
    <ReviewBox>
      <ReviewListBox>
        <div className="_review_box">
          <ReviewTitle>????????????</ReviewTitle>
          <div className="_review_list">
            {reviewPreview.map((item) => {
              return (
                <ul>
                  <li className="_ellipsis">{item.title}</li>
                </ul>
              );
            })}
          </div>
          <Link href="/Review/review">
            <ReviewSeeMore>
              ?????? ??? ????????????
              <i className="ri-arrow-right-s-fill" />
            </ReviewSeeMore>
          </Link>
        </div>
      </ReviewListBox>
      <ReviewImageBox />
      <MReviewBox>
        <MReviewList>
          {reviewPreview.map((item, idx) => {
            if (idx < 4) {
              return (
                <ul>
                  <li>{item.title}</li>
                </ul>
              );
            } else {
              return null;
            }
          })}
          <Link href="/Review/review">
            <ReviewSeeMore>
              ?????? ??? ????????????
              <i className="ri-arrow-right-s-fill" />
            </ReviewSeeMore>
          </Link>
        </MReviewList>
      </MReviewBox>
    </ReviewBox>
  );
};

export default ReviewPreview;
