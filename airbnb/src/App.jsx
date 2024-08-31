/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Button } from "../src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../src/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../src/components/ui/avatar";
import { Calendar } from "../src/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../src/components/ui/popover";
import { Input } from "../src/components/ui/input";
import { Badge } from "../src/components/ui/badge";
import { Separator } from "../src/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../src/components/ui/tabs";
import {
  Star,
  Heart,
  Share,
  Award,
  MapPin,
  CalendarIcon,
  Users,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Tv,
  Car,
  Utensils,
  Coffee,
  Sparkles,
  Tv2,
  Cctv,
  Power,
  GlassWater,
  WashingMachine,
} from "lucide-react";
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1196141205624875008/original/5013ce9d-3f4a-42fc-b430-d3adefaea9c0.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1196141205624875008/original/68069e84-2dfa-458b-ba7c-26333d48124e.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1196141205624875008/original/8ebcd5ed-ef52-4d31-ba7d-823e53d2e59c.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1196141205624875008/original/4bcbd058-7847-4996-b2dd-6d8a2ae67d34.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1196141205624875008/original/43ff1f44-45fa-499f-b171-abe267c20fc0.jpeg?im_w=720",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <h1 className="text-2xl font-semibold mb-4">
          Highrise Heaven 16th Floor with Garden Patio 3
        </h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-pink-500 mr-1" />
              <span className="font-semibold">4.98</span>
              <span className="text-gray-500 ml-1">·</span>
            </div>
            <span className="font-semibold underline">124 reviews</span>
            <span className="text-gray-500">·</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          <div className="col-span-2 row-span-2">
            <img
              src={images[0]}
              alt="Main property image"
              className="w-full h-[55vh] object-cover rounded-l-xl"
            />
          </div>
          {images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property image ${index + 2}`}
              className={`w-full h-[26.5vh] object-cover ${
                index === 3
                  ? "rounded-br-lg"
                  : index === 1
                  ? "rounded-tr-lg"
                  : ""
              }`}
            />
          ))}
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-[-10%] right-14"
          >
            Show all photos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between pb-6 border-b">
              <div>
                <h2 className="text-2xl font-semibold">
                  Entire rental unit in Gurugram, India
                </h2>
                <p className="text-gray-500">
                  2 guests · 1 bedrooms · 1 beds · 2 baths
                </p>
              </div>
              <h1 className="text-xl font-semibold mb-5">
                Price starting from - ₹10,000
              </h1>
            </div>

            <div className="py-8 border-b space-y-6">
              <div className="py-8 border-b">
                <h2 className="text-2xl font-semibold mb-6">
                  What this place offers
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4">
                    <Wifi className="h-6 w-6" />
                    <span>Wifi</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Tv className="h-6 w-6" />
                    <span>TV</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Car className="h-6 w-6" />
                    <span>Free parking on premises</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Utensils className="h-6 w-6" />
                    <span>Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Coffee className="h-6 w-6" />
                    <span>Coffee maker</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Sparkles className="h-6 w-6" />
                    <span>Pool</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Cctv className="h-6 w-6" />
                    <span>Cctv</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Power className="h-6 w-6" />
                    <span>Power backup</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <GlassWater className="h-6 w-6" />
                    <span>Drinking Water</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <WashingMachine className="h-6 w-6" />
                    <span>Washing machine</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8 border-b">
              <h2 className="text-2xl font-semibold mb-4">About this place</h2>
              <p className="text-gray-500 mb-4">
                Escape to this stunning beachfront villa for a luxurious
                getaway. With breathtaking ocean views, private beach access,
                and top-notch amenities, this property offers the perfect blend
                of relaxation and indulgence.
              </p>
              <p className="text-gray-500 mb-4">
                This spacious villa features 3 bedrooms, 2.5 bathrooms, a fully
                equipped gourmet kitchen, and an expansive living area with
                floor-to-ceiling windows overlooking the Pacific Ocean. Step
                outside onto the private terrace to enjoy alfresco dining,
                sunbathing, or stargazing.
              </p>
              <Button variant="link" className="p-0 text-black font-semibold">
                Show more
              </Button>
            </div>
          </div>

          <div>
            <Card className="sticky top-8">
              <div className="flex items-center justify-center pt-3">
                <h1 className="text-2xl font-semibold">Enquire Now</h1>
              </div>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-400 rounded-sm"
                    />
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-400 rounded-sm"
                    />
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-400 rounded-sm"
                    />
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-400 rounded-sm"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">Send</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <Separator className="my-8" />
        <div>
          <div>
            <h1 className="text-3xl font-semibold">Nearby Location</h1>
            <div className="mt-4 mb-9 flex items-center gap-5">
              <div className="bg-gray-200 w-fit p-4 rounded-md">
                <h1 className="text-md font-semibold">DLF Cyberhub</h1>
                <p className="text-xs font-medium">500m away</p>
              </div>
              <div className="bg-gray-200 w-fit p-4 rounded-md">
                <h1 className="text-md font-semibold">DLF Cyberhub</h1>
                <p className="text-xs font-medium">500m away</p>
              </div>
              <div className="bg-gray-200 w-fit p-4 rounded-md">
                <h1 className="text-md font-semibold">DLF Cyberhub</h1>
                <p className="text-xs font-medium">500m away</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-6">Loaction</h2>
          <div className="aspect-video rounded-xl overflow-hidden">
            <MapComponent />
            <div className="mt-10">
              <h1 className="text-3xl font-semibold">More About </h1>
              <h1 className="text-md mt-4">
                Entire rental unit in Gurugram, India
              </h1>
              <h1 className="text-md mt-4">
                Escape to this stunning beachfront villa for a luxurious
                getaway. With breathtaking ocean views, private beach access,
                and top-notch amenities, this property offers the perfect blend
                of relaxation and indulgence.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
