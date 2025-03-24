import React from "react";
import Navbar from "@/components/main/navbar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopScroller from "@/registry/toTop";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function AboutUs() {
  return (
    <div className="px-main relative max-md:px-main-md">
      <Navbar />
      <TopScroller/>
      {/* orb */}
      <div className="blur-[200px] absolute top-[-12rem] right-[-12rem] bg-primary h-96 w-96 rounded-full" />
      <div className="relative mt-12  z-1">
        <h1 className="text-5xl font-medium md:w-[60%] max-md:text-3xl">
          Top Athletes & Global Stats
        </h1>
      </div>

      <Table className="bg-secondary border-accent rounded-2xl mt-8">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Analyze</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">
                <div className="flex gap-4 items-center">
                  <Image
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                    width={100}
                    height={100}
                    src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <div>
                    <p className="mb-2 text-lg">Phillip George</p>
                    <div className="flex items-center gap-2">
                      <Image
                        alt=""
                        className="h-4 w-auto"
                        width={100}
                        height={100}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/640px-Flag_of_Malta.svg.png"
                      />
                      <span>Malta</span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-3xl">0{index + 1}</TableCell>
              <TableCell className="text-green-500 flex-col flex justify-center">
                <ChevronUp /> <p>+1</p>
              </TableCell>
              <TableCell>Marathon</TableCell>
              <TableCell>4:00 PM</TableCell>
              <TableCell>
                <Button variant="outline">View Analyze</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AboutUs;
