export default function EixosScroll() {
  const eixos = [
    "Estudos Ambientais e Sociais",
    "Saúde e Segurança Ocupacional",
    "Sistemas de Gestão e Certificação",
    "Energias Renováveis",
    "SHERQ Academy",
  ];

  return (
    <div className="relative overflow-hidden w-full py-4">
      <div className="flex gap-4 animate-scroll">
        {[...eixos, ...eixos].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap bg-brand-blue/20 border border-brand-blue text-sm px-3 py-1 rounded-full text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
