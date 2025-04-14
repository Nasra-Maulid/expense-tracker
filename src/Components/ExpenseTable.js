import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.name}</TableCell>
            <TableCell>{expense.description}</TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>${expense.amount}</TableCell>
            <TableCell>{expense.date}</TableCell>
            <TableCell>
              <Button variant="destructive" onClick={() => onDelete(expense.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpenseTable;
