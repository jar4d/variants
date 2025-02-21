import Link from "next/link";
import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <section className="relative space-y-6 py-12 sm:py-20 lg:py-20">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/10556805-uhd_4096_2160_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="relative container flex max-w-5xl flex-col items-start gap-5">
        <div className="w-full sm:w-2/3 p-6">
          <h1 className="font-urban text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[66px]">
            Escape the noise. <br /> Get more done.
          </h1>
        </div>

        <div className="w-full sm:w-2/3 p-6 space-y-8">
          <p
            className="leading-normal text-white sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Little apps, big jumps for teams and managers. Integrated into your channels and workflow.
          </p>
          <div
            className="flex start space-x-2 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link
              href="/pricing"
              prefetch={true}
              className={cn(
                buttonVariants({ size: "lg", rounded: "full" }),
                "gap-2",
              )}
            >
              <span>Try for free</span>
              <Icons.arrowRight className="size-4" />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  rounded: "full",
                }),
                "px-5 text-white",
              )}
            >
              <p>
              <span>Pricing</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}