import styled from "styled-components"

export const TeamCard = styled.li`
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-bottom: 2px solid var(--color-yellow-primary);
    margin: 0 auto;

    img{
        height: 20vw;
        align-self: center;
        border: 2px solid var(--color-yellow-primary);
        border-radius: 50%;
        margin-bottom: 15px;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        width: 70%;
    }

    h2{
        margin: 8px 0 0 15px;
        align-self: start;
        font-size: 18px;
    }

    p{
        margin: 8px 0 8px 10px;
        font-weight: 400;
        text-align: start;
        font-size: 10px;
    }

    .infos{
        display: none;
    }

    .btnContainer{
        width: 100%;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .btnContainer>Button{
        width: 40%;
    }

    @media (min-width: 930px) {

        width: 70%;
        flex-direction: row;
        justify-content: space-between;

        div{
            width: 30%;
            padding: 10px;
        }

        img{
            height: 130px;
            margin-bottom: 30px;
            margin-top: 15px;
        }

        .infos{
            display: flex;
        }

        .btnContainer{
            flex-direction: column;
            width: 20%;
            justify-content: center;
            gap: 20px;
        }

        .btnContainer>Button{
            width: 162px;
        }
    }

`
