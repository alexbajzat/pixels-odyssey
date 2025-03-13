const CelestialObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Planet */}
      <div className="absolute w-20 h-20 top-20 right-[20%] animate-float-slow">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-zinc-700/50" />
      </div>

      {/* Small meteor */}
      <div className="absolute w-1 h-1 top-40 left-[30%] animate-float-diagonal">
        <div className="w-full h-full rounded-full bg-green-500/50 blur-[1px]" />
      </div>

      {/* Spaceship */}
      <div className="absolute w-8 h-4 bottom-[20%] left-[15%] animate-float-medium">
        <div className="w-full h-full bg-zinc-800/50 backdrop-blur-sm rotate-12 clip-ship border border-zinc-700/50" />
      </div>

      {/* Large meteor */}
      <div className="absolute w-2 h-2 top-[60%] right-[25%] animate-float-fast">
        <div className="w-full h-full rounded-full bg-orange-500/50 blur-[2px]" />
      </div>

      {/* Small planet */}
      <div className="absolute w-12 h-12 bottom-32 right-[40%] animate-float-medium">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-500/20 to-zinc-700/20 backdrop-blur-sm border border-zinc-700/50" />
      </div>
    </div>
  );
};

export default CelestialObjects; 