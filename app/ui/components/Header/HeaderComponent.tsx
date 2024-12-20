"use client";

import { useState } from "react";
import { User, Settings, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Chains</h1>
        <nav>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setIsDarkMode((prev) => !prev)}
              variant="outline"
              size="icon"
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </Button>
            <Button variant="outline" size="icon">
              <User />
            </Button>
            <Button variant="outline" size="icon">
              <Settings />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
