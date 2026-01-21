import { Metadata } from 'next';
import TopografiaGeotecniaPage from '../../../components/topografia/Topografia';

export const metadata: Metadata = {
  title: "Topografia e Geotecnia",
  description:
    "Serviços especializados em topografia, geotecnia e sistemas de informação geográfica.",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <TopografiaGeotecniaPage />
    </div>
);
}