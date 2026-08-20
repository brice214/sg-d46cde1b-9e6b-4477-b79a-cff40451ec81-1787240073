export function PositioningBanner() {
  const items = ["INSPECTER", "CONTRÔLER", "VÉRIFIER", "CERTIFIER", "FORMER"];
  
  return (
    <section className="bg-primary py-6 overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-8 md:gap-12">
              <span className="text-white font-heading font-semibold text-lg md:text-xl tracking-wider">
                {item}
              </span>
              {index < items.length - 1 && (
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}