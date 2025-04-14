import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchAndSort = ({ setSearch, setSortBy }) => {
  return (
    <div className="space-y-4">
      <Input placeholder="Search expenses..." onChange={(e) => setSearch(e.target.value)} />
      <div className="flex gap-4">
        <Button onClick={() => setSortBy("category")}>Sort by Category</Button>
        <Button onClick={() => setSortBy("description")}>Sort by Description</Button>
      </div>
    </div>
  );
};

export default SearchAndSort;