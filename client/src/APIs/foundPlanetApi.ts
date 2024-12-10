import axios from "axios";

export const FoundPlanetData = async () => {
    try {

        const {data} = await axios.get("http://localhost:3000/api/planets");
        return data
        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
