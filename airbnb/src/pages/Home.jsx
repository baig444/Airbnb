import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card"
import { CalendarDaysIcon, CalendarIcon } from "lucide-react"

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (stayType) => {
    navigate(`/explore/${stayType}`);
  };

  return (
    <div className="flex flex-col items-center gap-5 p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="flex flex-wrap gap-10 mt-20">
        <Card className="w-64 h-80 bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden transition-transform hover:scale-105 cursor-pointer"
       onClick={() => handleCardClick('longstay')} 
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <CalendarDaysIcon className="w-24 h-24 mb-4" />
            <h2 className="text-3xl font-bold text-center">Long Stay</h2>
            <p className="text-sm mt-2 text-center opacity-80">Perfect for extended vacations or work trips</p>
          </CardContent>
        </Card>
        <Card className="w-64 h-80 bg-gradient-to-br from-orange-500 to-pink-600 text-white overflow-hidden transition-transform hover:scale-105 cursor-pointer"
         onClick={() => handleCardClick('shortstay')}
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <CalendarIcon className="w-24 h-24 mb-4" />
            <h2 className="text-3xl font-bold text-center">Short Stay</h2>
            <p className="text-sm mt-2 text-center opacity-80">Ideal for quick getaways or business trips</p>
          </CardContent>
        </Card>
      </div>
      <h3 className="text-2xl font-semibold text-white mt-8">Discover Your Perfect Stay</h3>
    </div>
  )
}