export default function Hero3D() {
  // Replace URL with your Spline scene when ready
  const splineUrl =
    "https://prod.spline.design/placeholder/scene.splinecode";
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/30 shadow-[0_10px_40px_rgba(31,42,68,0.25)]">
      <iframe
        src={splineUrl}
        className="absolute inset-0 h-full w-full"
        frameBorder="0"
        aria-label="Interactive 3D illustration"
      />
      <div className="absolute bottom-2 right-3 text-[10px] text-white/70 bg-black/20 backdrop-blur px-2 py-1 rounded">
        3D 데모(교체 가능)
      </div>
    </div>
  );
}




