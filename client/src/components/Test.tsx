import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

interface Column {
  name: string;
  uid: string;
  sortable?: boolean;
}

interface ColumnDisplayProps {
  columns: Column[];
}

const ColumnDisplay: React.FC<ColumnDisplayProps> = ({ columns }) => {
  return (
    <Table aria-label="Columns Display">
      <TableHeader>
        <TableColumn>Column Name</TableColumn>
        <TableColumn>Column UID</TableColumn>
        <TableColumn>Sortable</TableColumn>
      </TableHeader>
      <TableBody>
        {columns.map((column) => (
          <TableRow key={column.uid}>
            <TableCell>{column.name}</TableCell>
            <TableCell>{column.uid}</TableCell>
            <TableCell>{column.sortable ? 'Yes' : 'No'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ColumnDisplay;