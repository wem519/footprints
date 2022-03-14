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
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { firebaseApp } from "../../pages/_app";

export default function MainPage() {
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [distance, setDistance] = useState("");
  const [walk, setWalk] = useState("");
  const [kcal, setKcal] = useState("");
  const [walkdistance, setWalkdistance] = useState("");
  const [significant, setSignificant] = useState("");

  function onChangeDate(event: any) {
    setDate(event.target.value);
    console.log(date);
  }
  function onChangePickup(event: any) {
    setPickup(event.target.value);
    console.log(pickup);
  }
  function onChangeDistance(event: any) {
    setDistance(event.target.value);
  }
  function onChangeWalk(event: any) {
    setWalk(event.target.value);
  }
  function onChangeKcal(event: any) {
    setKcal(event.target.value);
  }
  function onChangeWalkdistance(event: any) {
    setWalkdistance(event.target.value);
  }
  function onChangeSignificant(event: any) {
    setSignificant(event.target.value);
  }

  async function onClickSubmit() {
    const day = collection(getFirestore(firebaseApp), "day");
    try {
      await addDoc(day, {
        // date: date,
        // pickup: pickup,
        // distance: distance,
        // walk: walk,
        // kcal: kcal,
        // walkdistance: walkdistance,
        // significant: significant,
        date: "2022.03.06",
      });

      console.log(day);
    } catch (error) {
      console.log(error);
    }
    await setDoc(doc(collection(getFirestore(firebaseApp), `daylist`), date), {
      date: "2022.03.06",
    });
  }

  return (
    <Wrapper>
      <Title>오늘의 기록</Title>
      <Footprints>
        <Step>
          <Input
            required
            label="날짜"
            type="date"
            focused
            onChange={onChangeDate}
          />
          <Input
            required
            label="주문건수"
            onChange={onChangePickup}
            InputProps={{
              endAdornment: <InputAdornment position="end">건</InputAdornment>,
            }}
          />
          <Input
            required
            label="거리"
            onChange={onChangeDistance}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
          />
          <Input
            required
            label="걸음"
            onChange={onChangeWalk}
            InputProps={{
              endAdornment: <InputAdornment position="end">보</InputAdornment>,
            }}
          />
          <Input
            required
            label="칼로리"
            onChange={onChangeKcal}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Kcal</InputAdornment>
              ),
            }}
          />
          <Input
            required
            label="이동거리"
            onChange={onChangeWalkdistance}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
          />
          <Input label="특이사항" onChange={onChangeSignificant} />
        </Step>
      </Footprints>
      <SubmitWrapper>
        <Submit variant="contained" onClick={onClickSubmit}>
          등록하기
        </Submit>
        <Submit variant="text">
          <a href="list/">목록보기</a>
        </Submit>
      </SubmitWrapper>
    </Wrapper>
  );
}
