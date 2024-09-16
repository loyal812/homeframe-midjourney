import MagicIcon from "./magicIcon";
import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setLoading, setMidjourneyImgs } from "../redux";

const PromptDiv = () => {
    const { general } = useSelector((state) => state);
    const { loading } = general;
    const [prompt, setPrompt] = useState("");
    const [opacityValue, setOpacity] = useState(1);
    // const [basicResponse, setBasicResponse] = useState({});

    const dispatch = useDispatch();
    const midjourneyImgs = [];
    const token = 'Bearer 272db278-4705-4baf-bd70-79ceeb19b63f'
    const handleRequest = async () => {
        dispatch(setLoading(true))

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
            dispatch(setLoading(false));
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
                    setOpacity(1);
                    console.log(response.data.response.imageUrls);
                    dispatch(setLoading(false));
                    dispatch(setMidjourneyImgs([...response.data.response.imageUrls]));
                })
                .catch(function (error) {
                    setOpacity(1);
                    dispatch(setLoading(false));
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
                <div className="text"><textarea id="midprompt" onChange={(e) => setPrompt(e.target.value)} readOnly={loading} /></div>
            </div>
            <button className="promptCreate" style={{opacity: opacityValue}} disabled={loading}
                onClick={handleRequest}>
                <MagicIcon className="editbutton" />
                <div className="label" >Create</div>
            </button>
        </div>
    )
}

export default PromptDiv;