"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  company: z.string().optional(),
  country: z.string().min(2, { message: "Country is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  postalCode: z.number().min(2, { message: "Postal code is required" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email" }),
  city: z.string().min(2, { message: "City is required" }),
});

export default function CheckoutPage() {
  const { user, isSignedIn } = useUser();

  //   if (!user && !isSignedIn) {
  //     redirect(`/sign-in`);
  //   }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      company: "",
      country: "Bangladesh",
      address: "",
      postalCode: 0,
      phone: "",
      email: user?.emailAddresses[0].emailAddress || "",
      city: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast(data.address);
  };

  useEffect(() => {
    form.setValue("firstName", user?.firstName || "");
    form.setValue("lastName", user?.lastName || "");
    form.setValue("company", "");
    form.setValue("country", "Bangladesh");
    form.setValue("address", "");
    form.setValue("postalCode", 0);
    form.setValue("phone", "");
    form.setValue("city", "");
    form.setValue("email", user?.emailAddresses[0].emailAddress || "");
  }, [form, user?.emailAddresses, user?.firstName, user?.lastName]);

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-6 gap-6">
        {/* info: form */}
        <div className="col-span-6 md:col-span-4">
          <p className="text-sm font-semibold md:text-base">Billing Details</p>

          {/* form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 py-6"
            >
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-xs">First Name*</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-xs">Last Name*</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Doe" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-xs">
                      Company (optional)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Bank of Bangladesh" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-xs">Country*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Bangladesh" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-xs">Address*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="..." />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-xs">Postcode*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="000000" type="number" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-xs">Phone*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="+999 000 000" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-xs">Email*</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="johndoe@bd.com" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        {/* info: Details */}
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-xl border bg-foreground/5 p-4">
            <p className="text-sm font-semibold">Your Order</p>

            <div className="flex justify-between pt-4">
              <p className="text-xs font-semibold text-muted-foreground">
                Product
              </p>
              <p className="text-xs font-semibold text-muted-foreground">
                Subtotal
              </p>
            </div>

            <Separator className="my-1" />

            <div className="flex items-center justify-between gap-6 pb-4">
              <p className="text-xs">
                Great Value Rising Crust Frozen Pizza, Supreme × 1{" "}
              </p>
              <p className="text-sm font-semibold">$8.99</p>
            </div>

            <Separator className="my-1" />

            <div className="flex items-center justify-between gap-6 py-2">
              <p className="text-xs font-semibold text-muted-foreground">
                Shipping
              </p>
              <p className="text-sm font-semibold">$120.00</p>
            </div>

            <Separator className="my-1" />

            <div className="flex items-center justify-between gap-6 py-2">
              <p className="text-xs font-semibold text-muted-foreground">
                Total
              </p>
              <p className="text-sm font-semibold">$120.00</p>
            </div>

            <Separator className="my-1" />

            <p className="py-2 text-xs text-muted-foreground">
              Pay with cash upon delivery.
              <br /> <br />
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>

            <Button className="w-full">Place order</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
