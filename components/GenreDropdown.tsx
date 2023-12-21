import { dataGenres } from "@/app/data/Genres"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

import Link from "next/link"
const GenreDropdown = () => {
  return (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex text-white justify-center items-center">
      Genre

    <ChevronDown className="ml-1"/>
    </DropdownMenuTrigger>
<DropdownMenuContent>
  <DropdownMenuLabel>
    Select a Genre
  </DropdownMenuLabel>
  <DropdownMenuSeparator />

{dataGenres.map((genre) =>(
  <DropdownMenuItem key={genre.id}>
    <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
      {genre.name}
    </Link>

  </DropdownMenuItem>
))}
</DropdownMenuContent>

  </DropdownMenu>
  )
}

export default GenreDropdown 