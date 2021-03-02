import axios from "axios";
import url from "./URL";

async function getSelection(username, userToken){
    const response = await axios.get(`${url}/selections?users_permissions_user.username_contains=${username}`,
    {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    }
    ).catch(error => console.log(error));
    console.log(response);
    return response;
}

export default getSelection;