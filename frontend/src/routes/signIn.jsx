import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SignIN() {
return (
<div className="flex justify-center items-center w-full h-screen bg-customGray">
<Card className="mx-auto max-w-md h-96">
  <CardHeader className="space-y-1">
    <CardTitle className="text-2xl font-bold flex justify-center items-center mb-5">Login</CardTitle>
    <CardDescription>Enter your email and password to login to your account</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="m@example.com" required type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" required type="password" />
      </div>
      <Button className="w-full" type="submit">
        Login
      </Button>
    </div>
  </CardContent>
</Card>
</div>
)
}