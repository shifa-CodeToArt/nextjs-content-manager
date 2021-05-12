import axios from "axios";



// to get  activeresource
export default async function activeResource(req,res){
    const axiosRes = await axios.get(`${process.env.API_URL_ACTIVE}/activeresource`);
    const resource = axiosRes.data ;
    return res.send(resource);
}


