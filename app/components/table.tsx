"use client";

import { cn } from "@/lib/cn";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TableProps<TData, TValue> = {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
};

export default function Table<TData, TValue>({
  data,
  columns,
}: TableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full border border-contrast rounded-lg overflow-y-auto sm:overflow-hidden">
      <table className="w-full text-sm sm:text-base ">
        <thead className="[&_tr]:border-b [&_tr]:border-contrast background-linear rounded-xl">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={cn("h-9 p-1")}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-sm md:text-base [&_tr]:border-b [&_tr]:border-contrast font-semibold">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn(
                    "p-1 sm:py-2 align-middle text-center border-l border-contrast",
                    {
                      "border-l-2 border-primary":
                        cell.column.id === "rank" &&
                        Number(cell.getValue()) <= 4,
                      "border-l-2 border-red-500":
                        cell.column.id === "rank" &&
                        Number(cell.getValue()) > 16,
                    }
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <td key={header.id} className="p-1">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </td>
              ))}
            </tr>
          ))}

          <tr>
            <td colSpan={columns.length} className="p-2 text-sm">
              Glossary: <br/>
              <span className="font-semibold mr-1">G:</span>Games,{" "}
              <span className="font-bold mr-1">W:</span>Wins,{" "}
              <span className="font-bold mr-1">D:</span>Draws,{" "}
              <span className="font-bold mr-1">L:</span>Losses,{" "}
              <br />
              <span className="font-bold mr-1">GF:</span>Goals For,{" "}
              <span className="font-bold mr-1">GA:</span>Goals Against,{" "}
              <span className="font-bold mr-1">GD:</span>Goal Difference,{" "}
              <span className="font-bold mr-1">PTS:</span>Points
       
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
