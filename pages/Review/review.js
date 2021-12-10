import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import ReviewJson from "./review.json";
import ReviewOne from "./reviewOne";
import WriteArea from "../../components/WriteArea";
import { getReview } from "../../fetch/fetch";
const WriteButtonBox = (props) => {
  const [writeOpen, setWriteOpen] = useState(false);
  const WriteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 50px;

    ._review_btn {
      font-size: 18px;
      cursor: pointer;
    }
    ._review_btn:hover {
      color: #000;
    }
    ._search {
      margin-right: 15px;
    }
    ._write {
    }

    ._close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background-color: ${(props) => props.theme.darkSpace};
      margin-bottom: 2px;
      color: ${(props) => props.theme.lightBeige};
    }

    ._close:hover {
      color: ${(props) => props.theme.lightBeige};
    }

    ${({ theme }) => theme.mobile`
    margin: 0px 15px;
  `}
  `;

  return (
    <>
      <WriteButton>
        <span className="_review_btn _search" title="검색">
          <i className="ri-search-2-line" />
        </span>
        {writeOpen === false ? (
          <span
            className="_review_btn _write"
            title="글쓰기"
            onClick={() => {
              setWriteOpen(writeOpen !== true);
            }}
          >
            <i className="ri-edit-box-line" />
          </span>
        ) : (
          <span
            className="_review_btn _close"
            onClick={() => {
              setWriteOpen(writeOpen !== true);
            }}
          >
            <i className="ri-close-line" />
          </span>
        )}
      </WriteButton>
      <WriteArea writeOpen={writeOpen} refreshReview={props.refreshReview} />
    </>
  );
};

const Review = ({ review }) => {
  const reviewJson = ReviewJson;
  let [reviewList, setReviewList] = useState([...review, ...reviewJson]);

  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    font-weight: 600;
    font-size: 30px;
    ${({ theme }) => theme.mobile`
     font-size: ${theme.mFontSize.semiBold};
     height: 100px;
  `}
  `;

  const ContentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;
    ${({ theme }) => theme.mobile`
      justify-content: end;
    `}
  `;

  const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: calc(100% - 500px);
    overflow: hidden;
    box-shadow: -1px 1px 4px #51515157;

    img {
      height: inherit;
    }

    ${({ theme }) => theme.laptop`
        width: calc(100vw - 100px);
        height: 350px;
    `}

    ${({ theme }) => theme.desktop`
        width: calc(100vw - 60%);
        height: auto;
    `}

    ${({ theme }) => theme.mobile`
        height: 150px;
        width: 100%;
        img {
         height: 150px;
          object-fit: cover;
        }
    `}

    ${({ theme }) => theme.tablet`
          height: 300px;
        width: 100%;
       `}
  `;

  const BoardBack = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BoardBox = styled.div`
    width: calc(100% - 500px);
    ${({ theme }) => theme.laptop`
        width: calc(100vw - 20%);
        height: 350px;
    `}
    ${({ theme }) => theme.desktop`
        width: calc(100vw - 60%);
        height: auto;
    `}
    ${({ theme }) => theme.mobile`
        width: 100%;
    `}

    ${({ theme }) => theme.tablet`
        width: calc(100% - 10%);
       `}
  `;

  const refreshReview = async () => {
    const reviewFetch = await getReview();
    setReviewList([...reviewFetch, ...reviewJson]);
  };

  return (
    <>
      <Head>
        <title>치료후기 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <AppLayout>
        <Title>비너스 치료후기</Title>

        <ContentsBox violet>
          <Contents>
            <img
              src="/image/review_1.jpg"
              width="100%"
              height="auto"
              alt="이미지를 불러올 수 없습니다."
            />
          </Contents>
        </ContentsBox>
        <BoardBack>
          <BoardBox>
            <WriteButtonBox
              refreshReview={() => {
                console.log('refresh!!!!!!!!!!!!!!!1')
                refreshReview();
              }}
            />
            {reviewList.map((item, idx) => {
              let boxId = `review_${idx}`;
              return (
                <ReviewOne
                  review={item}
                  id={boxId}
                  showYn={(id) => {
                    return boxId === id;
                  }}
                />
              );
            })}
          </BoardBox>
        </BoardBack>
      </AppLayout>
    </>
  );
};

Review.getInitialProps = async (ctx) => {
  const reviewFetch = await getReview();
  return { review: reviewFetch };
};

export default Review;
