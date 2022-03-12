import { InputAdornment } from "@mui/material";
import {
  Wrapper,
  Title,
  Footprints,
  Step,
  Input,
  SubmitWrapper,
  Submit,
} from "../../styles/Insight.styles";
import { useState } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../pages/_app";

export default function MainPage() {
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  function onClickSubmit() {
    const day = collection(getFirestore(firebaseApp), "day");
    addDoc(day, {});
  }

  return (
    <Wrapper>
      <Title>오늘의 기록</Title>
      <Footprints>
        <Step>
          <Input required label="날짜" type="date" focused />
          <Input
            required
            label="주문건수"
            InputProps={{
              endAdornment: <InputAdornment position="end">건</InputAdornment>,
            }}
          />
          <Input
            required
            label="거리"
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
          />
          <Input
            required
            label="걸음"
            InputProps={{
              endAdornment: <InputAdornment position="end">보</InputAdornment>,
            }}
          />
          <Input
            required
            label="칼로리"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Kcal</InputAdornment>
              ),
            }}
          />
          <Input
            required
            label="이동거리"
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
          />
          <Input label="특이사항" />
        </Step>
      </Footprints>
      <SubmitWrapper>
        <Submit variant="contained">등록하기</Submit>
        <Submit variant="text">
          <a href="list/">목록보기</a>
        </Submit>
      </SubmitWrapper>
    </Wrapper>
  );
}
