"use client";

import Image from "next/image";
import NavBar from "@/components/dashboard/dashboardNav";
import DashBoard from "@/components/dashboard/parentDash";
import Transactions from "@/components/dashboard/topProducts";
import OrderCard from "@/components/dashboard/orders";
import SalesBarChart from "@/components/dashboard/BarGraph";

export default function Home() {
  return (
    <>
    <NavBar/>
    <DashBoard/>
    <SalesBarChart/>
    <Transactions/>
    <OrderCard/>
    </>
  );
}
