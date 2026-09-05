import { Metadata } from 'next';
import TopografiaGeotecniaPage from '../../../components/topografia/Topografia';

export const metadata: Metadata = {
  title: "Topografia e Geotecnia",
  description:
    "Serviços especializados em topografia, geotecnia e sistemas de informação geográfica.",
};

export default function Page() {
return(
    <div className="">
    <TopografiaGeotecniaPage />
    </div>
);
}