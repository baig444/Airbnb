/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Star,
  Heart,
  Share,
  CalendarIcon,
  Users,
  Wifi,
  Tv,
  Car,
  Utensils,
  Coffee,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
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

export default function ModernHotelDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [images,setImages] = useState([])
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [checkin, setcheckin] = useState('');
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
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {images?.length > 0 && (
              <div className="relative aspect-video">
                <img
                  src={images[currentImageIndex]}
                  alt={`Property image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm">
                        View all photos
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[80vw] max-h-[95vh] p-0">
                      <div className="relative h-full">
                        <img
                          src={images[currentImageIndex]}
                          alt={`Property image ${currentImageIndex + 1}`}
                          className="w-full h-full object-fit"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 text-white"
                          onClick={() => setGalleryOpen(false)}
                        >
                          <X className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )}
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      {property.name}
                    </h1>
                    <p className="text-gray-600">
                      {property.location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="icon">
                      <Share className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <p className="text-gray-500">
                   {property.allowance}
                  </p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-gray-500 ml-1">(124 reviews)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      About this place
                    </h2>
                    <p className="text-gray-600">
                      {property.about}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      What this place offers
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Wifi, label: "Wifi" },
                        { icon: Tv, label: "TV" },
                        { icon: Car, label: "Free parking" },
                        { icon: Utensils, label: "Kitchen" },
                        { icon: Coffee, label: "Coffee maker" },
                        { icon: Sparkles, label: "Pool" },
                      ].map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <amenity.icon className="h-5 w-5 text-gray-400" />
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  ${property.price}{" "}
                  <span className="text-lg font-normal text-black">night</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="dates" className="w-full">
                  <div className="flex flex-col gap-2">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border-b border-gray-400 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="mt-4">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border-b border-gray-400 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="name">Phone</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border-b border-gray-400  outline-none"
                      />
                    </div>
                  </div>
                  <TabsList className="grid w-full grid-cols-1 mt-4">
                    <TabsTrigger value="dates">Dates</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dates">
                    <div className="space-y-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            Check in - Check out
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                           selected={checkin}
                           onSelect={setcheckin}
                          mode="range" numberOfMonths={2} />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Users className="mr-2 h-4 w-4" />2 guests
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">Adults</h4>
                                <p className="text-sm text-gray-500">
                                  Ages 13 or above
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="icon">
                                  -
                                </Button>
                                <span>1</span>
                                <Button variant="outline" size="icon">
                                  +
                                </Button>
                              </div>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">Children</h4>
                                <p className="text-sm text-gray-500">
                                  Ages 2-12
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="icon">
                                  -
                                </Button>
                                <span>0</span>
                                <Button variant="outline" size="icon">
                                  +
                                </Button>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </TabsContent>
                  <TabsContent value="months">
                    <div className="text-center py-4 text-gray-500">
                      Select dates to see prices for longer stays
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full mb-4">Reserve</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Location</h2>
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <MapComponent />
              <div className="pt-10">
              <div>
            <h1 className="text-3xl font-semibold">Nearby Location</h1>
            <div className="mt-4 mb-9 flex items-center gap-5">
              <div className="bg-gray-100 w-fit p-4 rounded-md">
                <h1 className="text-md font-semibold">DLF Cyberhub</h1>
                <p className="text-xs font-medium">500m away</p>
              </div>
              <div className="bg-gray-100 w-fit p-4 rounded-md">
                <h1 className="text-md font-semibold">DLF Cyberhub</h1>
                <p className="text-xs font-medium">500m away</p>
              </div>
              <div className="bg-gray-100 w-fit p-4 rounded-md">
                <h1 className="text-md font-semibold">DLF Cyberhub</h1>
                <p className="text-xs font-medium">500m away</p>
              </div>
            </div>
          </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">
             {property.location}
            </h3>
            <p className="text-gray-600 mb-4">
             {property.about}
            </p>
            <Button variant="outline">Show more</Button>
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
  );
}
