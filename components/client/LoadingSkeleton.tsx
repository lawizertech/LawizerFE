function LoadingSkeletonCards() {
  return (
    <div className="w-full flex gap-4 overflow-hidden px-4 justify-between">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="w-[202px] h-72 bg-gray-200 animate-pulse rounded-xl"
        ></div>
      ))}
    </div>
  );
}

export default LoadingSkeletonCards;
