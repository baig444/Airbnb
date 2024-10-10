import { useEffect, useState } from "react";
import { Star, Trash } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import axios from "axios"; // To fetch data from the backend

const AllRooms = () => {
  const [longStayRooms, setLongStayRooms] = useState([]);
  const [shortStayRooms, setShortStayRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/getrooms");
        const rooms = response.data;
        console.log("Fetched Rooms: ", rooms); // <-- Add this to check data in the console
  
        const longStay = rooms.filter(room => room.stayType === "longstay");
        console.log("LongStay Rooms: ", longStay);
        const shortStay = rooms.filter(room => room.stayType === "shortstay");
  
        setLongStayRooms(longStay);
        setShortStayRooms(shortStay);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
  
    fetchRooms();
  }, []);
  
  return (
    <div>
      {/* LongStay Rooms */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">LongStay Rooms</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 px-5">
          {longStayRooms?.map((room) => (
            <Card key={room._id} className="max-w-sm overflow-hidden">
               {/* Assuming you have a room detail page */}
                <div className="relative">
                <Link to={`/${room?.stayType}/${room?.location}/${room?.stayType == "longstay" ? "long" : "short"}/${room?._id}`}>
                  <img
                    src={room?.images[0]}
                    alt={room?.name}
                    className="w-full h-60 object-cover rounded-md"
                  />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-red-400 hover:text-red-500 transition-colors"
                  >
                    <Trash className="h-6 w-6" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{room?.name}</h3>
                      <p className="text-sm text-gray-500">{room?.location}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{room?.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex">
                  <div>
                    <span className="font-bold text-lg">${room?.price}</span>
                    <span className="text-gray-600"> / night</span>
                  </div>
                </CardFooter>
            </Card>
          ))}
        </div>
      </Card>

      {/* ShortStay Rooms */}
      <Card className="bg-white dark:bg-gray-800 mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">ShortStay Rooms</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 px-5">
          {shortStayRooms.map((room) => (
            <Card key={room._id} className="max-w-sm overflow-hidden">
              
                <div className="relative">
                <Link to={`/rooms/${room._id}`}>
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-60 object-cover rounded-md"
                  />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-red-400 hover:text-red-500 transition-colors"
                  >
                    <Trash className="h-6 w-6" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{room.name}</h3>
                      <p className="text-sm text-gray-500">{room.location}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{room.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex">
                  <div>
                    <span className="font-bold text-lg">${room.price}</span>
                    <span className="text-gray-600"> / night</span>
                  </div>
                </CardFooter>
              
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AllRooms;
