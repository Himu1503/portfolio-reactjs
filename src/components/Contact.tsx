import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/AnimatedSection"
import { TiltCard } from "@/components/TiltCard"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100 section-heading">Get In Touch</h2>
        <TiltCard>
          <Card className="card-aurora border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-cyan-900/15">
            <CardHeader>
              <CardTitle className="text-slate-100">Let's Work Together</CardTitle>
              <CardDescription className="text-slate-300">
                I'm always open to discussing new projects and opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-200">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <a
                    href="mailto:himanshusaxenaunreal@gmail.com"
                    className="hover:underline decoration-cyan-300"
                  >
                    himanshusaxenaunreal@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-slate-200">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  <a href="tel:+447459840136" className="hover:underline decoration-cyan-300">
                    +44 7459840136
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                  <span className="text-slate-300">London, United Kingdom</span>
                </div>
              </div>
              <Button size="lg" className="w-full shadow-lg shadow-cyan-500/20" href="mailto:himanshusaxenaunreal@gmail.com">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </TiltCard>
      </div>
    </AnimatedSection>
  )
}

