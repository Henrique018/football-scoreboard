import Table from "@/components/table";
import { useColumns } from "./columns";

export default function StandingsPage() {
  const columns = useColumns();

  return (
    <div className="flex flex-col px-4 container mx-auto md:pt-8 mb-20 sm:mb-6">
      <h1 className="hidden sm:block text-2xl font-mono mb-4 sm:mb-8">
        Standings
      </h1>

      <Table columns={columns} data={[]} />
    </div>
  );
}
