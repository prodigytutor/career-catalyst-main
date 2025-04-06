"use client"
import { CallToAction } from "@/components/landingpage/CallToAction";
import { DemoShowcase } from "@/components/landingpage/DemoShowcase";
import { FAQ } from "@/components/landingpage/FAQ";
import { Features } from "@/components/landingpage/Features";
import { Footer } from "@/components/landingpage/Footer";
import { Hero } from "@/components/landingpage/Hero";
import { HowItWorks } from "@/components/landingpage/HowItWorks";
import { Nav } from "@/components/landingpage/Nav";
import { PricingPlan } from "@/components/landingpage/PricingPlan";
import { Testimonials } from "@/components/landingpage/Testimonials";
import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

import React from 'react'
import { useUser } from "@stackframe/stack";


export default function Home() {
  const user = useUser();
  return (
    <>
    <div data-section_id="9b675350-7ed1-4b4e-a1ac-74c297449ba7" data-order="0">
    <div id="root">
      < Nav />
    </div>
    </div>
    <div data-section_id="0993fbd1-4726-4084-bfa1-c7ab327d5636" data-order="1">
    <div id="root">
  <Hero />
    </div>
    </div>
    <div data-section_id="90c2b3e7-cc2e-4469-b0af-820476280c0f" data-order="2">
    <div id="root">
<Features />
    </div>
    </div>
    <div data-section_id="564068fa-32aa-416f-b554-231b1585685f" data-order="3"><div id="root">
    <HowItWorks />
    </div>
    </div>
    <div data-section_id="0fe721a6-2192-42ee-ab47-97a683f1ac20" data-order="4"><div id="root">
     <DemoShowcase />
    </div>
    </div>
    <div data-section_id="eb29ded9-c01f-4908-8cd6-4440b2040843" data-order="5"><div id="root">
<Testimonials />
    </div>
    </div>
    <div data-section_id="63681b88-cedb-4bc4-9dd7-ed5b8bc589ab" data-order="6"><div id="root">
<PricingPlan />
    </div>
    </div>
    <div data-section_id="edc79555-1cfc-4e0f-b0ec-38ad6d5022dd" data-order="7"><div id="root">
   <FAQ />
    </div>
    </div>
    <div data-section_id="b943bc00-78a1-4648-b408-747bcf062ea2" data-order="8"><div id="root">
<CallToAction />
    </div>
    </div>
    <div data-section_id="fb143073-221d-4fa2-9db0-9e21930bc636" data-order="9"><div id="root">
 <Footer />
    </div>
    </div>
    </>
  );
}
