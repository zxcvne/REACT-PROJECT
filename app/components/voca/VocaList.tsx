import { vocaType } from "@/app/type/vocaType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VocaList() {
  const params = useParams();
  const [voca, setVoca] = useState<vocaType[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/voca");
        const data = await res.json();
        setVoca(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  if (!voca)
    return <div className="container w-300 mx-auto my-10">Not Found</div>;
  return (
    <div className="flex items-center justify-center container w-300 mx-auto my-10">
      <table className="table-auto border border-gray-300 m-5">
        <thead>
          <tr className="border border-gray-300 text-center h-10">
            <th className="border-r border-gray-300">
              단어 <button></button>
            </th>
            <th>
              뜻 <button></button>
            </th>
          </tr>
        </thead>
        <tbody>
          {voca.map((b) => (
            <tr className="border border-gray-300 text-center h-10" key={b.id}>
              <td className="border-r border-gray-300 w-40">{b.eng}</td>
              <td className="w-80">{b.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
