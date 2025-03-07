import Image from "next/image";


interface IndependentHouseProps{
    colorName: string,
    accentColor: string,
  houseImage: string,
  houseName: string,
  fontSize: string,
  amountPoints: string

}
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
  const colorVariants: { [key: string]: string } = {
    green: "from-green-400 to-emerald-700 outline-emerald-900 shadow-green-500/50 outline-emerald-900",
    pink: "from-pink-400 to-fuchsia-700 outline-fuchsia-900 shadow-pink-500/50 outline-fuchsia-900",
    cyan: "from-cyan-400 to-blue-700 outline-blue-900 shadow-cyan-500/50 outline-blue-900",
    red: "from-red-400 to-rose-700 outline-rose-900 shadow-red-500/50 outline-rose-900",
    purple: "from-purple-400 to-violet-700 outline-violet-900 shadow-purple-500/50 outline-violet-900",
    yellow: "from-yellow-400 to-yellow-700 outline-yellow-900 shadow-yellow-500/50 outline-yellow-900",
    orange: "from-orange-400 to-amber-700 outline-amber-900 shadow-orange-500/50 outline-amber-900",
    gray: "from-gray-400 to-slate-700 outline-slate-900 shadow-gray-500/50 outline-slate-900",
  };

export const HousePointsRow: React.FC<IndependentHouseProps> = ({colorName, houseImage, amountPoints, houseName, accentColor, fontSize}) => {
    return (
<div className="grid place-items-center min-w-screen">
                <div className={`shadow-lg flex flex-row h-14 w-full rounded-xl bg-gradient-to-r hover:outline outline-4 ${colorVariants[colorName] || "from-gray-600 to-gray-700 outline-gray-900 shadow-gray-500/50"}`}>
            {/* Div above will be a button later to take you to the houses page */}
            
            {/* Also the distance between House name and Points would change once I could get it to be smaller then the whole page */}
            <Image
            className=" object-center dark:invert flex-initial"
            src= {houseImage}
            alt= {houseName}
            width={180}
            height={38}
            priority
            />
        
            <p className ={`basis-3/5 font-stretch-150% font-mono font-bold text-${fontSize}xl flex-1 basis-16`}>
            {houseName}
            </p>

            <p className ="basis-2/5 font-stretch-100% font-mono font-medium text-4xl flex-1 basis-16">
            Points: {amountPoints}
            </p>
            
        </div>
        <div className="h-2">

        </div>
                </div>
            
    )
}

export const HousePointsContainer = () => {
    return(
        <div className="bg-slate-800 grid place-items-center min-h-screen min-w-screen"> {/* Any settings on the container should be added to the div to the left (like border, etc.) */}
        <div className=""> 
            {houseData.map((house, index) => (
                <HousePointsRow houseName={house.houseName} colorName={house.colorName} accentColor={house.accentColor} houseImage={house.houseImage} amountPoints={house.amountPoints} fontSize={house.fontSize}/>
                

                
                
            ))}
    </div>
        </div>
    )    
}
