import Image from "next/image";

const Transactions = () => {
  return (
    <div className="px-2">
    <div className="bg-gray-800 p-5 rounded-lg mt-2">
      <h2 className="mb-5 font-light text-gray-400">Top Products</h2>
      <table className="w-full">
        <thead>
        <tr>
  <td className="py-2 text-white">Name</td>
  <td className="py-2 text-white">Visitors</td>
  <td className="py-2 text-white">Sales</td>
  <td className="py-2 text-white">Price</td>
</tr>
        </thead>
        <tbody>
          {[
            { name: "John Doe", status: "Pending", date: "14.02.2024", amount: "$3.200", statusClass: "bg-yellow-400" },
            { name: "John Doe", status: "Done", date: "14.02.2024", amount: "$3.200", statusClass: "bg-blue-400" },
            { name: "John Doe", status: "Cancelled", date: "14.02.2024", amount: "$3.200", statusClass: "bg-red-400" },
            { name: "John Doe", status: "Pending", date: "14.02.2024", amount: "$3.200", statusClass: "bg-yellow-400" },
            { name: "John Doe", status: "Pending", date: "14.02.2024", amount: "$3.200", statusClass: "bg-yellow-400" },
          ].map((transaction, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2 flex items-center gap-3">
                <Image
                  src="/user.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                {transaction.name}
              </td>
              <td className="py-2">
                <span className={`rounded px-2 py-1 text-sm text-white ${transaction.statusClass}`}>
                  {transaction.status}
                </span>
              </td>
              <td className="py-2">{transaction.date}</td>
              <td className="py-2">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Transactions;
