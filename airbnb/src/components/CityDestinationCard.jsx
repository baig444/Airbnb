/* eslint-disable react/prop-types */
import { Card} from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function CityDestinationCard({ destination }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581430872221-d1cfed785922?auto=format&fit=crop&w=800&q=80"
          alt="Tokyo cityscape"
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute bottom-2 left-2 bg-white/75 text-gray-800">
  {destination.split(' ')[0]}
</Badge>
      </div>
    </Card>
  )
}