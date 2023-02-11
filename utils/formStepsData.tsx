import AddOns from "@/components/StepsContent/AddOns/AddOns";
import SelectPlan from "@/components/StepsContent/SelectPlan/SelectPlan";
import YourInfos from "@/components/StepsContent/YourInfos/YourInfos";
import Summary from "@/components/StepsContent/Summary/Summary";

export default [
  { step: 1, describe: "Your infos", component: () => <YourInfos /> },
  {
    step: 2,
    describe: "Select plan",
    component: () => <SelectPlan />,
  },
  { step: 3, describe: "Add-ons", component: () => <AddOns /> },
  { step: 4, describe: "Summary", component: () => <Summary /> },
];
