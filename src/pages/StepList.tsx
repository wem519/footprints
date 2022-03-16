import { Wrapper, Title } from "../../styles/StepList.styles";
import { useRouter } from "next/router";

export default function StepList() {
  const router = useRouter();
  const { day } = router.query;

  function onClickMoveToDetail(event: any) {
    router.push(`list/${day}`);
  }

  return (
    <Wrapper>
      <Title>기록 리스트</Title>
      <div>
        <div onClick={onClickMoveToDetail}>3.9(수)</div>
        <div onClick={onClickMoveToDetail}>3.10(목)</div>
        <div onClick={onClickMoveToDetail}>3.1(금)</div>
      </div>
    </Wrapper>
  );
}
