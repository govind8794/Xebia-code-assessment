import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import{GET_STAR_GAZERS_COUNT} from '../gql/gqlquery'



export const useTopic = (topic) =>{
    const [topicRelated, setTopicRelated] = useState(''); 
    useEffect(() => {
        setTopicRelated(topic);
    }, [topic])
    const response = useQuery(GET_STAR_GAZERS_COUNT, {
        variables: { topicRelated: topicRelated },
      });
    return  response ;
}