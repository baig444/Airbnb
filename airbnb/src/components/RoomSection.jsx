import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  PlusCircle,
  Bed,
  MapPin,
  Coffee,
  Info,
  Map,
  Star,
  DollarSign,
  X,
  ImageIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import axios from "axios";

export default function RoomSection() {
  const [roomName, setRoomName] = useState("");
  const [location, setLocation] = useState("");
  const [allowances, setAllowances] = useState("");
  const [about, setAbout] = useState("");
  const [stayType, setStayType] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [mapLocation, setMapLocation] = useState(""); // Separate map location
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [currentAmenity, setCurrentAmenity] = useState("");
  const [newLocation, setNewLocation] = useState(""); // Nearby Location name
  const [newDistance, setNewDistance] = useState(""); // Nearby Location distance

  const fileInputRef = useRef(null);

  const addAmenity = () => {
    if (currentAmenity.trim() !== "") {
      setAmenities((prevAmenities) => [...prevAmenities, currentAmenity]);
      setCurrentAmenity(""); // Clear the input after adding
    }
  };

  const removeAmenity = (amenityToRemove) => {
    setAmenities((prevAmenities) =>
      prevAmenities.filter((amenity) => amenity !== amenityToRemove)
    );
  };

  const addNearbyLocation = () => {
    if (newLocation && newDistance && !nearbyLocations.some((loc) => loc.name === newLocation)) {
      setNearbyLocations([...nearbyLocations, { name: newLocation, distance: newDistance }]);
      setNewLocation("");
      setNewDistance("");
    }
  };

  const removeNearbyLocation = (name) => {
    setNearbyLocations(nearbyLocations.filter((loc) => loc.name !== name));
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const updateFaq = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const removeFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log("Token:", token);
  
      const imageUrls = [];
      for (const image of images) {
        const formData = new FormData();
        formData.append("file", image.file);
        formData.append("upload_preset", "mern-portfolio");
        formData.append("api_key", "911985623315119");

        const cloudinaryRes = await fetch(
          "https://api.cloudinary.com/v1_1/dexqvfmxn/image/upload",
          {
            method: "POST",
            body: formData,
          }
        ).then((res) => res.json());

        imageUrls.push(cloudinaryRes.url);
      }


      await axios.post("http://localhost:9000/api/addroom", {
        name: roomName,
        location: location,
        allowances: allowances,
        about: about,
        stayType: stayType,
        rating: rating,
        price: price,
        mapLocation: mapLocation,
        nearbyLocations: nearbyLocations,
        faqs: faqs,
        amenities: amenities,
        images: imageUrls,
      },{
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Reset form
      setRoomName("");
      setLocation("");
      setAllowances("");
      setAbout("");
      setStayType("");
      setRating("");
      setPrice("");
      setMapLocation("");
      setNearbyLocations([]);
      setFaqs([]);
      setAmenities([]);
      setImages([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent>
          <form className="space-y-6">
            {/* Room Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="room-name">Room Name</Label>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input
                    id="room-name"
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter room name"
                    className="pl-10"
                  />
                </div>
              </div>
              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter room location"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Allowances */}
            <div className="space-y-2">
              <Label htmlFor="allowances">Allowances</Label>
              <div className="relative">
                <Coffee className="absolute left-3 top-3 text-gray-500" />
                <Textarea
                  id="allowances"
                  value={allowances}
                  onChange={(e) => setAllowances(e.target.value)}
                  placeholder="Enter room allowances"
                  className="pl-10 min-h-[100px]"
                />
              </div>
            </div>

            {/* About */}
            <div className="space-y-2">
              <Label htmlFor="about">About</Label>
              <div className="relative">
                <Info className="absolute left-3 top-3 text-gray-500" />
                <Textarea
                  id="about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Enter room description"
                  className="pl-10 min-h-[100px]"
                />
              </div>
            </div>

            {/* Stay Type */}
            <div className="space-y-2">
              <Label htmlFor="stay-type">Stay Type</Label>
              <Select value={stayType} onValueChange={(value) => setStayType(value)}>
                <SelectTrigger id="stay-type" className="bg-gray-50">
                  <SelectValue placeholder="Select Stay Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="longstay">longstay</SelectItem>
                  <SelectItem value="shortstay">shortstay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amenities */}
            <div className="space-y-2">
              <Label>Amenities</Label>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center"
                  >
                    <span>{amenity}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-1"
                      onClick={() => removeAmenity(amenity)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  value={currentAmenity}
                  onChange={(e) => setCurrentAmenity(e.target.value)}
                  placeholder="Add amenity"
                />
                <Button type="button" onClick={addAmenity}>
                  Add
                </Button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image-upload">Upload Images</Label>
              <div className="flex items-center space-x-4">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.preview}
                      alt={`Preview ${index}`}
                      className="h-20 w-20 object-cover"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-0 right-0"
                      onClick={() => removeImage(index)}
                    >
                      <X />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Location */}
            <div className="space-y-2">
              <Label htmlFor="map-location">Map Location</Label>
              <div className="relative">
                <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="map-location"
                  type="text"
                  value={mapLocation}
                  onChange={(e) => setMapLocation(e.target.value)}
                  placeholder="Enter map location"
                  className="pl-10"
                />
              </div>
            </div>
              
              <div className="grid grid-cols-2 gap-4">
                          {/* Price */}
                          <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="price"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <div className="relative">
                <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="rating"
                  type="text"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="Enter rating"
                  className="pl-10"
                />
              </div>
            </div>
              </div>

            {/* Nearby Locations */}
            <Accordion type="single" collapsible>
              <AccordionItem value="nearby-locations">
                <AccordionTrigger>Nearby Locations</AccordionTrigger>
                <AccordionContent>
                  {nearbyLocations.map((location, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <strong>{location.name}</strong>: {location.distance}km
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeNearbyLocation(location.name)}
                      >
                        <X />
                      </Button>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add location"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Distance (km)"
                      value={newDistance}
                      onChange={(e) => setNewDistance(e.target.value)}
                    />
                    <Button type="button" onClick={addNearbyLocation}>
                      Add
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ */}
            {/* FAQs */}
            <div className="space-y-2">
              <Label>FAQs</Label>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`faq-${index}`} key={index}>
                    <AccordionTrigger>{faq.question || `FAQ ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <Input
                          placeholder="Question"
                          value={faq.question}
                          onChange={(e) => updateFaq(index, "question", e.target.value)}
                        />
                        <Textarea
                          placeholder="Answer"
                          value={faq.answer}
                          onChange={(e) => updateFaq(index, "answer", e.target.value)}
                        />
                        <Button type="button" variant="destructive" onClick={() => removeFaq(index)}>
                          Remove FAQ
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button type="button" onClick={addFaq} className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" /> Add FAQ
              </Button>
            </div>



            {/* Submit Button */}
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
