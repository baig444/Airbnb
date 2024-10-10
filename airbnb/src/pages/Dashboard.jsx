import { useContext, useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Switch } from "../components/ui/switch"
import { PlusCircle, BedDouble, Home, Utensils, DollarSign, Users } from "lucide-react"
import RoomSection from "../components/RoomSection"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AuthContext from "../Context/AuthContext"
import AllRooms from "../components/AllRooms"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const { setIsAuth} = useContext(AuthContext);
  const Navigate = useNavigate()


  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth') === 'true';
    if (!isAuth) {
      Navigate('/auth');
    } else {
      setIsAuth(true);
    }
  }, [setIsAuth, Navigate]);

  const handleLogout  = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/logout");
      console.log(res);
      localStorage.removeItem('token');
      localStorage.setItem('isAuth', false);
      setIsAuth(false);
      Navigate("/auth")
    } catch (error) {
      console.log(error);
    }
   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Night Suites Hotel Admin</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </header>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 rounded-xl bg-gray-200 dark:bg-gray-700 p-1">
            <TabsTrigger value="dashboard" className="rounded-lg">Dashboard</TabsTrigger>
            <TabsTrigger value="rooms" className="rounded-lg">Rooms</TabsTrigger>
            <TabsTrigger value="villas" className="rounded-lg">Villas</TabsTrigger>
            <TabsTrigger value="services" className="rounded-lg">All Rooms</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Rooms</CardTitle>
                  <BedDouble className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">25</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 currently occupied</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Villas</CardTitle>
                  <Home className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">8</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 currently occupied</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Services</CardTitle>
                  <Utensils className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">3 new this month</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Occupancy Rate</CardTitle>
                  <Users className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">78%</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">12% increase from last month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="rooms" className="space-y-6">
           <RoomSection/>
          </TabsContent>
          <TabsContent value="villas" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Add New Villa</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="villa-name" className="text-gray-700 dark:text-gray-300">Villa Name</Label>
                      <Input id="villa-name" placeholder="e.g. Sunset Villa" className="bg-gray-50 dark:bg-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="villa-type" className="text-gray-700 dark:text-gray-300">Villa Type</Label>
                      <Select>
                        <SelectTrigger id="villa-type" className="bg-gray-50 dark:bg-gray-700">
                          <SelectValue placeholder="Select villa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beachfront">Beachfront</SelectItem>
                          <SelectItem value="garden">Garden</SelectItem>
                          <SelectItem value="overwater">Overwater</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="villa-description" className="text-gray-700 dark:text-gray-300">Description</Label>
                    <Textarea id="villa-description" placeholder="Enter villa description" className="bg-gray-50 dark:bg-gray-700" />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="villa-price" className="text-gray-700 dark:text-gray-300">Price per Night</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input id="villa-price" type="number" placeholder="e.g. 500" className="pl-8 bg-gray-50 dark:bg-gray-700" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="villa-capacity" className="text-gray-700 dark:text-gray-300">Capacity</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input id="villa-capacity" type="number" placeholder="e.g. 4" className="pl-8 bg-gray-50 dark:bg-gray-700" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="villa-amenities" className="text-gray-700 dark:text-gray-300">Amenities</Label>
                    <Textarea id="villa-amenities" placeholder="e.g. Private pool, Ocean view, etc." className="bg-gray-50 dark:bg-gray-700" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="villa-availability" />
                    <Label htmlFor="villa-availability" className="text-gray-700 dark:text-gray-300">Available for booking</Label>
                  </div>
                  <Button type="submit" className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Villa
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="services" className="space-y-6">
            <AllRooms/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}