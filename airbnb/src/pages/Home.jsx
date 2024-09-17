
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { MapPin, Search, Building, Users, Zap} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">UrbanNest</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-primary">Locations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Partner with Us</a></li>
              <li><Button variant="outline">Login</Button></li>
            </ul>
          </nav>
        </div>
      </header> */}

      <main>
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Find Your Perfect Urban Home</h1>
            <p className="text-xl mb-8">Discover comfortable and affordable co-living spaces in top cities</p>
            <div className="max-w-2xl mx-auto">
              <div className="flex">
                <Input 
                  placeholder="Enter city, neighborhood, or property" 
                  className="rounded-r-none bg-white text-black"
                />
                <Button className="rounded-l-none">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Why Choose UrbanNest?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
                  <p>Stay in the heart of the city, close to work and entertainment</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Community Living</h3>
                  <p>Connect with like-minded individuals in our vibrant spaces</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Hassle-Free Move</h3>
                  <p>Fully furnished rooms with all utilities included</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Explore Our Properties</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="shared">Shared Rooms</TabsTrigger>
                <TabsTrigger value="private">Private Rooms</TabsTrigger>
                <TabsTrigger value="studio">Studio Apartments</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-0">
                        <img src={`/placeholder.svg?height=200&width=300`} alt={`Property ${i}`} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">Urban Living Space {i}</h3>
                          <p className="text-gray-600 mb-2 flex items-center">
                            <MapPin className="mr-2 h-4 w-4" /> City Center, Metropolis
                          </p>
                          <p className="font-bold text-primary">Starting from $500/month</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Add similar TabsContent for other tabs */}
            </Tabs>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8">Ready to Find Your New Home?</h2>
            <Button size="lg">
              Explore Properties
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">UrbanNest</h3>
              <p>Redefining urban living with comfortable and affordable co-living spaces.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Locations</a></li>
                <li><a href="#" className="hover:text-primary">FAQs</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 UrbanNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}