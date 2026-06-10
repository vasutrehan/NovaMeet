const IS_PROD = process.env.NODE_ENV === "production" || process.env.REACT_APP_BACKEND_URL !== undefined;
const renderHost = process.env.REACT_APP_BACKEND_URL;
const backendUrl = renderHost ? (renderHost.startsWith("http") ? renderHost : `https://${renderHost}`) : "https://apnacollegebackend.onrender.com";

const server = IS_PROD ? backendUrl : "http://localhost:8000";


export default server;