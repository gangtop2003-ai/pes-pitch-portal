import { Play, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StartMatchButtonProps {
  onClick?: () => void;
  text?: string;
}

export default function StartMatchButton({ 
  onClick, 
  text = "START MATCH" 
}: StartMatchButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="group relative px-8 py-6 bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green text-stadium-dark font-gaming font-bold text-xl uppercase tracking-wider rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--neon-green)/0.8)] border-2 border-transparent hover:border-neon-green/50 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      {/* Content */}
      <div className="relative flex items-center gap-3 z-10">
        <Play 
          size={24} 
          className="group-hover:animate-pulse transition-all duration-300 fill-current" 
        />
        <span className="group-hover:tracking-widest transition-all duration-300">
          {text}
        </span>
        <ChevronRight 
          size={20} 
          className="group-hover:translate-x-1 transition-transform duration-300" 
        />
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-green via-neon-blue to-neon-green bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite] transition-opacity duration-500" />
      
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-xl bg-neon-green/30 scale-100 group-hover:scale-110 group-hover:opacity-0 transition-all duration-700" />
      <div className="absolute inset-0 rounded-xl bg-neon-green/20 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-1000 delay-100" />
    </Button>
  );
}