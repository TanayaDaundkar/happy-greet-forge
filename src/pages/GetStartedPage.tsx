
import { ComingSoonPage } from "@/components/common/ComingSoonPage";

const GetStartedPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen">
      <ComingSoonPage 
        title="Registration Coming Soon" 
        description="We're putting the finishing touches on our registration process. Soon you'll be able to create an account and begin your learning journey!" 
      />
    </div>
  );
};

export default GetStartedPage;
