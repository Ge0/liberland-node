import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const generateNewKeyAPI = () => new Promise<Record<string, any>>( async (resolve, reject) => {
  try {
    const response = await fetch("http://localhost:9933", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "id":1,
        "jsonrpc":"2.0",
        "method": "author_rotateKeys",
        "params": []
      })
    });
    if (response.ok) {
      resolve(response.json());
    } else {
      reject("Failed to generate a new key.")
    }
  } catch (error) {
    reject(error);
  }
});

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await generateNewKeyAPI();
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({error: "Failed to generate a new key."});
  }
}

export default handler;