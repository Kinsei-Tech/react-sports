import "./style"
import { Main } from "./style"
import Button from "../../Components/Button"
import Input from "../../Components/Input";
import Card from "../../Components/TeamCard";
export const Dashboard = () =>{

    return(

        <>

            <Main>
                
                <div className="buttonsFilter">
                    <div>
                        <Button className="createTeam" color="#000000" backGround="#93C335">+</Button>
                        <Button className="filter" color="#000000" backGround="#93C335">Filtrar por...</Button>
                    </div>
                    

                    <div className="searchArea">
                        <Input placeholder="Pesquisar..." />
                        <Button color="#000000" backGround="#93C335">Buscar</Button>
                    </div>

                </div>

                <div className="teamsCards">
                    <ul>
                        
                        <Card></Card>
                        
                    </ul>
                </div>
            </Main>

            <footer>

            </footer>

        </>
 
    )

}

export default Dashboard