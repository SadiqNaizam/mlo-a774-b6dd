import React from 'react';
import StatCard from './StatCard';
import type { StatCardProps } from './StatCard';
import { DollarSign, Users, Activity } from 'lucide-react';

const StatsCardGrid: React.FC = () => {
  const statsData: (Omit<StatCardProps, 'icon'> & { id: string; icon: React.ElementType })[] = [
    {
      id: 'mrr',
      title: 'Monthly Recurring Revenue',
      value: '£48,320',
      icon: DollarSign,
      change: '3.2%',
      changeType: 'increase' as const,
      period: 'vs last month',
      iconBgColor: 'bg-primary/15',
      iconColor: 'text-primary',
    },
    {
      id: 'active-users',
      title: 'Active Users',
      value: '1,245',
      icon: Users,
      change: '122',
      changeType: 'increase' as const,
      period: 'this week',
      iconBgColor: 'bg-success/15',
      iconColor: 'text-success',
    },
    {
      id: 'churn-rate',
      title: 'Churn Rate',
      value: '1.8%',
      icon: Activity,
      change: '0.2%',
      changeType: 'decrease' as const,
      period: 'vs last month',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900/40',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          changeType={stat.changeType}
          period={stat.period}
          iconBgColor={stat.iconBgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;