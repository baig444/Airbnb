/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
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
import MapComponent from "./MapComponent";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function LongStay() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images,setImages] = useState([])
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const  getroomsbyid = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/getroom/${id}`)

        const data = res.data
        console.log(data)
        setProperty(data);
        setImages(data.images || []);
      } catch (error) {
        console.log(error)
      }
    }
    getroomsbyid()
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <h1 className="text-2xl font-semibold mb-4">
          {property.name}
        </h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-pink-500 mr-1" />
              <span className="font-semibold">{property.rating}</span>
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

        {images.length > 0 && (
          <div className="relative grid grid-cols-4 gap-2 mb-8">
            <div className="col-span-2 row-span-2">
              <img
                src={images[currentImageIndex]}
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
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between pb-6 border-b">
              <div>
                <h2 className="text-2xl font-semibold">
                  {property.location}
                </h2>
              </div>
              <h1 className="text-xl font-semibold mb-5">
                Price starting from - ${property.price}
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
                {property.about}
              </p>
              <p className="text-gray-500 mb-4">
               {property.about}
              </p>
              <Button variant="link" className="p-0 text-black font-semibold">
                Show more
              </Button>
            </div>
          </div>

          <div>
            <Card className="sticky top-8 shadow-lg">
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
                        className="w-full p-2 border-b border-gray-400 outline-none"
                      />
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border-b border-gray-400 outline-none"
                      />
                    <label htmlFor="name">Phone</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border-b border-gray-400  outline-none"
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
                {property.location}
              </h1>
              <h1 className="text-md mt-4">
               {property.about}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-12 p-10 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold">FAQS</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger><h3 className="font-semibold text-lg">
              Malibu, California, United States
            </h3></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger><h3 className="font-semibold text-lg">
              Malibu, California, United States
            </h3></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger><h3 className="font-semibold text-lg">
              Malibu, California, United States
            </h3></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
      </div>
    </div>
  );
}
