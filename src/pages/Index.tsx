import { useState, useEffect } from 'react';
import PESNavigation from '@/components/PESNavigation';
import PlayerCard from '@/components/PlayerCard';
import Scoreboard from '@/components/Scoreboard';
import StartMatchButton from '@/components/StartMatchButton';
import stadiumImage from '@/assets/stadium-night.jpg';

const playerData = [
  {
    name: "Marcus Silva",
    position: "ST",
    rating: 88,
    pace: 92,
    shooting: 89,
    passing: 78,
    defending: 45,
    physicality: 85
  },
  {
    name: "Alex Rodriguez", 
    position: "CAM",
    rating: 85,
    pace: 81,
    shooting: 84,
    passing: 91,
    defending: 62,
    physicality: 74
  },
  {
    name: "James Thompson",
    position: "CB", 
    rating: 83,
    pace: 68,
    shooting: 35,
    passing: 78,
    defending: 92,
    physicality: 89
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartMatch = () => {
    // Scroll to latest news/match details
    document.getElementById('matches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PESNavigation />
      
      {/* Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${stadiumImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stadium-dark via-stadium-dark/60 to-stadium-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-blue/10 animate-pulse" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-green rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <h1 className="font-gaming font-bold text-6xl md:text-8xl text-neon-green mb-4 tracking-wider animate-neon-pulse">
              FC PHOENIX
            </h1>
            <p className="font-display text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-2 leading-relaxed">
              Rise from the ashes. Dominate the field.
            </p>
            <p className="font-display text-lg text-muted-foreground max-w-xl mx-auto">
              Experience football like never before with our championship squad
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <StartMatchButton onClick={handleStartMatch} text="ENTER STADIUM" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neon-green animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
            <div className="w-1 h-2 bg-neon-green rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Live Match Section */}
      <section id="matches" className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${mounted ? 'animate-slide-up' : ''}`}>
            <h2 className="font-gaming font-bold text-4xl text-center text-neon-green mb-12 tracking-wider">
              LIVE MATCH CENTER
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Current Match */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-center text-foreground">Current Match</h3>
                <Scoreboard
                  homeTeam="FC Phoenix"
                  awayTeam="Thunder FC"
                  homeScore={2}
                  awayScore={1}
                  matchTime="78"
                  matchDate="Today, 15:30"
                  venue="Phoenix Stadium"
                  isLive={true}
                />
              </div>
              
              {/* Upcoming Match */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-center text-foreground">Next Match</h3>
                <Scoreboard
                  homeTeam="Lightning United"
                  awayTeam="FC Phoenix"
                  matchDate="Sunday, 18:00"
                  venue="Lightning Arena"
                  isUpcoming={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-gaming font-bold text-4xl text-center text-neon-blue mb-4 tracking-wider">
            SQUAD SHOWCASE
          </h2>
          <p className="font-display text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet our elite players with PES-style stats and ratings
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {playerData.map((player, index) => (
              <div 
                key={player.name}
                className={`transition-all duration-700 ${mounted ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <PlayerCard {...player} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stadium-dark border-t border-neon-green/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center font-gaming font-bold text-stadium-dark">
              FC
            </div>
            <span className="font-gaming font-bold text-2xl text-neon-green">
              PHOENIX
            </span>
          </div>
          <p className="font-display text-muted-foreground mb-4">
            © 2024 FC Phoenix. All rights reserved.
          </p>
          <p className="font-gaming text-sm text-neon-green/70">
            POWERED BY PASSION • DRIVEN BY EXCELLENCE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;