"use client";

import { Trash } from "lucide-react";
import { useTransition } from "react";

import { CellContext, ColumnDef } from "@tanstack/react-table";

import Load from "./loader";
import { deleteEmail } from "@/lib/actions/email.actions";

type EmailType = {
  email: string;
};
export const emailColumn: ColumnDef<EmailType>[] = [
  {
    accessorKey: "sn",
    header: () => <h1 className="tb-header">SN</h1>,
    cell: (info: CellContext<EmailType, unknown>) => info.row.index + 1,
  },

  {
    accessorKey: "email",
    header: () => <h1 className="tb-header">EMAIL</h1>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const email = row.original.email;

      return <TableActions email={email} />;
    },
  },
];

function DeleteItem({ email }: { email: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      onClick={() =>
        startTransition(async () => {
          await deleteEmail(email);
        })
      }
    >
      {isPending ? (
        <Load />
      ) : (
        <div className="cursor-pointer">
          <Trash className="text-red-500 size-4" />
          {/* <span className="dashboard-action-text">DELETE</span> */}
        </div>
      )}
    </div>
  );
}

export const TableActions = ({ email }: { email: string }) => {
  return (
    <div className="inline-flex items-center space-x-4">
      <DeleteItem email={email} />
    </div>
  );
};
