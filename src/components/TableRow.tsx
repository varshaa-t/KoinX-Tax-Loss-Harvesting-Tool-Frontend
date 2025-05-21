
type TableRowProps = {
    text: string;
}

function TableRow({ text }: TableRowProps) {

  return (
    <td className="py-1">{text}</td>
  )
}

export default TableRow