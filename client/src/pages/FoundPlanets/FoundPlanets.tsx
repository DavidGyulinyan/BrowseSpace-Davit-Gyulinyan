import { useTranslation } from "react-i18next";
import { FoundPlanetsType } from "../../Models/FoundPlanetsType";
import { FoundPlanetData } from "../../APIs/foundPlanetApi";
import { useEffect, useState } from "react";

const FoundPlanets = () => {
    const [planetData, setPlanetData] = useState<FoundPlanetsType[]>([]);
    const { t } = useTranslation();
    const foundPlanetsTitles: FoundPlanetsType = {
        planetName: "newPlanetName",
        galaxyName: "planetGalaxyName",
        diameter: "planetDiameter",
        distance: "planetDistance",
        finderName: "finder",
        email: "userEmail"
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FoundPlanetData();
                setPlanetData(data)
            } catch (error) {
                console.error("Error fetching planet data:", error);

            }
        }
        fetchData()
    }, []);

    console.log(planetData);

    return (
        <>
            <div className="mt-20 container mx-auto">
                <div className="table-container overflow-x-auto">
                    <table className={`table-auto w-full`}>
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">{t(foundPlanetsTitles.planetName)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.galaxyName)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.diameter)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.distance)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.finderName)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.email)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                planetData.map((planetInfo, index) =>
                                    <tr key={index}>
                                        <td className="border px-4 py-2 text-center">{planetInfo.planetName}</td>
                                        <td className="border px-4 py-2 text-center">{planetInfo.galaxyName}</td>
                                        <td className="border px-4 py-2 text-center">{planetInfo.diameter}</td>
                                        <td className="border px-4 py-2 text-center">{planetInfo.distance}</td>
                                        <td className="border px-4 py-2 text-center">{planetInfo.finderName}</td>
                                        <td className="border px-4 py-2 text-center">{planetInfo.email}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FoundPlanets;
