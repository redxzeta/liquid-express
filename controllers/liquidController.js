import fetch from "node-fetch";
import { API_KEY, LIQUID_URL } from "../keys.js";

export const getLiquid = async (req, res) => {
  try {
    const response = await fetch(LIQUID_URL, {
      headers: {
        Authorization: `Apikey ${API_KEY}`,
      },
    });
    const { result } = await response.json();
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error" });
  }
};
