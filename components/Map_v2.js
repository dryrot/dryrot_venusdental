import React, { useEffect } from "react";
import styled from "styled-components";

const Map2 = (props) => {
  const MapBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: 0px 1px 2px #00000030;
    #map_container {
      width: 565px;
      height: 600px;

      border-bottom: 1px solid #ddd;
    }

    ._desktop {
      ${({ theme }) => theme.mobile`
        display: none;
    `}
    }

    ._mobile {
      display: none;
      ${({ theme }) => theme.mobile`
        display: block;
    `}
    }
  `;

  const AddressBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #c9ada7;
    height: 600px;
    box-sizing: border-box;
    padding: 0px 30px;

    ${({ theme }) => theme.mobile`
       padding: 18px;
       & div:first-child {
        margin-top: 0;
       }
    `}
       ${({ theme }) => theme.tablet`
         padding: 10px 15px;
    `}
  `;

  const AddressList = styled.div`
     width: 100%;
      color: ${(props) => props.theme.darkestSpace};
      font-size: ${(props) => props.theme.fontSize.default};
      margin: 20px 0px;
    &:last-child {
      padding-top: 5px;
      font-size: ${(props) => props.theme.fontSize.default}
      border-bottom: 0;
      box-shadow: none;
    }
    
    em {
      font-style: normal;
      font-weight: 600;
    }
    
    ${(props) => {
      if (props.phone) {
        return `font-size: ${props.theme.fontSize.semiBold}; font-weight: 600;`;
      }
    }}
     ${({ theme }) => theme.mobile`
        margin: 5px 0px;
        font-size: ${theme.mFontSize.reviewSmall};
        word-break: keep-all;
    `}
     ${({ theme }) => theme.tablet`
        font-size: ${theme.mFontSize.default};
    `}
  `;

  const AddressTitle = styled.div`
    font-size: ${(props) => props.theme.fontSize.semiBold};
    color: ${(props) => props.theme.darkestSpace};
    //border-bottom: 1px solid;

    ${({ theme }) => theme.mobile`
        font-size: ${theme.mFontSize.review};
        font-weight: 600;
        margin-top: 15px;
        
    `}
    ${({ theme }) => theme.tablet`
        font-size: ${theme.mFontSize.semiBold};
        font-weight: 600;
        margin-top: 15px;
    `}
  `;

  useEffect(() => {
    const mapCenter = new kakao.maps.LatLng(
      37.525111197891455,
      127.02800845792338
    );

    const clinicCoor = new kakao.maps.LatLng(
      37.524060723212266,
      127.02799512416581
    );
    const mapContainer = document.getElementById("map_container");
    const markers = [
      {
        position: clinicCoor,
        text: "비너스 치과",
      },
    ];
    const mapOptions = {
      center: mapCenter,
      level: 3,
      marker: markers,
    };
    const map = new kakao.maps.StaticMap(mapContainer, mapOptions);
  }, []);

  return (
    <>
      <MapBox>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6014a162109085f1166e97d2dd503983"
        />
        <div id="map_container" />
        <AddressBox>
          <div>
            <AddressTitle>주소</AddressTitle>
            <AddressList>
              강남구 논현로 841, JB미소빌딩 B105호, 비너스치과 (압구정역{" "}
              <em>4번</em>출구)
              <br />
            </AddressList>
            <AddressTitle>진료시간</AddressTitle>
            <AddressList>
              평일 <em>오전 10:30 - 오후 06:00</em>
              <br />
              토요일 오전 <em>10:30 - 오후 02:00</em>
              <br />
              목요일 / 일요일 / 공휴일 휴무
            </AddressList>
            <AddressTitle>문의전화</AddressTitle>
            <AddressList phone>02-3445-9716</AddressList>
          </div>
        </AddressBox>
      </MapBox>
    </>
  );
};

export default Map2;
