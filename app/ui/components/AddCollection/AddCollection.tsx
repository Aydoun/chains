import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddCollection() {
  return (
    <Card className="w-96 bg-black shadow-xl rounded-xl border border-gray-700 relative overflow-hidden">
      <CardHeader className="text-center relative z-10">
        <CardTitle className="text-2xl font-bold text-white">
          Add a Collection
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center relative z-10">
        <Button
          size="lg"
          className="flex items-center space-x-2 bg-pink-500 text-white hover:bg-pink-600"
        >
          <CirclePlus className="w-5 h-5" />
          <span>Add</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
