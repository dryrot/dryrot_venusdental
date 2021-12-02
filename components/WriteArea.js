import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WriteBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const WriteSlide = styled.div`
  &.show {
    height: 500px;
    transition: height 0.7s ease-out;
    margin-bottom: 40px;
  }
  &.hide {
    height: 0px;
    transition: height 0.7s ease-out;
    margin-bottom: 0px;
  }
  transition: height 0.7s ease-out;
`;

const WTextBox = styled.div`
  input,
  textarea {
    font-family: noto_serif;
    border: 1px solid #ccc;
  }
  input {
    padding-left: 12px;
  }
  textarea {
    resize: none;
  }
`;

const WTitAuthorBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const WTitleArea = styled.input`
  width: calc(100% - 200px);
  height: 40px;
  margin-right: 20px;
  font-size: ${(props) => props.theme.mFontSize.default};
`;

const WAuthorArea = styled.input`
  width: 180px;
  height: 40px;
  padding: 10px;
  font-size: ${(props) => props.theme.mFontSize.default};
`;

const WTextArea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 15px;
  font-size: ${(props) => props.theme.mFontSize.default};

  ${({ theme }) => theme.mobile`
    padding: 5px;
    font-size: ${(props) => props.theme.mFontSize.review};
    `}
`;

const SubmitButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  background-color: ${(props) => props.theme.darkSpace};
  color: ${(props) => props.theme.lightBeige};
  font-size: 15px;
  cursor: pointer;
`;

const WriteArea = (props) => {
  return (
    <WriteBox>
      <WriteSlide className={props.writeOpen ? "show" : "hide"}>
        <WTextBox>
          <WTitAuthorBox>
            <WTitleArea placeholder="제목" />
            <WAuthorArea placeholder="글쓴이" />
          </WTitAuthorBox>
          <WTextArea placeholder="후기를 입력해주세요." />
        </WTextBox>

        <SubmitButtonBox>
          <SubmitButton>제출</SubmitButton>
        </SubmitButtonBox>
      </WriteSlide>
    </WriteBox>
  );
};

export default WriteArea;
