import axios from "axios";

const baseUrl = 'https://dog-api.kinduff.com/api';

const GetFacts = async () => {
    const res = await axios.get(`${baseUrl}/facts`);
    return res.data;
};

const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() *
        (max - min + 1)) + min).toString();
};

const GetAdvice = () => {
    axios
        .get("http://api.adviceslip.com/advice/" +
            getRandomId(1, 200))
        .then((response) => {
            return(response.data.slip.advice);
        });
};


export default GetFacts;