import Image from "next/image";

  {/* setting up each prop */}
interface IndependentHouseProps{
    colorName: string,
    accentColor: string,
  houseImage: string,
  houseName: string,
  fontSize: string,
  amountPoints: string

}
  {/* setting up the fake dataset */}
const houseData = [
    {
        colorName: "green",
        accentColor: "emerald",
      houseImage: "/globe.svg",
      houseName: "Green Ivy",
      fontSize: "5",
      amountPoints: "1264"
    
    },
    {
        colorName: "pink",
        accentColor: "fuchsia",
      houseImage: "/globe.svg",
      houseName: "Pink Panthers",
      fontSize: "5",
      amountPoints: "789"
    
    },
    {
        colorName: "cyan",
        accentColor: "blue",
      houseImage: "/globe.svg",
      houseName: "Blue Thunder",
      fontSize: "5",
      amountPoints: "978"
    
    },
    {
        colorName: "red",
        accentColor: "rose",
      houseImage: "/globe.svg",
      houseName: "Red Phenix",
      fontSize: "5",
      amountPoints: "1678"
    
    },
    {
        colorName: "purple",
        accentColor: "violet",
      houseImage: "/globe.svg",
      houseName: "Purple Reign",
      fontSize: "5",
      amountPoints: "789"
    
    },
    {
        colorName: "yellow",
        accentColor: "yellow",
      houseImage: "/globe.svg",
      houseName: "Golden Hearts",
      fontSize: "5",
      amountPoints: "682"
    
    },
    {
        colorName: "orange",
        accentColor: "amber",
      houseImage: "/globe.svg",
      houseName: "Orange Supernova",
      fontSize: "4",
      amountPoints: "827"
    
    },
    {
        colorName: "gray",
        accentColor: "slate",
      houseImage: "/globe.svg",
      houseName: "Silver Knights",
      fontSize: "5",
      amountPoints: "998"
    
    }
  ]


export const HousePointsRow: React.FC<IndependentHouseProps> = ({colorName, houseImage, amountPoints, houseName, accentColor, fontSize}) => {
    return (
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    )
}

export const HousePointsContainer = () => {
    return(
        <div className="bg-green-700 grid place-items-center min-h-screen min-w-screen"> {/* Any settings on the container should be added to the div to the left (like border, etc.) */}
        <div className=""> 
            {houseData.map((house, index) => (
                <HousePointsRow houseName={house.houseName} colorName={house.colorName} accentColor={house.accentColor} houseImage={house.houseImage} amountPoints={house.amountPoints} fontSize={house.fontSize}/>
                

                
                
            ))}
    </div>
        </div>
    )    
}
