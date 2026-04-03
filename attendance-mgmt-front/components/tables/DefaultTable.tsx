import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { useState } from "react";

type Props<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
};

export default function DefaultTable<TData>({
  data,
  columns,
  enableSorting = true,
  enableFiltering = false,
  enablePagination = false,
  pageSize = 10,
}: Props<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    initialState: {
      pagination: { pageSize },
    },
  });

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left font-semibold text-gray-600 select-none"
                  onClick={
                    enableSorting
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                  style={{ cursor: enableSorting ? "pointer" : "default" }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {enableSorting && (
                    <span className="ml-1 text-gray-400">
                      {{ asc: "↑", desc: "↓" }[
                        header.column.getIsSorted() as string
                      ] ?? "↕"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="divide-y divide-gray-100 bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3 text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

          {table.getRowModel().rows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-gray-400"
              >
                No hay datos para mostrar.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {enablePagination && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
          <span className="text-sm text-gray-500">
            Página {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1 text-sm rounded border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition-colors"
            >
              ← Anterior
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1 text-sm rounded border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition-colors"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Ejemplo de uso ─────────────────────────────────────────────────────────

type User = { id: number; name: string; email: string; role: string };

const EXAMPLE_DATA: User[] = [
  { id: 1, name: "Ana García",    email: "ana@example.com",    role: "Admin" },
  { id: 2, name: "Luis Martínez", email: "luis@example.com",   role: "Editor" },
  { id: 3, name: "María López",   email: "maria@example.com",  role: "Viewer" },
  { id: 4, name: "Carlos Ruiz",   email: "carlos@example.com", role: "Editor" },
];

const EXAMPLE_COLUMNS: ColumnDef<User>[] = [
  { accessorKey: "id",    header: "ID"     },
  { accessorKey: "name",  header: "Nombre" },
  { accessorKey: "email", header: "Email"  },
  { accessorKey: "role",  header: "Rol"    },
];

export function ExampleUsage() {
  return (
    <DefaultTable
      data={EXAMPLE_DATA}
      columns={EXAMPLE_COLUMNS}
      enableSorting
      enablePagination
      pageSize={3}
    />
  );
}
