import BulletPoint from "@/icons/BulletPoint"

type DisclaimerItemsProps = {
    text: string;
}

function DisclaimerItem({ text }: DisclaimerItemsProps) {

  return (
    <li className="flex items-center space-x-1">
        <BulletPoint/>
        <div className="leading-[22px]">{text}</div>
    </li>
  )
}

export default DisclaimerItem