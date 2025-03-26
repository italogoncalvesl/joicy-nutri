interface NavigationProps {
  step: number;
}

export default function Navigation({ step }: NavigationProps) {
  const navigationWhite = 4 - step;
  return (
    <div className="flex gap-x-1 mb-1">
      {Array.from({ length: step }).map((_, index) => (
        <div key={index} className="w-full h-1 bg-purple rounded-lg"></div>
      ))}
      {Array.from({ length: navigationWhite }).map((_, index) => (
        <div key={index} className="w-full h-1 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  );
}
