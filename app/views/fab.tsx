import React from 'react'
import { Button } from '../components/ui/button'
import {
    Credenza,
    CredenzaBody,
    CredenzaClose,
    CredenzaContent,
    CredenzaDescription,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTitle,
    CredenzaTrigger,
} from "@/app/components/ui/credenza"

import { Bird, Rabbit, Turtle } from "lucide-react"

import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"
import { Textarea } from "@/app/components/ui/textarea"

const Fab = () => {
    return (
        <>
            <Credenza>
                <CredenzaTrigger asChild>
                    <div className='fixed bottom-5 right-5'>
                        <Button className='rounded-2xl w-16 h-16'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </Button>
                    </div>
                </CredenzaTrigger>
                <CredenzaContent>
                    <CredenzaHeader>
                        <CredenzaTitle className='text-xl leading-tight'>
                            Add Transaction
                        </CredenzaTitle>
                        <CredenzaDescription>
                            Add a new transaction to the ledger.
                        </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody>
                        <div
                            className="relative flex-col items-start gap-8"
                        >
                            <form className="grid w-full items-start gap-6">
                                <fieldset className="grid gap-6 rounded-lg border p-4">
                                    <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
                                    <div className="grid gap-3">
                                        <Label htmlFor="model">Model</Label>
                                        <Select>
                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Select a model" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="genesis">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Rabbit className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Genesis
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                Our fastest model for general use cases.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="explorer">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Bird className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Explorer
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                Performance and speed for efficiency.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="quantum">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Turtle className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Quantum
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                The most powerful model for complex computations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="temperature">Temperature</Label>
                                        <Input id="temperature" type="number" placeholder="0.4" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="top-p">Top P</Label>
                                            <Input id="top-p" type="number" placeholder="0.7" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="top-k">Top K</Label>
                                            <Input id="top-k" type="number" placeholder="0.0" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </CredenzaBody>
                    <CredenzaFooter>
                        <CredenzaClose asChild>
                            <button>Close</button>
                        </CredenzaClose>
                    </CredenzaFooter>
                </CredenzaContent>
            </Credenza>
        </>
    )
}

export default Fab