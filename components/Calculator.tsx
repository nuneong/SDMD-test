"use client";

import React, { useState, useMemo } from 'react';
import { COST_ITEMS } from '@/constants/calculator';
import ServiceCard from './ServiceCard';

const Calculator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const totals = useMemo(() => {
    const selectedItems = COST_ITEMS.filter(item => selectedIds.includes(item.id));
    const monthlySavings = selectedItems.reduce((acc, item) => acc + item.cost, 0);
    const yearlySavings = monthlySavings * 12;
    const monthlyHours = selectedItems.reduce((acc, item) => acc + item.hours, 0);
    const yearlyHours = monthlyHours * 12;
    return { monthlySavings, yearlySavings, monthlyHours, yearlyHours };
  }, [selectedIds]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="w-full relative pb-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-6 md:px-12 max-w-7xl mx-auto">
        {COST_ITEMS.map((item) => (
          <ServiceCard
            key={item.id}
            item={item}
            isSelected={selectedIds.includes(item.id)}
            onToggle={handleToggle}
          />
        ))}
        {/* Savings Result Card - Placed naturally at the end */}
        <div className="col-span-2 md:col-span-2 flex flex-col justify-center p-6 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0A0A0C] to-purple-500/10 relative overflow-hidden group min-h-[160px]">
          
          {/* Background decorative effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-around gap-6 h-full text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">월간 절감액</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white tabular-nums tracking-tight">
                  {formatCurrency(totals.monthlySavings)}
                </span>
                <span className="text-lg text-gray-400 tabular-nums">
                  {totals.monthlyHours}hrs
                </span>
              </div>
            </div>
            
            {/* Divider for desktop */}
            <div className="hidden sm:block w-px h-16 bg-[#1F1F25]/50"></div>
            
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-2">연간 절감액</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white tabular-nums tracking-tight">
                  {formatCurrency(totals.yearlySavings)}
                </span>
                <span className="text-xl text-gray-400 tabular-nums">
                  {totals.yearlyHours}hrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

