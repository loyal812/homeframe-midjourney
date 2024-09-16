import MagicIcon from "./magicIcon";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMidjourneyImgs } from "../redux";

const PromptDiv = () => {
    
    const [prompt, setPrompt] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [opacityValue, setOpacity] = useState(1);
    // const [basicResponse, setBasicResponse] = useState({});

    const dispatch = useDispatch();
    const midjourneyImgs = [];
    const token = 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f'
    const handleRequest = async () => {
        setLoading(true);
        setOpacity(0.3);
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
                    setLoading(true);
                    setOpacity(1);
                    console.log(response.data.response.imageUrls);
                    dispatch(setMidjourneyImgs([...response.data.response.imageUrls]));
                })
                .catch(function (error) {
                    setOpacity(1);
                    setLoading(false);
                    console.log(error);
                });
            }
        }, 80000);

        return () => {
            clearTimeout(timeoutId)
        }
    }

    return (
        <div className="promptDiv">
            <div className="promptText">
                <div className="label">Prompt</div>
                <div className="text"><textarea id="midprompt" onChange={(e) => setPrompt(e.target.value)}/></div>
            </div>
            <button className="promptCreate" disabled={isLoading} style={{opacity: opacityValue}}
                onClick={handleRequest}>
                <MagicIcon className="editbutton" />
                <div className="label" >Create</div>
            </button>
        </div>
    )
}

export default PromptDiv;