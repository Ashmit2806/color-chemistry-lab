import processVideo from "@/assets/process-video.mp4";

export function VideoSection() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground leading-relaxed">
        Watch the demonstration video below to see the orange dye preparation process in action. This visual guide complements the theoretical knowledge with practical insights.
      </p>
      
      <div className="relative overflow-hidden rounded-xl border border-border bg-black">
        <video
          controls
          className="w-full aspect-video"
          poster="/placeholder.svg"
        >
          <source src={processVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="rounded-xl bg-accent/50 p-5 border border-border">
        <h4 className="font-display text-lg font-semibold text-card-foreground mb-2">
          Video Highlights
        </h4>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Step-by-step demonstration of the mixing process</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Visual observation of color changes during heating</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Separation and purification techniques</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Safety precautions when handling chemicals</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
