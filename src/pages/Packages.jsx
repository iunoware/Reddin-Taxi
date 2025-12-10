import React, { useEffect } from "react";
import HeroPack from "../components/PackagesComponents/HeroPack";
// import FleetShowcase from "../components/PackagesComponents/FleetShowcase";
import FleetSection from "../components/HomeComponents/FleetSection";
import PricingTable from "../components/PackagesComponents/PricingTable";
import Cta from "../components/Cta";
import AddOn from "../components/PackagesComponents/AddOn";

export default function Packages() {
  useEffect(() => {
    document.title = "Redinn Tours & Travels | Packages";
  }, []);
  return (
    <div className="overflow-x-hidden">
      {/* hero section */}
      <HeroPack />

      {/* fleet showcase */}
      <FleetSection />

      {/* pricing table */}
      <PricingTable />

      {/* CTA */}
      <Cta />

      {/* Add ons */}
      <AddOn />
    </div>
  );
}
