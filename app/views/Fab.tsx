"use client";

import React from 'react'
import { Button } from '../../app/components/ui/button'
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

import { TabsDemo } from './form/AddTransaction';

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
                            New Transaction
                        </CredenzaTitle>
                        <CredenzaDescription>
                            Add a new transaction to the ledger.
                        </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody className='px-3'>
                        <TabsDemo />
                    </CredenzaBody>
                    <CredenzaFooter>
                        <CredenzaClose asChild>
                            <Button className='w-full rounded-full py-6'>
                                Add Transaction
                            </Button>
                        </CredenzaClose>
                    </CredenzaFooter>
                </CredenzaContent>
            </Credenza>
        </>
    )
}

export default Fab