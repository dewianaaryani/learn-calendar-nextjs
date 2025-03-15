import {
  Bell,
  Settings,
  ArrowRight,
  MoreVertical,
  Download,
  Upload,
  ArrowLeftRight,
  Copy,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-4">
        <div className="flex items-center gap-2 pb-8">
          <span className="text-xl font-bold">
            KALA<span className="text-primary">NA</span>
          </span>
        </div>

        <nav className="space-y-2">
          <Button variant="secondary" className="w-full justify-start gap-2">
            <div className="grid grid-cols-2 h-4 w-4 gap-0.5">
              <div className="bg-primary rounded-sm" />
              <div className="bg-primary rounded-sm" />
              <div className="bg-primary rounded-sm" />
              <div className="bg-primary rounded-sm" />
            </div>
            Dashboard
          </Button>
          {[
            "Payment",
            "Analytics",
            "Cards",
            "History",
            "Services",
            "Settings",
          ].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <div className="h-4 w-4" />
              {item}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        {/* Header */}
        <header className="border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline">+ Add new</Button>
              <Button variant="outline" className="gap-2">
                11 Nov - 11 Dec, 2026
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 p-4">
          {[
            { title: "Become Pro Version", icon: "⭐", bg: "bg-yellow-100" },
            { title: "Make Maximum Profits", icon: "📈", bg: "bg-blue-100" },
            {
              title: "Best Deals of the Month",
              icon: "🎁",
              bg: "bg-green-100",
            },
            { title: "Profit of the Month", icon: "📊", bg: "bg-red-100" },
          ].map((action) => (
            <Card
              key={action.title}
              className="group cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${action.bg}`}
                >
                  <span className="text-xl">{action.icon}</span>
                </div>
                <h3 className="font-medium">{action.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* ATMs Map */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="font-semibold">ATMs On The Map</h3>
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 bg-muted rounded-lg">
                <div className="absolute bottom-2 left-2 text-sm text-muted-foreground">
                  We found 24 ATM
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cashback Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="font-semibold">Cashback And Discount</h3>
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <Progress value={65} className="mb-4" />
              <div className="flex gap-2">
                {["S", "J", "A", "L", "D"].map((letter) => (
                  <Avatar key={letter} className="h-8 w-8 bg-primary/10">
                    <AvatarFallback>{letter}</AvatarFallback>
                  </Avatar>
                ))}
                <Avatar className="h-8 w-8 bg-primary/10">
                  <AvatarFallback>+5</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Finance Cards */}
        <div className="p-4">
          <Card className="bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Card Number
                  </div>
                  <div className="font-mono">1234 5678 8910 XXXX</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">
                    Valid Thru
                  </div>
                  <div>22 / 27</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-muted-foreground">Card Holder</div>
                <div>Zubaedah Valcova</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Balance and Actions */}
        <div className="p-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Total Balance
                  </div>
                  <div className="text-3xl font-bold">$9,385.34</div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Upload className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
