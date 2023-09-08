import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const SignupForm = () => {
  return (
    <div className="w-full p-8  max-w-[400px] h-[500px] bg-white shadow-md flex flex-col items-center justify-center gap-y-4">
      <Label className="text-xl text-gray-900">Sign up for your account</Label>
      <Input placeholder="enter your email" />
      <Input placeholder="enter your email" />
    </div>
  );
};
