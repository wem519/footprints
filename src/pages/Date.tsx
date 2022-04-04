import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  orderBy,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { firebaseApp } from "../../pages/_app";

export default function Oneday() {
  const router = useRouter();
  useEffect(() => {
    async function onLoad() {
      const dayRef = query(
        collection(getFirestore(firebaseApp), "day"),
        where("date", "==", "2022-04-06")
      );
      const result = await getDocs(dayRef);
      const docs = result.docs.map((el) => el.data());
      console.log(docs);
    }
    onLoad();
  }, []);

  //   useEffect(() => {
  //     async function onLoad() {
  //       const day = collection(getFirestore(firebaseApp), "day");

  //       const result = await getDocs(day);
  //       orderBy("date", "desc");
  //       const docs = result.docs.map((el) => el.data());

  //       console.log(docs);
  //     }
  //     onLoad();
  //   }, []);

  return (
    <>
      <div>{router.query.id}상세페이지</div>
    </>
  );
}
