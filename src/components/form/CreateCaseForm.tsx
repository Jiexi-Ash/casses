"use client";
import React from "react";

import { Button } from "../ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  customer: z.string().min(5, "Customer must be at least 5 characters"),
  studentNumber: z
    .string()
    .min(5, "Student Number must be at least 5 characters"),
  campus: z.string().min(5, "Campus must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  reason: z.string().min(5, "Reason must be at least 5 characters"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function CreateCaseForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer: "",
      studentNumber: "",
      campus: "Midrand",
      email: "",
      title: "",
      description: "",
      reason: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    console.log(form.formState.errors);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="campus"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Select Campus</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      className="placeholder-gray-400 text-gray-400"
                      placeholder="Select a campus"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Midrand">Midrand</SelectItem>
                  <SelectItem value="Pretoria">Pretoria</SelectItem>
                  <SelectItem value="Durban">Durban</SelectItem>
                  <SelectItem value="Cape Town">Cape Town</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="customer">Customer</FormLabel>
              <FormControl>
                <Input placeholder="Customer" {...field} />
              </FormControl>
              <FormDescription className="text-xs">
                Enter the full name and surname of the customer
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="studentNumber">Student Number</FormLabel>
              <FormControl>
                <Input placeholder="Student number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="title">Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Reason for logging case</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      className="placeholder-gray-400 text-gray-400"
                      placeholder="Select a reason"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Missing Module">Missing Module</SelectItem>
                  <SelectItem value="Remove Module">Remove Module</SelectItem>
                  <SelectItem value="Missing Timetable">
                    Missing Timetable
                  </SelectItem>
                  <SelectItem value="Results">Results</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Description</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-4 text-white bg-[#15305d] max-w-fit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default CreateCaseForm;
