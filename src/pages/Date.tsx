import { useRouter } from "next/router";

export default function Oneday() {
  const router = useRouter();

  return (
    <>
      <div>{router.query.day}상세페이지</div>
    </>
  );
}
