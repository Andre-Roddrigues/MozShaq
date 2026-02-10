import EnergiaSustentavelPage from "../../../components/consultoria/energia-sustentavel/energiasustentavel";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Energia Sustentável",
  description:
    "Consultoria especializada em energias renováveis e eficiência energética para um futuro sustentável.",
};

export default function Page() {
return(
    <div className="">
    <EnergiaSustentavelPage />
    </div>
);
}