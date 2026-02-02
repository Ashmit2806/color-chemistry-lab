import { useState } from "react";
import { Plus, Play, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import animatedVideo1 from "@/assets/animated-video-1.mp4";

interface AnimatedVideo {
  id: string;
  title: string;
  url: string;
  isLocal?: boolean;
}

export function AnimatedVideosSection() {
  const [videos, setVideos] = useState<AnimatedVideo[]>([
    {
      id: "1",
      title: "Food Colour Identification Process",
      url: animatedVideo1,
      isLocal: true
    }
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddVideo = () => {
    if (!newTitle.trim() || !newUrl.trim()) {
      toast.error("Please fill in both title and URL");
      return;
    }

    // Convert YouTube watch URL to embed URL if needed
    let embedUrl = newUrl;
    if (newUrl.includes("youtube.com/watch")) {
      const videoId = new URL(newUrl).searchParams.get("v");
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (newUrl.includes("youtu.be/")) {
      const videoId = newUrl.split("youtu.be/")[1]?.split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    const newVideo: AnimatedVideo = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      url: embedUrl
    };

    setVideos([...videos, newVideo]);
    setNewTitle("");
    setNewUrl("");
    setShowAddForm(false);
    toast.success("Video added successfully!");
  };

  const handleDeleteVideo = (id: string) => {
    setVideos(videos.filter(v => v.id !== id));
    toast.success("Video removed");
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground leading-relaxed">
        Explore animated videos that demonstrate the orange dye preparation process and related chemistry concepts. Add your own educational videos to expand the collection.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="aspect-video bg-muted">
              {video.isLocal ? (
                <video
                  src={video.url}
                  title={video.title}
                  className="w-full h-full object-cover"
                  controls
                />
              ) : (
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                <h5 className="font-medium text-card-foreground text-sm">{video.title}</h5>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteVideo(video.id)}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {!showAddForm ? (
        <Button
          onClick={() => setShowAddForm(true)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Animated Video
        </Button>
      ) : (
        <div className="rounded-xl border border-border bg-accent/30 p-6 space-y-4">
          <h4 className="font-display text-lg font-semibold text-card-foreground">
            Add New Animated Video
          </h4>
          <div className="space-y-3">
            <Input
              placeholder="Video Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="bg-background"
            />
            <Input
              placeholder="YouTube URL or Embed URL"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="bg-background"
            />
          </div>
          <div className="flex gap-3">
            <Button onClick={handleAddVideo} className="bg-primary hover:bg-primary/90">
              Add Video
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddForm(false);
                setNewTitle("");
                setNewUrl("");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
