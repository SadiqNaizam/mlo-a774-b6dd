import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<LucideProps>;
  change: string;
  changeType: 'increase' | 'decrease';
  period: string;
  iconBgColor: string;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
  period,
  iconBgColor,
  iconColor,
}) => {
  return (
    <Card>
      <CardContent className="flex flex-row items-start justify-between p-6 space-y-0">
        <div className="flex flex-col space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="text-4xl font-bold tracking-tight">{value}</div>
          <div className="flex items-center text-sm text-muted-foreground">
            {changeType === 'increase' ? (
              <ArrowUp className="mr-1 h-4 w-4 text-success" />
            ) : (
              <ArrowDown className="mr-1 h-4 w-4 text-destructive" />
            )}
            <span
              className={cn(
                'mr-1 font-medium',
                changeType === 'increase' ? 'text-success' : 'text-destructive'
              )}
            >
              {change}
            </span>
            {period}
          </div>
        </div>
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            iconBgColor
          )}
        >
          <Icon className={cn('h-5 w-5', iconColor)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
