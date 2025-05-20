import DownArrow from "@/icons/DownArrow";
import UpArrow from "@/icons/UpArrow";
import { useState } from "react"
import DisclaimerItem from "./DisclaimerItem";

function DisclaimerSection() {
  
  const [isOpen, setIsOpen] = useState(false);

  const textArray = [
    { text: "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions." },
    { text: "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules." },
    { text: "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange." },
    { text: "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term." },
    { text: "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted." }
  ]

  return (
    <div className="flex flex-col space-y-4 border border-primary-blue bg-secondary-blue rounded-md py-3 px-3 mt-6 mx-10 sm:mx-12 md:mx-20">
        <div className="flex items-center justify-between hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center space-x-2">
                <img src="/src/icons/Info.png" className="size-5"/>
                <div className="font-semibold tracking-wide">Important Notes & Disclaimers</div>
            </div>
            <div>
                {isOpen ? <UpArrow/> : <DownArrow/>}
            </div>
        </div>
        {isOpen && 
          <ul className="flex flex-col space-y-2">
            {textArray.map((listItem, index) => (
              <DisclaimerItem {...listItem} key={index}/>
            ))}
          </ul>
        }
    </div>
  )
}

export default DisclaimerSection