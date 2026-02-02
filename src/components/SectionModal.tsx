import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

interface SectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function SectionModal({ isOpen, onClose, title, children }: SectionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-card border-border">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-display text-2xl md:text-3xl text-card-foreground">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-100px)] px-6 pb-6">
          <div className="pt-4">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
