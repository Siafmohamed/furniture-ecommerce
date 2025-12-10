import{ useState } from "react";
import Input from "../../atoms/Input/Input";
import { toast } from "sonner";
const FooterSocial = () => {
  const [email, setEmail] = useState("");

 const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter an email!");
      return;
    }
    toast.success(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="col-span-2 md:col-span-1">
      <h4 className="font-semibold text-gray-800 mb-4">Newsletter</h4>
      <div className="flex items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-3 border-b border-gray-400 focus:border-amber-500"
        />
        <button
          onClick={handleSubscribe}
          className="py-2 px-4 border-b border-gray-400 font-medium text-sm hover:text-amber-500 transition"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default FooterSocial;
