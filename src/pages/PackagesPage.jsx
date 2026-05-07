import React, { useEffect } from "react";
import HeroPack from "../components/PackagesComponents/HeroPack";
// import FleetShowcase from "../components/PackagesComponents/FleetShowcase";
import FleetSection from "../components/HomeComponents/FleetSection";
import PricingTable from "../components/PackagesComponents/PricingTable";
import Cta from "../components/Cta";
import AddOn from "../components/PackagesComponents/AddOn";
import Gallery from "../components/Gallery";
import PricingPreview from "../components/PricingPreview";
import SEO from "../components/SEO";

export default function PackagesPage() {
  useEffect(() => {
    document.title = "Redinn Tours & Travels | Packages";
  }, []);
  return (
    <div className="overflow-x-hidden">
      <SEO
        title="Luxury Travel Packages in Tirunelveli | Reddin Travels"
        description="Explore luxury travel packages from Tirunelveli including outstation trips, pilgrimage tours, airport transfers, and premium van rentals with Reddin Travels."
      />

      {/* hero section */}
      <HeroPack />

      {/* fleet showcase */}
      {/* <FleetSection /> */}
      <Gallery />

      {/* pricing table */}
      {/* <PricingTable /> */}
      <PricingPreview />

      {/* CTA */}
      <Cta />

      {/* Add ons */}
      <AddOn />
    </div>
  );
}
