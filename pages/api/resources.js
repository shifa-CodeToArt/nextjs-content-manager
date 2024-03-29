import axios from "axios";
// to get all resources
export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch(`${process.env.API_URL}/resources`);
    const data = await dataRes.json();
    res.send(data);
  }

  // to add || update resources 
  if (req.method === "POST" || req.method === "PATCH") {
    console.log(req.body);
    const {id, title, description, link, time, priority } = req.body;
    if (!title || !description || !link || !time || !priority) {
      return res.status(422).send("Data are missing!");
    }

    const url  = req.method ==="POST" 
    ? `${process.env.API_URL}/resources` 
    : `${process.env.API_URL}/resources/${id}`

    try {
      const axiosData = await axios[req.method.toLowerCase()](url, req.body);
    } catch {
      return res.status(422).send("Data cannot be stored");
    }
  }
}
