import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface PlayerCardProps {
  name: string;
  position: string;
  rating: number;
  pace: number;
  shooting: number;
  passing: number;
  defending: number;
  physicality: number;
  image?: string;
}

export default function PlayerCard({ 
  name, 
  position, 
  rating, 
  pace, 
  shooting, 
  passing, 
  defending, 
  physicality,
  image 
}: PlayerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getPositionColor = (pos: string) => {
    const colors: { [key: string]: string } = {
      GK: 'text-yellow-400',
      CB: 'text-red-400', 
      LB: 'text-blue-400',
      RB: 'text-blue-400',
      CDM: 'text-purple-400',
      CM: 'text-neon-cyan',
      CAM: 'text-neon-blue',
      LW: 'text-orange-400',
      RW: 'text-orange-400',
      ST: 'text-neon-green'
    };
    return colors[pos] || 'text-neon-green';
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 85) return 'text-neon-green';
    if (rating >= 80) return 'text-neon-blue';
    if (rating >= 75) return 'text-yellow-400';
    return 'text-foreground';
  };

  return (
    <Card 
      className="relative w-64 h-80 bg-scoreboard/90 backdrop-blur-md border border-neon-green/30 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.4)] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Player Image Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-stadium-dark via-stadium-dark/60 to-transparent">
        {image && (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 h-full flex flex-col">
        {/* Rating Badge */}
        <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-muted to-card border border-neon-green/50 flex items-center justify-center font-gaming font-bold text-lg ${getRatingColor(rating)}`}>
          {rating}
        </div>

        {/* Position */}
        <div className={`inline-block px-3 py-1 rounded-full bg-muted/80 backdrop-blur-sm font-gaming text-sm font-bold ${getPositionColor(position)} w-fit`}>
          {position}
        </div>

        {/* Player Name */}
        <div className="mt-auto mb-4">
          <h3 className="font-display font-bold text-xl text-foreground leading-tight">
            {name}
          </h3>
        </div>

        {/* Stats - Show on hover */}
        <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-muted/90 backdrop-blur-md rounded-lg p-3 border border-neon-green/30">
            <div className="grid grid-cols-2 gap-2 text-xs font-gaming">
              <div className="flex justify-between">
                <span className="text-muted-foreground">PAC</span>
                <span className="text-neon-green font-bold">{pace}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SHO</span>
                <span className="text-neon-green font-bold">{shooting}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">PAS</span>
                <span className="text-neon-green font-bold">{passing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">DEF</span>
                <span className="text-neon-green font-bold">{defending}</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-muted-foreground">PHY</span>
                <span className="text-neon-green font-bold">{physicality}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-neon-green/20 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </Card>
  );
}