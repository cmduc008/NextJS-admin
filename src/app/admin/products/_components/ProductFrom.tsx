"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { useFormState } from "react-hook-form";

const onSubmit = async (data: any) => {
  console.log(data);
  // You can add your logic here to handle the form submission
};
export function ProductForm() {
  const [price, setPrice] = useState<number>(0);
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Price (cent)</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          value={price}
          onChange={(e) => setPrice(Number(e.target.value) ?? 0)}
        ></Input>
      </div>
      <div className="text-muted-foreground">
        {formatCurrency((price || 0) / 100)}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required></Input>
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
}
