import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { fetchCapitalGains, type CapitalGainsData } from "@/api/CapitalGains";

type HarvestingCardProps = {
    title: string;
    variant: "primary" | "secondary";
}

const variantClasses = {
    "primary": "bg-white",
    "secondary": "bg-linear-to-br from-card-light-blue to-card-dark-blue text-white"
}

function HarvestingCard({ title, variant }: HarvestingCardProps) {

    const [capitalGains, setCapitalGains] = useState<CapitalGainsData | null>(null);
    const [netShortCapitalGains, setNetShortCapitalGains] = useState<number | null>(null);
    const [netLongCapitalGains, setNetLongCapitalGains] = useState<number | null>(null);

    useEffect(() => {
        fetchCapitalGains().then(res => {
            setCapitalGains(res);
            setNetShortCapitalGains(res.capitalGains.stcg.profits - res.capitalGains.stcg.losses);
            setNetLongCapitalGains(res.capitalGains.ltcg.profits - res.capitalGains.ltcg.losses);
        });
    }, [capitalGains]);

  return (
    <div className={`flex flex-col space-y-2 w-full rounded-md shadow-sm pl-3 pr-10 pt-3 pb-12 ${variantClasses[variant]}`}>
        <div className="text-xl font-semibold">{title}</div>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td className="text-right">Short-term</td>
                    <td className="text-right">Long-term</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TableRow text="Profits"/>
                    <td className="text-right">
                        {capitalGains && `$${Math.ceil(capitalGains.capitalGains.stcg.profits).toLocaleString()}`}
                    </td>
                    <td className="text-right">
                        {capitalGains && `$${Math.ceil(capitalGains.capitalGains.ltcg.profits).toLocaleString()}`}
                    </td>
                </tr>
                <tr>
                    <TableRow text="Losses"/>
                    <td className="text-right">
                        {capitalGains && `-$${Math.ceil(capitalGains.capitalGains.stcg.losses).toLocaleString()}`}
                    </td>
                    <td className="text-right">
                        {capitalGains && `-$${Math.ceil(capitalGains.capitalGains.ltcg.losses).toLocaleString()}`}
                    </td>
                </tr>
                <tr className="font-semibold">
                    <TableRow text="Net Capital Gains"/>
                    <td className="text-right">
                        {netShortCapitalGains && (
                            netShortCapitalGains < 0
                                ? `-$${(Math.abs(Math.ceil(netShortCapitalGains))).toLocaleString()}` 
                                : `$${Math.ceil(netShortCapitalGains).toLocaleString()}`
                        )}
                    </td>
                    <td className="text-right">
                        {netLongCapitalGains && (
                            netLongCapitalGains < 0 
                                ? `-$${(Math.abs(Math.ceil(netLongCapitalGains))).toLocaleString()}`
                                : `$${Math.ceil(netLongCapitalGains).toLocaleString()}`
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="flex items-center space-x-6 font-semibold pt-2">
            <div className="text-xl">{variant == "primary" ? "Realised " : "Effective "}Capital Gains:</div>
            <div className="text-[28px]">${(netShortCapitalGains && netLongCapitalGains) && Math.ceil(netShortCapitalGains + netLongCapitalGains).toLocaleString()}</div>
        </div>
    </div>
  )
}

export default HarvestingCard