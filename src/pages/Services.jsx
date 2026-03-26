import PageShell from "../components/layout/PageShell";
import Seo from "../components/common/Seo";
import SectionWrapper from "../components/common/SectionWrapper";
import Card from "../components/common/Card";
import FadeInSection from "../components/animations/FadeInSection";
import AnimatedText from "../components/common/AnimatedText";
import Button from "../components/common/Button";
import { services } from "../utils/data";

function Services() {
  return (
    <PageShell
      hero={
        <SectionWrapper className="pb-10 pt-16 sm:pt-20">
          <Seo
            title="Services"
            description="Explore SAtronix Technology services across web development, app development, video editing, AI reels, and creative content."
          />
          <FadeInSection className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-white" style={{ color: "#ffffff" }}>Services</p>
            <AnimatedText
              text="Focused services. Premium execution."
              className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-6xl" style={{ color: "#ffffff" }}
            />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white" style={{ color: "#ffffff" }}>
              We keep our offering intentionally sharp so every engagement gets senior
              attention, premium design thinking, and production-grade frontend craft.
            </p>
          </FadeInSection>
        </SectionWrapper>
      }
    >
      <SectionWrapper className="pt-4">
        <FadeInSection className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-white" style={{ color: "#ffffff" }}>What We Build</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl" style={{ color: "#ffffff" }}>
            Premium digital services designed to stay sharp, fast, and easy to use.
          </h2>
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.title} delay={index * 0.08}>
                <Card className="h-full border-white/14 bg-slate-950/30 shadow-[0_24px_80px_rgba(15,23,42,0.58)]">
                  <div className="flex items-center justify-between">
                    <span className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-200 sm:rounded-3xl sm:p-4">
                      <Icon size={22} className="sm:h-7 sm:w-7" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white" style={{ color: "#ffffff" }}>
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-white sm:mt-8 sm:text-3xl" style={{ color: "#ffffff" }}>{service.title}</h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white sm:text-lg sm:leading-8" style={{ color: "#ffffff" }}>{service.description}</p>
                  <div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
                    {service.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl border border-cyan-200/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:py-3 sm:text-base" style={{ color: "#ffffff" }}
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-6">
        <FadeInSection>
          <div className="glass-panel flex flex-col gap-5 rounded-[24px] p-5 sm:rounded-[32px] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white" style={{ color: "#ffffff" }}>Ready to Build</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white" style={{ color: "#ffffff" }}>
                Need a website, app, or content system that feels premium from the first interaction?
              </h3>
            </div>
            <Button as="link" to="/contact" variant="gradient">
              Book a Discovery Call
            </Button>
          </div>
        </FadeInSection>
      </SectionWrapper>
    </PageShell>
  );
}

export default Services;


