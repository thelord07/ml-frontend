import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import axios from "axios";

const mlApi = axios.create({
    baseURL:  publicRuntimeConfig.backendUrl,
})

export default mlApi;