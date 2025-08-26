import { Clock, CalendarDays, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ScoreboardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  matchTime?: string;
  matchDate: string;
  venue: string;
  isLive?: boolean;
  isUpcoming?: boolean;
}

export default function Scoreboard({
  homeTeam,
  awayTeam, 
  homeScore,
  awayScore,
  matchTime,
  matchDate,
  venue,
  isLive = false,
  isUpcoming = false
}: ScoreboardProps) {
  return (
    <Card className="bg-scoreboard/95 backdrop-blur-md border border-neon-green/30 p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-neon-green'}`} />
          <span className="font-gaming text-sm text-muted-foreground uppercase tracking-wide">
            {isLive ? 'LIVE' : isUpcoming ? 'UPCOMING' : 'RESULT'}
          </span>
        </div>
        {isLive && matchTime && (
          <div className="flex items-center gap-1 text-neon-green font-gaming font-bold">
            <Clock size={14} />
            <span>{matchTime}'</span>
          </div>
        )}
      </div>

      {/* Teams and Score */}
      <div className="grid grid-cols-7 items-center gap-4 mb-4">
        {/* Home Team */}
        <div className="col-span-3 text-right">
          <div className="font-display font-bold text-lg text-foreground leading-tight">
            {homeTeam}
          </div>
        </div>

        {/* Score */}
        <div className="col-span-1 text-center">
          <div className="bg-gradient-to-r from-neon-green to-neon-blue rounded-lg p-2 font-gaming font-bold text-xl text-stadium-dark">
            {isUpcoming ? 'VS' : `${homeScore ?? 0} - ${awayScore ?? 0}`}
          </div>
        </div>

        {/* Away Team */}
        <div className="col-span-3 text-left">
          <div className="font-display font-bold text-lg text-foreground leading-tight">
            {awayTeam}
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CalendarDays size={14} className="text-neon-blue" />
          <span className="font-display">{matchDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-neon-blue" />
          <span className="font-display">{venue}</span>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-blue/10 rounded-lg pointer-events-none" />
    </Card>
  );
}