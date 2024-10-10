/* eslint-disable react/no-unescaped-entities */
import { Calendar, Facebook, Heart, Instagram, MapPin, MessageCircle, Star, Twitter, User } from "lucide-react";
import CityDestinationCard from "../components/CityDestinationCard";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Explore = () => {

  const { stayType } = useParams(); // Get stayType from the URL params
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch destinations and trending hotels based on stayType
  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/getrooms`);  // Replace with your API
        if (res.data && Array.isArray(res.data)) {
          // Collect all locations
          const filteredLocations = res.data
          .filter(item => item.stayType === stayType) // Adjust this condition based on your data structure
          .map(item => item.location);
  
          // Create a Set to keep only unique locations (case insensitive)
          const uniqueLocations = Array.from(new Set(filteredLocations.map(loc => loc.toLowerCase())))
            .map(loc => filteredLocations.find(originalLoc => originalLoc.toLowerCase() === loc));
  
          setDestinations(uniqueLocations); // Set unique locations
          console.log(uniqueLocations); // Log the unique locations
        } else {
          throw new Error("Invalid data structure");
        }
        setLoading(false);
        console.log(res);
      } catch (error) {
        setError(error,"Failed to load data");
        setLoading(false);
      }
    };

    fetchExploreData();
  }, [stayType]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error("Error:", error);  // Log error for debugging
    return <div>Error: {error.message || "Something went wrong"}</div>;
  }

  // const images = [
  //   'https://plus.unsplash.com/premium_photo-1661964303354-f0496d6d6e0b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // ]
  return (
    <div className="m-1 rounded-xl">
      <div className="hero h-screen w-full relative  bg-image-brightness">
        <div className="px-5 absolute bottom-4 w-full flex flex-col gap-5">
          <h1 className="text-white text-5xl font-extrabold">Find your Perfect Staycation</h1>
          <div className="bg-[#fffffff4] w-full rounded-xl grid lg:grid-cols-3 grid-cols-1 p-5 gap-3">
             <div className="rounded-xl lg:px-3 flex flex-col gap-2">
              <h1 className="font-bold">Location</h1>
              <div className="flex items-center h-12 bg-gray-200 px-2 gap-2 rounded-md">
              <MapPin className="text-gray-400 h-5" />
              <input type="text" placeholder="Find location" className="bg-transparent w-full outline-none font-bold" />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <h1 className="font-bold">Filter:</h1>
                <button className="bg-black text-white px-2 py-1 rounded-full text-sm">Hotels</button>
                <button className="border border-gray-400 px-2 py-1 rounded-full text-sm">Villas</button>
                <button className="border border-gray-400 px-2 py-1 rounded-full text-sm">Appartments</button>
              </div>
              </div>
             <div className="rounded-xl flex flex-col gap-2"><h1 className="font-bold">Check-in and Check-out</h1>
             <div className="flex items-center h-12 bg-gray-200 px-2 gap-2 rounded-md">
              <Calendar className="text-gray-400 h-5" />
              <input type="date" placeholder="Add Dates" className="bg-transparent w-full outline-none font-bold" />
              </div>
             </div>
             <div className="rounded-xl lg:px-5 flex flex-col gap-2"><h1 className="font-bold">Guests and Rooms</h1>
             <div className="flex items-center h-12 bg-gray-200 px-2 gap-2 rounded-md">
             <User className="text-gray-400 h-5" />
              <input type="text" placeholder="1 guest, 1 room" className="bg-transparent w-full outline-none font-bold" />
              </div>
             </div>
          </div>
        </div>
      </div>
      <div className="grid grid-row grid-rows-1">
        <div className="p-5 pt-10">
          <h1 className="text-3xl font-bold">Discover your destination</h1>
          <h3 className="text-lg font-semibold">Explore our range of property types of every traveler's prefrence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-5">
          {
            destinations?.map((destination,index) => (
              <Link to={`/explore/${stayType}/${destination}`} key={index}>
                <CityDestinationCard destination={destination}  />
              </Link>
            ))
          }
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1">
        <div className="p-5 pt-10">
      <h1 className="text-3xl font-bold">Top trending <span className="capitalize">{`${stayType}`} </span>Hotel</h1>
         <h3 className="text-lg font-semibold">Discover the most trending <span className="capitalize">{`${stayType}`} </span> Hotels for unforgettable experience</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-5">
              {[1,2,3,4,5].map((property) => (
                <Card key={property} className="max-w-sm overflow-hidden">
                <Link to={'/'}>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-y-3 p-2">
      <div className="grid grid-rows-2 gap-3">
        <div className="rounded-xl relative">
          <img src="https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="h-full object-cover rounded-xl" />
          <div className="absolute top-0 left-0 h-full w-full bg-[#101010a2] text-white rounded-xl">
            <div className="absolute bottom-7 px-6 flex flex-col items-start gap-5">
              <h1 className="text-2xl font-bold">Explore more to get your comfort zone</h1>
              <h3>Book your perfect stay with us</h3>
              <Button className='bg-white text-black'>Booking now →</Button>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 rounded-xl relative">
          <img src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="object-cover rounded-xl" />
          <div className="absolute top-0 left-0 h-full w-full bg-[#1010104c] text-white rounded-xl">
          <div className="absolute bottom-7 px-6">
          <h1 className="text-xl font-semibold">
                Hotel Available
              </h1>
               <h1 className="text-3xl font-bold">1,565,800</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-xl relative">
        <img src="https://images.unsplash.com/photo-1592229505801-77b31918d822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="object-cover rounded-xl" />
        <div className="absolute top-0 left-0 h-full w-full bg-[#1010104a] text-white rounded-xl flex items-center justify-center">
              <h1 className="text-3xl font-bold text-center">Beyond accomodation,creating <br/> memories of lifetime</h1>
            
          </div>
      </div>
    </div>
    <div className="w-full bg-black rounded-xl grid grid-cols-1 lg:grid-cols-3 text-white p-5">
       <div className="flex flex-col justify-between gap-5">
        <div>
        <h1 className="font-[Mazius] font-bold text-3xl">Night Suites</h1>
        <h3 className="w-3/4 mt-2">Our mission is to make it easy for you to find your next stay 
          and make it a memorable one to cherish forever.
        </h3>
        </div>
          <h1>@2024 Night Suites.All rights reserved</h1>
       </div>
       <div>2</div>
       <div className="flex flex-col gap-5">
       <div>
       <h1 className="font-semibold">Get Updates</h1>
        <div className="flex items-center w-3/4 h-12 bg-[#3f3d3ddc] px-2 gap-2 rounded-md mt-2">
              <input type="email" placeholder="Enter your email" className="bg-transparent w-full outline-none font-medium" />
              <Button className="w-20 bg-white text-black font-semibold">Subscribe</Button> 
              </div>
       </div>
              <div className="flex gap-8">
              <Instagram  />
              <Twitter  />
              <Facebook  />
              <MessageCircle  />
              </div>
       </div>
    </div>
  </div>
  )
}

export default Explore
