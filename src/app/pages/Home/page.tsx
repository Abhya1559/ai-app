"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export default function Landing() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setIsloading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsloading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      headers: {
        "x-rapidapi-key": "42f24896b9msha4857ae161638ffp1ce654jsn7f84d7466509",
        "x-rapidapi-host":
          "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        prompt: prompt,
        style_id: 2,
        size: "1-1",
      },
    };

    try {
      const response = await axios.request(options);
      //   console.log(response.data);
      //   setImage(response?.data.url);
      // setImage(response.data.final_result[0].origin);
      const imageUrls = response.data.final_result.map(
        (img: any) => img.origin
      );
      setImage(imageUrls[0]);
      console.log(response);
      toast.success("Image generated successfully");
    } catch (error: unknown) {
      //   console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occured");
      }
    } finally {
      setIsloading(false);
    }
    setPrompt("")
  };
  return (
    <>
      <Card className="w-full max-w-md mt-10 shadow-xl rounded-lg">
        <CardContent className="pt-6 pb-4">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold text-gray-800">
                Enter your prompt
              </h1>
              <p className="text-sm text-gray-500">
                Please type your prompt in the box below.
              </p>
            </div>
            <div>
              <textarea
                id="prompt"
                name="prompt"
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt..."
                className="w-full border hover:shadow-xl border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 text-white transition duration-300 cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      {loading && (
        <div>
          <Loader className="animate-spin mt-6" />
        </div>
      )}
      {image && (
        <div className="mt-8 flex flex-col items-center">
          <img
            src={image}
            alt="ai-image"
            className="max-w-full h-[500px] rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
