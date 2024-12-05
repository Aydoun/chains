import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddCollection() {
  return (
    <Card className="w-96 shadow-lg border border-gray-200">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-800">
          Add a Collection
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Button variant="outline" size="lg">
          <CirclePlus />
        </Button>
      </CardFooter>
    </Card>
  );
}
