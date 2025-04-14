import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const ExpenseForm = ({onAddExpense}) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        onAddExpense(formData);
        setFormData({name:"", description:"", category:"", amount:"", date:""});
    };

    return (
        <Card>
            <CardContent className="space-y-4 p-4">
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <Input name="name" placeholder="Expense Name" value={formData.name} onChange={handleChange} required />
        <Input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <Input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <Input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
        <Input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <Button type="submit" className="col-span-2">Add Expense</Button>       
    </form>
            </CardContent>
        </Card>
    );
};
export default ExpenseForm;