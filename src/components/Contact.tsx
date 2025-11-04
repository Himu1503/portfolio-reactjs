import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 backdrop-blur-sm relative z-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Let's Work Together</CardTitle>
            <CardDescription>
              I'm always open to discussing new projects and opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:himanshusaxenaunreal@gmail.com"
                  className="hover:underline"
                >
                  himanshusaxenaunreal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5" />
                <a href="tel:+447459840136" className="hover:underline">
                  +44 7459840136
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5" />
                <span className="text-muted-foreground">📍 United Kingdom</span>
              </div>
            </div>
            <Button size="lg" className="w-full" href="mailto:himanshusaxenaunreal@gmail.com">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

