"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import CreateCaseForm from "./CreateCaseForm";

const formSchema = z.object({
  customer: z.string().min(5, "Customer must be at least 5 characters"),
  studentNumber: z
    .string()
    .min(5, "Student Number must be at least 5 characters"),
  campus: z.string().min(5, "Campus must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  reason: z.string().min(5, "Reason must be at least 5 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

function CreateCase() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 text-white bg-[#15305d] max-w-fit">
          Create New Case
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] w-full max-h-[600px] overflow-auto">
        <DialogHeader>
          {!isLoading && (
            <DialogTitle className="text-xl">Create Case</DialogTitle>
          )}
          {!isLoading && (
            <DialogDescription>
              Typical reponse time is 24 hours
            </DialogDescription>
          )}
        </DialogHeader>
        <CreateCaseForm isLoading={isLoading} setIsLoading={setIsLoading} />
      </DialogContent>
    </Dialog>
  );
}

export default CreateCase;
