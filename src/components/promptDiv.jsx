import MagicIcon from "./magicIcon";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMidjourneyImgs } from "../redux";

const PromptDiv = () => {
    
    const [prompt, setPrompt] = useState("");
    // const [basicResponse, setBasicResponse] = useState({});

    const dispatch = useDispatch();
    const midjourneyImgs = [];
    const token = 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f'
    const handleRequest = async () => {
        let basicResponse;

        const data = JSON.stringify({
            "msg": prompt,
            "ref": "",
            "webhookOverride": ""
        });

        const basic_config = {
            method: 'post',
            url: 'https://api.thenextleg.io/v2/imagine',
            headers: { 
            'Authorization': token, 
            'Content-Type': 'application/json'
            },
            data : data
        };

        axios(basic_config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            basicResponse = response.data    
            // setBasicResponse(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    
        const timeoutId = setTimeout(() => {
            if(basicResponse){
                const msg_config = {
                    method: 'get',
                    url: `https://api.thenextleg.io/v2/message/${basicResponse.messageId}?expireMins=12`,
                    headers: { 
                        'Authorization': token, 
                    },
                    data : basicResponse
                };
                
                axios(msg_config)
                .then(function (response) {
                    console.log(response.data.response.imageUrls);
                    dispatch(setMidjourneyImgs([...response.data.response.imageUrls]));
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }, 80000);

        return () => {
            clearTimeout(timeoutId)
        }
    }

    // const handleRequest = async () => {
    //     try {
    //       const data = JSON.stringify({
    //         "msg": prompt,
    //         "ref": "",
    //         "webhookOverride": ""
    //       });
      
    //       const config = {
    //         method: 'post',
    //         url: 'https://api.thenextleg.io/v2/imagine',
    //         headers: {
    //           'Authorization': 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f',
    //           'Content-Type': 'application/json'
    //         },
    //         data: data
    //       };
      
    //       const response = await axios(config);
    //       console.log(JSON.stringify(response.data));
      
    //       const messageId = response.data.messageId;
    //       console.log(messageId);
          
    //         console.log('This will run after 1 second!')
    //         const imgconfig = {
    //           method: 'get',
    //           url: `https://api.thenextleg.io/v2/message/${messageId}?expireMins=2`,
    //           headers: {
    //             'Authorization': 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f',
    //           },
    //           data:response.data
    //         };
        
    //         const imgResponse = await axios(imgconfig);
    //         console.log(JSON.stringify(imgResponse.data));
    //         dispatch(setMidjourneyImgs(imgResponse.data.imageUrls || []));

    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
      

    return (
        <div className="promptDiv">
            <div className="promptText">
                <div className="label">Prompt</div>
                <div className="text"><textarea id="midprompt" onChange={(e) => setPrompt(e.target.value)}/></div>
            </div>
            <div className="promptCreate" style={{cursor: "pointer"}} onClick={handleRequest}>
                <MagicIcon className="editbutton" />
                <button className="label" >Create</button>
            </div>
        </div>
    )
}

export default PromptDiv;