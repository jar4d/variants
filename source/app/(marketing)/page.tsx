import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import BentoGridMini from "@/components/sections/bentogrid-mini";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import SectionHeader from "@/components/sections/section-header";
import CtaSection from "@/components/sections/cta-section";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <Powered /> 
      <BentoGridMini />
      <SectionHeader />
      <InfoLanding 
        data={{
          title: "Understand your customers",
          description: "Our AI analyzes your customer data to understand their language, pain points, and buying triggers.",
          code: `// Example product optimization
const product = await analyze({
  title: "Classic Cotton T-Shirt",
  description: "100% cotton tee...",
  customerData: true
});

// Returns optimized copy
product.getOptimizedDescription();`,
        }} 
      />
      <InfoLanding 
        data={{
          title: "Automatic A/B testing",
          description: "We continuously test different variations of your product descriptions to find what converts best.",
          list: [
            {
              title: "Real-time optimization",
              description: "Descriptions are updated based on performance data",
              icon: "chart"
            },
            {
              title: "Customer segmentation",
              description: "Different copy for different customer segments",
              icon: "users"
            }
          ]
        }}
        reverse
      />
      <CtaSection data={{
        title: "Ready to Transform Your Workflow?",
        subtitle: "Join thousands of teams already using our platform to boost their productivity.",
        videoSrc: "/10556705-uhd_4096_2160_25fps.mp4",
        button: {
          text: "Get Started",
          href: "#"
        },
        input: {
          placeholder: "Enter your email",
          type: "email"
        }
      }}>
        <h2>Ready to Transform Your Workflow?</h2>
        <p>Join top teams already using NotBusy to boost their productivity. Sign up for early access and a 7 day free trial.</p>
        <video src="/10556705-uhd_4096_2160_25fps.mp4" />
      </CtaSection>
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <BentoGrid /> */}

    </>
  );
}
