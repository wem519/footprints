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

export default function StepList() {
  const router = useRouter();
  const [daylist, setDaylist] = useState([]);
  useEffect(() => {
    async function onLoad() {
      const daylist = collection(getFirestore(firebaseApp), "daylist");
      const result = await getDocs(daylist);
      const docs = result.docs.map((el) => el.data());
      setDaylist(docs);
      console.log(docs);
    }
    onLoad();
  }, []);

  return (
    <Wrapper>
      <Title>기록 리스트</Title>
      <div>
        {/* {daylist.map((el) => {
          <div>{el}</div>;
        })} */}
        <div>
          {daylist.map((el) => (
            <div key={el}>{el.date}</div>
          ))}
        </div>
        {/* <div onClick={onClickMoveToDetail}>3.9(수)</div>
        <div onClick={onClickMoveToDetail}>3.10(목)</div>
        <div onClick={onClickMoveToDetail}>3.1(금)</div> */}
      </div>
    </Wrapper>
  );
}
