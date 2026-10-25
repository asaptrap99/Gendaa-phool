import {
  Boxes, ClipboardList, DoorOpen, Flower2, HeartHandshake, MapPinned, PackageCheck, Palette,
  PartyPopper, ReceiptIndianRupee, ShieldCheck, Stamp, Trophy, Truck, UserRound, type LucideProps,
} from "lucide-react";

const icons = {
  Boxes, ClipboardList, DoorOpen, Flower2, HeartHandshake, MapPinned, PackageCheck, Palette,
  PartyPopper, ReceiptIndianRupee, ShieldCheck, Stamp, Trophy, Truck, UserRound,
};

export type IconName = keyof typeof icons;

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = icons[name as IconName] ?? Flower2;
  return <C aria-hidden="true" {...props} />;
}
