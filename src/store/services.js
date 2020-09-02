import axios from "axios"
import { NEW_CONNECTOR_2_SEPTMM_SECRET } from "react-native-dotenv"
const newConnector2septmm = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/9686/storyboard/10432/",
  params: { private_key: NEW_CONNECTOR_2_SEPTMM_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnector2sept = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/9686/storyboard/10432/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
