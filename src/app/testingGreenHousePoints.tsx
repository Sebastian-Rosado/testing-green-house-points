import Image from "next/image";


export function HousePointsContainer() {
    return(
        <div>
        <div className = "flex flex-row max-w-5xl h-14 w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-950 hover:outline outline-4 outline-green-900">
            {/* Div above will be a button later to take you to the houses page */}
            {/* Also the distance between House name and Points would change once I could get it to be smaller then the whole page */}
            <Image
            className=" object-center dark:invert flex-initial"
            src="/globe.svg"
            alt="Green Ivy"
            width={180}
            height={38}
            priority
            />
        
            <p className ="basis-1/2 font-stretch-150% font-mono font-bold text-5xl flex-1 basis-16">
            Green Ivy
            </p>

            <p className ="basis-1/2 font-stretch-100% font-mono font-medium text-5xl flex-1 basis-64">
            Points: 1264
            </p>
            
        </div>
        <div className="h-1">

        </div>
        <div className = "flex flex-row max-w-5xl h-14 w-full rounded-xl bg-gradient-to-r from-pink-400 to-fuchsia-700 hover:outline outline-4 outline-fuchsia-900">
            {/* Div above will be a button later to take you to the houses page */}
            {/* Also the distance between House name and Points would change once I could get it to be smaller then the whole page */}
            <Image
            className=" object-center dark:invert flex-initial"
            src="/globe.svg"
            alt="Pink Panthers"
            width={180}
            height={38}
            priority
            />
        
            <p className ="basis-1/2 font-stretch-150% font-mono font-bold text-5xl flex-1 basis-16">
            Pink Panthers
            </p>

            <p className ="basis-1/2 font-stretch-100% font-mono font-medium text-5xl flex-1 basis-64">
            Points: 578
            </p>
            
        </div>
        </div>
    )    
}