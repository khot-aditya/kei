"use client"

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'

const TransactionsTable = () => {
    return (
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">

            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>
                        Recent transactions from your store.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-8">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Olivia Martin
                            </p>
                            <p className="text-sm text-muted-foreground">
                                olivia.martin@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium text-green-600">+$1,999.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/02.png" alt="Avatar" />
                            <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Jackson Lee
                            </p>
                            <p className="text-sm text-muted-foreground">
                                jackson.lee@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium text-green-600">+$39.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/03.png" alt="Avatar" />
                            <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Isabella Nguyen
                            </p>
                            <p className="text-sm text-muted-foreground">
                                isabella.nguyen@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium text-green-600">+$299.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/04.png" alt="Avatar" />
                            <AvatarFallback>WK</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                William Kim
                            </p>
                            <p className="text-sm text-muted-foreground">
                                will@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium text-green-600">+$99.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/05.png" alt="Avatar" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Sofia Davis
                            </p>
                            <p className="text-sm text-muted-foreground">
                                sofia.davis@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium text-green-600">+$39.00</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TransactionsTable