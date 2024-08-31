import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Footer() {
  const linkList = [
    "Sell on AmaderDhokan",
    "Sell Your service on AmaderDhokan",
    "Sell on AmaderDhokan Business",
    "Sell your apps on AmaderDhokan",
    "Become a vendor on AmaderDhokan",
    "Advertise on AmaderDhokan",
    "Self-Publish with Us",
    "Host an AmaderDhokan Experience",
    "Help",
  ];
  return (
    <footer className="container mx-auto border-t bg-muted px-4 py-12">
      <div className="flex gap-4">
        {/* contact */}
        <div>
          <p className="text-sm font-semibold">Do You Need Help ?</p>
          <p className="text-xs text-muted-foreground">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>

          <div className="flex items-center gap-2">
            <Phone className="size-6" />
            <div className="py-4">
              <p className="text-xs text-muted-foreground">
                Monday-Friday: 08am-9pm
              </p>
              <p className="text-base font-bold">0 800 300-353</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="size-6" />
            <div className="py-4">
              <p className="text-xs text-muted-foreground">
                Need help with your order?
              </p>
              <p className="font-bold">info@example.com</p>
            </div>
          </div>
        </div>

        {/* link1 */}
        <div>
          <h3 className="text-sm font-semibold">Make Money with Us</h3>

          <div className="flex flex-col gap-1 py-4">
            {linkList.map((link) => (
              <Link
                href={"/"}
                key={link}
                className="text-nowrap text-sm font-light text-muted-foreground hover:underline"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* link2 */}
        <div>
          <h3 className="text-sm font-semibold">Let Us Help You</h3>
          <div className="flex flex-col gap-1 py-4">
            {linkList.map((link) => (
              <Link
                href={"/"}
                key={link}
                className="text-nowrap text-sm font-light text-muted-foreground hover:underline"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* link3 */}
        <div>
          <h3 className="text-sm font-semibold">Get to Know Us</h3>
          <div className="flex flex-col gap-1 py-4">
            {linkList.map((link) => (
              <Link
                href={"/"}
                key={link}
                className="text-nowrap text-sm font-light text-muted-foreground hover:underline"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between">
        <p className="text-center text-xs text-muted-foreground">
          © 2022 AmaderDhokan. All rights reserved
        </p>

        <div className="flex gap-2">
          <p className="cursor-pointer text-center text-xs text-muted-foreground hover:underline">
            Terms and Conditions
          </p>
          <p className="cursor-pointer text-center text-xs text-muted-foreground hover:underline">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
