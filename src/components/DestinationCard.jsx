import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export default function DestinationCard({ image, title, shortDescription, onClick }) {
  return (
    <Card className="destination-card">
      <div className="destination-card-image">
        <img
          src={image}
          alt={title}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button onClick={onClick} className="btn-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
