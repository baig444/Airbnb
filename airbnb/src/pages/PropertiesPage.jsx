import { Link, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios

const PropertiesPage = () => {
  const { destination, stayType } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch properties from the backend API
        const response = await axios.get(`http://localhost:9000/api/getrooms`); // Adjust this URL as needed
        const data = response.data;

        // Filter properties based on the destination and stayType
        const filteredProperties = data.filter(property => 
          property.location.toLowerCase().includes(destination.toLowerCase()) &&
          property.stayType === stayType // Ensure it matches the stay type
        );

        setProperties(filteredProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [destination, stayType]);

  return (
    <div className="main-content p-10">
      <h1 className="text-3xl font-bold">Showing {properties.length} properties in {destination}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
        {properties.map((property, index) => (
          <Card key={index} className="max-w-sm overflow-hidden">
            <Link to={`/${stayType}/${destination}/${stayType == "longstay" ? "long" : "short"}/${property._id}`}>
              <div className="relative">
                <img
                  src={property.images[0]} // Ensure your API returns this field
                  alt={property.name}
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
                    <h3 className="font-semibold text-lg">{property.name}</h3>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{property.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex">
                <div>
                  <span className="font-bold text-lg">${property.price}</span>
                  <span className="text-gray-600"> / night</span>
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
