import { InputAdornment } from "@mui/material";
import {
  Wrapper,
  Title,
  Footprints,
  Step,
  Input,
} from "../styles/MainPage.styles";

export default function MainPage() {
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
        </Step>
      </Footprints>
    </Wrapper>
  );
}
