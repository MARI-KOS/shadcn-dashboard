"use client"

import { Plus, Settings, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ja } from "@/i18n/ja"

const t = ja.dashboard2

export function QuickActions() {
  return (
    <div className="flex items-center space-x-2">
      <Button className="cursor-pointer">
        <Plus className="h-4 w-4 mr-2" />
        {t.newSale}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            <Settings className="h-4 w-4 mr-2" />
            {t.actions}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="cursor-pointer">
            <FileText className="h-4 w-4 mr-2" />
            {t.generateReport}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Download className="h-4 w-4 mr-2" />
            {t.exportData}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="h-4 w-4 mr-2" />
            {t.dashboardSettings}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
