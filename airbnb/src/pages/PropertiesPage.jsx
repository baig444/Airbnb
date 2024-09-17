
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent,CardFooter} from "../components/ui/card"
import { Heart, Star } from "lucide-react"

const PropertiesPage = () => {
  return (
    <div className="p-10">
        <h1 className="text-3xl font-bold">Showing 156 properties in Bangalore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
              {[1, 2, 3,4].map((property) => (
                <Card key={property} className="max-w-sm overflow-hidden">
                <Link to={'/Shortstay'}>
                <div className="relative">
                  <img
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/93eebed7-db1d-4029-9f6e-1fb8ad1d45d4.jpeg?im_w=720"
                    alt="Cozy apartment with a view"
                    className="w-full h-60 object-cover rounded-md"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-6 w-6" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Cozy Downtown Apartment</h3>
                      <p className="text-sm text-gray-500">New York, United States</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">4.92</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex">
                  <div>
                    <span className="font-bold text-lg">$120</span>
                    <span className="text-gray-600"> / night</span>
                  </div>
                </CardFooter>
                </Link>
              </Card>
              ))}
            </div>
    </div>
  )
}

export default PropertiesPage
