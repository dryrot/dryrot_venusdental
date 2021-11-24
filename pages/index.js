import React, { useEffect } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";
import Map2 from "../components/Map_v2";
import ReviewPreview from "../components/ReviewPreview";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileIndex from "./mobileIndex";
import Link from "next/link";

export default function Home() {
  const Desktop = styled.div`
    display: block;

    ${({ theme }) => theme.mobile`
        display: none;
    `}
  `;

  const Section = styled.div`
    //width: 100%;
    width: 100vw;
    display: inline-block;
    align-items: baseline;
    justify-content: center;
    padding-bottom: 90px;
    background-color: #fff;
    &:nth-child(odd) {
      background-color: ${(props) => props.theme.lightBeige};
    }

    &:last-child {
      padding-bottom: 100px;
    }

    ${(props) => {
      if (props.beige) {
        return `background-color: ${props.theme.lightBeige};`;
      }
    }}

    ${({ theme }) => theme.mobile`
        padding: ${(props) => props.padding};
    `}
  `;

  const ContentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;
    //height: 600px;
    overflow: hidden;

    ${(props) => {
      if (props.violet) {
        return `background-color: ${props.theme.darkSpace};`;
      }
    }}

    &.diff {
      ${({ theme }) => theme.mobile`
        display: none;
    `}
    }
    

    
  `;

  const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: calc(100% - 35%);
    height: auto;
    //&.imageBox {
    //  overflow: hidden;
    //  box-shadow: -1px 1px 4px #51515157;
    //}
    
    .imageBox {
      width: 100%;
      height: 600px;
      background-image: url("image/main_image.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center 22%;
      ${({ theme }) => theme.desktop`
      height: 750px;
    `}
      ${({ theme }) => theme.laptop`
      height: 500px;
    `}
      ${({ theme }) => theme.tablet`
      height: 400px;
    `}
    }

    ${({ theme }) => theme.desktop`
        height: auto !important;
    `}

    ${({ theme }) => theme.mobile`
        width: 100%;
    `}
    
    ${({ theme }) => theme.tablet`
       width: calc(100% - 15%);
    `}
    
    &.m_img1 {
      justify-content: center;
    }
    &.m_img2 {
      justify-content: left;
    }
    &.m_img3 {
      justify-content: right;
    }
    &.m_img4 {
      justify-content: center;
    }
  `;

  const TitleBox = styled.div`
    position: absolute;
    left: 0;
    top: 530px;
    display: block;
    width: 500px;
    height: 350px;
    background-color: ${(props) => props.theme.darkSpace};
    //border-radius: 0px 10px 10px 0px;
    font-size: ${(props) => props.theme.fontSize.default};
    padding: 0px 150px;
    box-shadow: ${(props) => props.theme.boxShadow};
  `;

  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    font-weight: 600;
    font-size: 30px;
    ${({ theme }) => theme.mobile`
        font-size: ${theme.mFontSize.default};
        height: 100px;
    `}
  `;

  const ImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    margin-right: 30px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      overflow: hidden;
      box-shadow: ${(props) => props.theme.boxShadow};
    }

    span {
      position: absolute;
      font-weight: 400;
      color: #fff;
      font-size: ${(props) => props.theme.fontSize.semiBold};
      text-shadow: 1px 1px 2px #0000005e;
      ${({ theme }) => theme.laptop`
       font-size: 100%;
    `}
      ${({ theme }) => theme.tablet`
       font-size: 100%;
    `}
    }
    ${({ theme }) => theme.tablet`
       margin-right: 15px;
    `}
  `;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <Head>
        <title>초기화면 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <AppLayout>
        <Desktop>
          <Section>
            <Title>자연스럽게 아름다워지는 치과, 비너스</Title>
            <ContentsBox violet>
              <Contents className="imageBox">
                <div className="imageBox"></div>
              </Contents>
            </ContentsBox>
          </Section>
          {/* End of Section1 */}
          <Section padding="30px 0px 0px 0px">
            <VenusTitle text="치료 분야" underline={true} index={true} />
            <ContentsBox className="diff">
              <Contents>
                <Link href="/simmi">
                  <ImgBox>
                    <img
                      src="/image/home_profession_1.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                    <span>앞니 심미보철</span>
                  </ImgBox>
                </Link>
                <Link href="/itmom">
                  <ImgBox>
                    <img
                      src="/image/home_profession_2.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                    <span>앞니 잇몸치료</span>
                  </ImgBox>
                </Link>
                <Link href="/implant">
                  <ImgBox>
                    <img
                      src="/image/home_profession_3.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                    <span>임플란트</span>
                  </ImgBox>
                </Link>
                <Link href="/gyojung">
                  <ImgBox>
                    <img
                      src="/image/home_profession_4.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                    <span>앞니교정</span>
                  </ImgBox>
                </Link>
              </Contents>
            </ContentsBox>
          </Section>
          {/* End of Section2 */}

          <Section padding="30px 0px 0px 0px">
            <VenusTitle text="후기" underline={true} index={true} />
            {/* <Section beige> */}
            <ContentsBox>
              <Contents>
                <ReviewPreview />
              </Contents>
            </ContentsBox>
            {/* </Section> */}
          </Section>
          <Section padding="30px 0px 0px 0px" beige>
            <ContentsBox violet>
              <Contents>
                <Map2 />
                {/* <ClinicInfo /> */}
              </Contents>
            </ContentsBox>
          </Section>
        </Desktop>

        <MobileIndex />
      </AppLayout>
    </>
  );
}
