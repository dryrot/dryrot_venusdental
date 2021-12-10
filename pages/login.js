import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";
import { VDiv } from "../components/VDiv";

const Login = () => {
  const LoginBox = styled.div`
    width: 100%;
    height: 100vh;
  `;
  const LoginId = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    padding: 10px;
    font-size: ${(props) => props.theme.mFontSize.review};
  `;
  const LoginPassword = styled.input`
    width: 100%;
    height: 40px;
    margin: 20px 0px;
    outline: none;
    padding: 10px;
    font-size: ${(props) => props.theme.mFontSize.review};
  `;

  const LoginSubmitBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const LoginSubmitButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 40px;
    background-color: ${(props) => props.theme.darkSpace};
    color: ${(props) => props.theme.lightBeige};
  `;

  return (
    <>
      <Head>
        <title>앞니 심미보철 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>

      <AppLayout>
        <VDiv
          element={
            <div>
              <VenusTitle text="관리자 로그인 페이지" />
              <LoginBox>
                <LoginId placeholder="ID 입력" />
                <LoginPassword placeholder="비밀번호 입력" type="password" />
                <LoginSubmitBox>
                  <LoginSubmitButton>제출</LoginSubmitButton>
                </LoginSubmitBox>
              </LoginBox>
            </div>
          }
          color="beige"
        />
      </AppLayout>
    </>
  );
};

export default Login;
