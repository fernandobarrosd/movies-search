import { Director } from "../Director";
import { Text, List } from "./style";

export const DirectorList = () => {
    
    return (
        <>
           <Text>Directors</Text>
           <List>
                <Director/>
                <Director/>
                <Director/>
           </List>
        </>
    
    )
}