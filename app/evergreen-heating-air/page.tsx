import EgNavbar from "../../components/evergreen/EgNavbar";
import EgHero from "../../components/evergreen/EgHero";
import EgTrustBar from "../../components/evergreen/EgTrustBar";
import EgServices from "../../components/evergreen/EgServices";
import EgProblemSolution from "../../components/evergreen/EgProblemSolution";
import EgWhyChooseUs from "../../components/evergreen/EgWhyChooseUs";
import EgHowItWorks from "../../components/evergreen/EgHowItWorks";
import EgServiceAreas from "../../components/evergreen/EgServiceAreas";
import EgEstimateForm from "../../components/evergreen/EgEstimateForm";
import EgFooter from "../../components/evergreen/EgFooter";

export default function EvergreenHomePage() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      {/* 1. Header / Navigation */}
      <EgNavbar />

      {/* 2. Hero */}
      <EgHero />

      {/* 3. Trust Bar */}
      <EgTrustBar />

      {/* 4. Services */}
      <EgServices />

      {/* 5. Problem / Solution */}
      <EgProblemSolution />

      {/* 6. Why Choose Us */}
      <EgWhyChooseUs />

      {/* 7. How It Works */}
      <EgHowItWorks />

      {/* 8. Service Areas */}
      <EgServiceAreas />

      {/* 9. Free Estimate CTA / Form */}
      <EgEstimateForm />

      {/* 10. Footer */}
      <EgFooter />
    </div>
  );
}
