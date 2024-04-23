"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Bird, Rabbit, Turtle } from "lucide-react"
import { Button } from "@/app/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { toast } from "react-hot-toast";
import Image from "next/image";

import * as React from "react";
import { CalendarIcon, ReloadIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/app/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/app/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

export function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

const FormSchema = z.object({
    amount: z.string().min(1, "Amount is required"),
    description: z.string()
});

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            amount: "",
            description: ""
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast.custom((t) => (
            <div
                className={`${t.visible ? "animate-enter" : "animate-leave"
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <Image
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
                            <p className="mt-1 text-sm text-gray-500">
                                Sure! 8:30pm works great!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl className="text-center">
                                <Input
                                    className="py-16 placeholder:text-gray-300 focus-visible:ring-slate-50 mt-3 ring-0 border-none text-center text-5xl font-normal"
                                    placeholder="500$" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="description">
                                Description (optional)
                            </FormLabel>
                            <FormControl>
                                <Input
                                    id="description"
                                    placeholder="What's this transaction for?"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex gap-2">
                    <div className="w-full">
                        <Select>
                            <SelectTrigger
                                id="model"
                                className="items-start [&_[data-description]]:hidden"
                            >
                                <SelectValue
                                    placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="w-80">
                                <SelectItem value="genesis">
                                    Genesis
                                </SelectItem>

                                <SelectItem value="exodus">
                                    Exodus
                                </SelectItem>

                                <SelectItem value="leviticus">
                                    Leviticus
                                </SelectItem>

                            </SelectContent>
                        </Select>
                    </div>

                    <DatePickerDemo />
                </div>

                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <ReloadIcon />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Recurring payment
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Make this a recurring payment.
                        </p>
                    </div>
                    <Switch />
                </div>
                {/* <Button type="submit">Submit</Button> */}
            </form>
        </Form>
    );
}
