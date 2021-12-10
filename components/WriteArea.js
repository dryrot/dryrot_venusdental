import React, { useRef } from "react";
import styled from "styled-components";
import { createReview } from "../fetch/fetch";

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
    outline: none;
  }
  input {
    padding-left: 12px;
  }
  textarea {
    resize: none;
  }
  ${({ theme }) => theme.mobile`
    margin: 0px 15px;
    width: calc(100% - 28px);
  `}
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
  ${({ theme }) => theme.mobile`
    margin: 0px 15px;
  `}
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

const PasswordBox = styled.input`
  width: 100px;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-right: 20px;
  outline: none;
  font-size: ${(props) => props.theme.mFontSize.reviewSmall};
  font-family: noto_serif;
`;

const WriteArea = (props) => {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const contentRef = useRef(null);
  const passwordRef = useRef(null);

  const submitReview = async () => {
    const param = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
      password: passwordRef.current.value,
      show_yn: "Y",
    };
    const paramName = ["제목", "글쓴이", "내용", "비밀번호"];
    let isOkay = true;
    let missedIdx = "";
    let paramKeys = Object.keys(param);
    for (let i = 0; paramKeys.length > i; i++) {
      if (param[paramKeys[i]] === "") {
        isOkay = false;
        missedIdx = i;
        break;
      }
    }
    if (isOkay === true) {
      const createFetch = await createReview(param);
      if (createFetch.status === 200) {
        props.refreshReview();
      }
    } else alert(paramName[missedIdx] + "를 입력해주세요.");
  };

  return (
    <WriteBox>
      <WriteSlide className={props.writeOpen ? "show" : "hide"}>
        <WTextBox>
          <WTitAuthorBox>
            <WTitleArea placeholder="제목" ref={titleRef} autocomplete="off" />
            <WAuthorArea
              placeholder="글쓴이"
              ref={authorRef}
              autocomplete="off"
            />
          </WTitAuthorBox>
          <WTextArea
            placeholder="후기를 입력해주세요."
            ref={contentRef}
            autocomplete="off"
          />
        </WTextBox>

        <SubmitButtonBox>
          <PasswordBox
            placeholder="비밀번호"
            type="password"
            ref={passwordRef}
            autocomplete="off"
          />
          <SubmitButton onClick={() => submitReview()}>제출</SubmitButton>
        </SubmitButtonBox>
      </WriteSlide>
    </WriteBox>
  );
};

export default WriteArea;
