import styled from "styled-components"


export const Main = styled.main`
    background-color: #D9D9D9;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .createTeam{
        width: 40px;
        margin: 20px;
        margin-left: 20px;
    }

    .filter{
        margin-top: 20px;
        margin-left: 10px;
        width: 50%;
    }

    .searchArea{
        display: none;
    }

    Button{
        background-color: var(--color-green-primary);
        &:hover{
            background-color: var(--color-green-primary-hover);
        }
    }

    @media (min-width: 930px){

        .buttonsFilter{
            margin-left: 13%;
            margin-right: 13%;
            width: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .filter{
            width: 152px;
        }

        .searchArea{
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            width: fit-content;
        }

        Input{
            width: 150px;
            height: 40px;
            border-radius: 8px 0 0 8px;
        }

        .searchArea>Button{
            width: 90px;
            padding: 0 10px;
            font-size: medium;
            border-radius: 0 8px 8px 0;
        }
    }
`

export const CardsContainer = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const TeamCard = styled.li`
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-bottom: 2px solid var(--color-yellow-primary);
    margin-top: 15px;

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
    }

    p{
        margin: 8px 0 8px 10px;
        font-weight: 600;
        text-align: start;
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