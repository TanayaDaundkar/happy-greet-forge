import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIAssessmentModal({ isOpen, onClose }: AIAssessmentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] flex flex-col text-white"
        style={{ backgroundColor: "#0F1026" }}
      >
        <DialogHeader>
          <DialogTitle>AI Career Assessment</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Brain className="h-12 w-12 text-primary" /> {/* Icon color unchanged */}
          </div>

          <h2 className="text-2xl font-bold">Coming Soon!</h2>

          <p className="text-white/70 max-w-md">
            Stay Tuned! We will update you.
          </p>

          <Button
            onClick={onClose}
            className="mt-4 bg-[#F57E20] hover:bg-[#e76c0f] text-white"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
