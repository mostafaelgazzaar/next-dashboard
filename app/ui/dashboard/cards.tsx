import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";
import { ENVIROMENT } from "@/app/lib/enums/dashboard";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { numberOfUsers, moduleCounts, envCountsData } = await fetchCardData();

  return (
    <>
      <Card title="عدد الموديولات " value={moduleCounts} type="invoices" />
      <Card title=" عدد المستخدمين" value={numberOfUsers} type="customers" />
      {envCountsData.map((envCountData) => (
        <Card
          key={envCountData.env}
          title={
            envCountData.env === ENVIROMENT.low
              ? "الطلبة بالمستوي المنخفض"
              : envCountData.env === ENVIROMENT.medium
              ? "الطلبة بالمستوي المتوسط"
              : "الطلبة بالمستوي العالي"
          }
          value={envCountData.count}
          type="customers"
        />
      ))}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="mr-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
