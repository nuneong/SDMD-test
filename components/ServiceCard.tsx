import React from 'react';
import { Check } from 'lucide-react';
import { CostItem } from '@/types/calculator';
import { ICON_MAP } from '@/constants/calculator';

interface ServiceCardProps {
  item: CostItem;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, isSelected, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(item.id)}
      className={`
        relative group cursor-pointer 
        flex flex-col justify-between
        p-3 lg:p-4 rounded-2xl border transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10
        ${isSelected 
          ? 'bg-purple-500/10 border-purple-500 shadow-[0_0_20px_rgba(124,58,237,0.2)]' 
          : 'bg-[#0A0A0C] border-[#1F1F25] hover:border-gray-600'}
      `}
      style={{ minHeight: 'calc(100% * 2/3)' }}
    >
      <div className="flex items-start justify-between mb-2 lg:mb-3">
        <div className={`
          p-2 lg:p-2.5 rounded-xl transition-colors duration-300
          ${isSelected ? 'bg-purple-500 text-white' : 'bg-[#050505] border border-[#1F1F25] text-gray-400 group-hover:text-white'}
        `}>
          {ICON_MAP[item.id]}
        </div>
        
        {/* Checkbox Indicator */}
        <div className={`
          w-4 h-4 lg:w-5 lg:h-5 rounded-full border flex items-center justify-center transition-all duration-300
          ${isSelected 
            ? 'bg-purple-500 border-purple-500 scale-110' 
            : 'border-gray-600 bg-transparent group-hover:border-gray-400'}
        `}>
          <Check size={12} className={`text-white transition-transform ${isSelected ? 'scale-100' : 'scale-0'}`} />
        </div>
      </div>
      <div>
        <h3 className={`text-sm lg:text-base font-semibold mb-1 lg:mb-1.5 transition-colors ${isSelected ? 'text-white' : 'text-gray-200'}`}>
          {item.id === 'web' ? (
            <>
              <span className="lg:hidden">웹사이트 수정 수정·관리</span>
              <span className="hidden lg:inline">{item.name}</span>
            </>
          ) : (
            item.name
          )}
        </h3>
        
        <div className="space-y-0.5">
          <div className="flex items-center justify-between text-xs lg:text-sm">
             <span className="text-gray-500">월 비용</span>
             <span className={`font-medium ${isSelected ? 'text-purple-400' : 'text-gray-300'}`}>
               ${item.cost.toLocaleString()}
             </span>
          </div>
          {item.hours > 0 && (
            <div className="flex items-center justify-between text-xs lg:text-sm">
              <span className="text-gray-500">소요 시간</span>
              <span className="text-gray-400">{item.hours} hrs</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

