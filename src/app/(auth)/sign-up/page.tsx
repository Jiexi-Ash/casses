"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export default function SignUp() {
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;

    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    setSuccess(true);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-sign-image bg-cover bg-no-repeat bg-center relative">
      <div className="absolute bg-black opacity-60 inset-0 z-0 flex justify-center items-center"></div>
      <div className="flex flex-col max-w-md bg-white w-full px-6 py-10 rounded-lg relative z-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-white"
          >
            <h2 className="font-bold text-lg">Sign Up</h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email Adress</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      disabled={success}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="password"
                      {...field}
                      disabled={success}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            {!success && (
              <div className="w-full text-center">
                <Link className="text-xs text-center mt-4" href="/sign-up">
                  {"Don't have an account? Sign Up"}
                </Link>
              </div>
            )}

            {success ? (
              <p className="text-sm text-center  text-green-400">
                Account created, please veify email address
              </p>
            ) : (
              <Button type="submit" className="text-white bg-[#15305d] w-full">
                Sign Up
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
