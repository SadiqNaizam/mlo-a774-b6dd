import React from 'react';
import { Bell, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

/**
 * TopHeader component displays the main application header.
 * It includes a menu toggle, notification bell, and user profile information.
 * The layout is responsive and sticks to the top of the viewport.
 */
const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
      {/* Left Side: Menu Toggle */}
      <Button variant="ghost" size="icon" aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Right Side: Notifications & User Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <Button variant="ghost" size="icon" aria-label="View notifications">
            <Bell className="h-5 w-5" />
          </Button>
          {/* Notification indicator dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/40?u=eleanor-vance" alt="Eleanor Vance" />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-foreground">Eleanor Vance</p>
            <p className="text-xs text-muted-foreground">Data Analyst</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
