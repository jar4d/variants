import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "How secure is my data with NotBusy?",
    answer:
      "Very secure.  We take this so seriously, it's been built into the heart of our platform.",  },
  {
    id: "item-2",
    question: "What languages does NotBusy support?",
    answer:
      "Right now, we support English and American English.  We're working on adding more languages soon.",
  },
  {
    id: "item-3",
    question: "Is there a difference between the free and paid plans?",
    answer:
      "Our standard plan and free trial are the same.  The paid plans offers more queries, access to new features and support.",
  },
  {
    id: "item-4",
    question: "Do you offer any annual subscription plans?",
    answer:
      "Yes, scoop a great saving with an annual plan - wit 20% off the monthly equivalent.",
  },

];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <HeaderSection
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Dig into our FAQ to find quick answers to common
          inquiries. If you need further assistance, don't hesitate to
          chat to the team."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
