import MagicIcon from "./magicIcon";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMidjourneyImgs } from "../redux";

const PromptDiv = () => {
    
    const [prompt, setPrompt] = useState("");
    const dispatch = useDispatch();


    const handleRequest = async () => {
        try {
          const data = JSON.stringify({
            "msg": prompt,
            "ref": "",
            "webhookOverride": ""
          });
      
          const config = {
            method: 'post',
            url: 'https://api.thenextleg.io/v2/imagine',
            headers: {
              'Authorization': 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f',
              'Content-Type': 'application/json'
            },
            data: data
          };
      
          const response = await axios(config);
          console.log(JSON.stringify(response.data));
      
          const messageId = response.data.messageId;
          console.log(messageId);
          
            console.log('This will run after 1 second!')
            const imgconfig = {
              method: 'get',
              url: `https://api.thenextleg.io/v2/message/${messageId}?expireMins=2`,
              headers: {
                'Authorization': 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f',
              },
              data:response.data
            };
        
            const imgResponse = await axios(imgconfig);
            console.log(JSON.stringify(imgResponse.data));
            dispatch(setMidjourneyImgs(imgResponse.data.imageUrls || []));

        } catch (error) {
          console.log(error);
        }
      };
      

    return (
        <div className="promptDiv">
            <div className="promptText">
                <div className="label">Prompt</div>
                <div className="text"><textarea id="midprompt" onChange={(e) => setPrompt(e.target.value)}/></div>
            </div>
            <div className="promptCreate">
                <MagicIcon className="editbutton" />
                <button className="label" onClick={handleRequest}>Create</button>
            </div>
        </div>
    )
}

export default PromptDiv;