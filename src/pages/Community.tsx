import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, CheckCircle, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Hero Section */}
      <section
        className="pt-40 pb-4 relative overflow-hidden"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold font-montserrat mb-8 bg-gradient-to-r from-[#0077B6] to-[#40C7E8] bg-clip-text text-transparent"
              style={{ lineHeight: "1.2" }}
            >
              Community Coming Soon
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              A space to connect, share, and grow together
            </p>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Why We're Building This */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white mr-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)",
                      }}
                    >
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-lexend font-bold mb-2"
                        style={{ color: "#0C7DA7" }}
                      >
                        Why We're Building This
                      </h2>
                      <p className="text-gray-600 font-lexend">
                        Bringing learners, developers, and innovators together
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 mt-6">
                    {[
                      "Ask questions and get help from peers",
                      "Engage in topic-specific discussions",
                      "Share and discover valuable resources",
                      "Collaborate on projects and ideas",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-lexend">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Be the First to Know */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white mr-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)",
                      }}
                    >
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-lexend font-bold mb-2"
                        style={{ color: "#0C7DA7" }}
                      >
                        Be the First to Know
                      </h2>
                      <p className="text-gray-600 font-lexend">
                        Get notified when the community launches
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div className="flex flex-col space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-3 border border-gray-300 rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-[#0C7DA7]"
                      />
                      <Button
                        className="text-white font-lexend font-bold py-3 hover:shadow-lg transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)",
                          borderRadius: "0.5rem",
                        }}
                      >
                        Notify Me at Launch
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 font-lexend">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;



// import { useState, useEffect } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import { useSupabaseAuth } from "@/hooks/useSupabaseAuth"; // 🆕 Supabase Auth Hook
// import { supabase } from "@/lib/supabase"; // 🆕 Supabase client
// import { MessageSquare, Users, BookOpen } from "lucide-react";
// import { Post } from "@/types/community";
// import { CommunityTabContent } from "@/components/community/CommunityTabContent";
// import { CreatePostForm } from "@/components/community/CreatePostForm";

// export default function Community() {
//   const [activeTab, setActiveTab] = useState("questions");
//   const [posts, setPosts] = useState<Post[]>([]);
//   const { toast } = useToast();
//   const { user } = useSupabaseAuth(); 

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     const { data, error } = await supabase
//       .from("posts")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) {
//       console.error("Error fetching posts:", error.message);
//       toast({
//         title: "Error",
//         description: "Failed to load community posts",
//         variant: "destructive",
//       });
//     } else {
//       setPosts(data as Post[]);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen container py-10 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6">Community</h1>
//       <p className="text-xl text-muted-foreground mb-8">
//         Connect with fellow learners, ask questions, and share resources.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <Tabs defaultValue="questions" onValueChange={setActiveTab} className="mb-8">
//             <TabsList className="w-full grid grid-cols-3">
//               <TabsTrigger value="questions">
//                 <MessageSquare className="mr-2 h-4 w-4" />
//                 Q&A
//               </TabsTrigger>
//               <TabsTrigger value="discussions">
//                 <Users className="mr-2 h-4 w-4" />
//                 Discussions
//               </TabsTrigger>
//               <TabsTrigger value="resources">
//                 <BookOpen className="mr-2 h-4 w-4" />
//                 Resources
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="questions" className="mt-6">
//               <CommunityTabContent
//                 title="Questions & Answers"
//                 description="Ask coding questions and get answers from the community."
//                 posts={posts}
//                 type="questions"
//                 emptyMessage="No questions yet. Be the first to ask!"
//               />
//             </TabsContent>

//             <TabsContent value="discussions" className="mt-6">
//               <CommunityTabContent
//                 title="Discussion Forum"
//                 description="Engage in discussions about programming, career paths, and more."
//                 posts={posts}
//                 type="discussions"
//                 emptyMessage="No discussions yet. Start the conversation!"
//               />
//             </TabsContent>

//             <TabsContent value="resources" className="mt-6">
//               <CommunityTabContent
//                 title="Shared Resources"
//                 description="Share helpful resources, tutorials, and learning materials."
//                 posts={posts}
//                 type="resources"
//                 emptyMessage="No resources shared yet. Share something useful!"
//               />
//             </TabsContent>
//           </Tabs>
//         </div>

//         <div>
//           <Card>
//             <CardHeader>
//               <CardTitle>Create a Post</CardTitle>
//               <CardDescription>
//                 Share your thoughts, questions, or resources with the community.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <CreatePostForm
//                 session={user ? { user } as any : null}
//                 activeTab={activeTab}
//                 onPostCreated={fetchPosts}
//               />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
