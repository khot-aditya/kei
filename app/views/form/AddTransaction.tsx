import { Button } from "@/app/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/app/components/ui/tabs";
import { InputForm } from ".";

export function TabsDemo() {
    return (
        <Tabs defaultValue="debit">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="debit">Debit</TabsTrigger>
                <TabsTrigger value="credit">Credit</TabsTrigger>
                <TabsTrigger value="investment">Investment</TabsTrigger>
            </TabsList>
            <TabsContent value="debit">
                <InputForm />
            </TabsContent>
            <TabsContent value="credit">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you&apos;ll be logged
                            out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="investment">
                <Card>
                    <CardHeader>
                        <CardTitle>Investment</CardTitle>
                        <CardDescription>
                            Add a new investment to your portfolio.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="amount">Amount</Label>
                            <Input id="amount" type="number" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Add investment</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
