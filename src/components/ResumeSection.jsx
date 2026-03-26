import { Download, ExternalLink } from "lucide-react";

export const ResumeSection = () => {
  const resumeUrl = "/resume.pdf";

  return (
    <section id="resume" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View my resume below or download it for offline viewing.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href={resumeUrl}
            download="resume.pdf"
            className="cosmic-button flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-secondary/20 hover:bg-secondary/30 border border-white/10 text-foreground hover:scale-105 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
            Open in New Tab
          </a>
        </div>

        <div className="w-full max-w-4xl mx-auto h-[520px] md:h-[720px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-20px_rgba(124,90,255,0.45)] bg-card/50 backdrop-blur">
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Resume Viewer"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};