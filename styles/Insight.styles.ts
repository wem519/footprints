import styled from "@emotion/styled"
import { Button, TextField, } from "@mui/material"

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;   
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 30px;
`

export const Footprints = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    /* width: 200px; */
    margin-bottom: 20px;
`
export const Step = styled.div`
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
export const Input = styled(TextField)`
    
`
export const SubmitWrapper = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
`
export const Submit = styled(Button)`
    width: 90px;
    
`
