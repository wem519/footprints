import { Wrapper, Title } from "../../styles/StepList.styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { firebaseApp } from "../../pages/_app";
import Insight from "./Insight";

export default function StepList() {
  const router = useRouter();
  const [daylist, setDaylist] = useState([]);

  useEffect(() => {
    async function onLoad() {
      const day = collection(getFirestore(firebaseApp), "day");
      const result = await getDocs(day);
      const docs = result.docs.map((el) => el.data());
      setDaylist(docs);
      console.log(docs);
    }
    onLoad();
  }, []);

  function onClickMoveToDetail() {
    router.push(`list/${id}`);
  }

  return (
    <Wrapper>
      <Title>기록 리스트</Title>

      <div>
        {/* {daylist.map((el) => {
          <div>{el}</div>;
        })} */}
        <div onClick={onClickMoveToDetail}>
          {daylist.map((el) => (
            <div key={el.index}>{el.date}</div>
          ))}
        </div>
        {/* <div onClick={onClickMoveToDetail}>3.9(수)</div>
        <div onClick={onClickMoveToDetail}>3.10(목)</div>
        <div onClick={onClickMoveToDetail}>3.1(금)</div> */}
      </div>
    </Wrapper>
  );
}
