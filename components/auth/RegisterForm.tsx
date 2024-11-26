import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"




function RegisterForm() {
  return (
    
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create a new account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" />
          </div>
          <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
          </div>
          <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
          </div>
          <div className="space-y-1">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Register</Button>
        </CardFooter>
      </Card>
      
  )
}

export default RegisterForm