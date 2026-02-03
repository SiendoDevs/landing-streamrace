import * as React from "react"
import * as RPNInput from "react-phone-number-input"
import Input from "react-phone-number-input/input"
import flags from "react-phone-number-input/flags"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Input as ShadcnInput } from "./input"
import { cn } from "../../lib/utils"

const PhoneInput = React.forwardRef(({ className, value, onChange, defaultCountry = "AR", ...props }, ref) => {
  const [country, setCountry] = React.useState(defaultCountry)

  return (
    <div className={cn("flex space-x-2", className)}>
      <Select value={country} onValueChange={setCountry}>
        <SelectTrigger className="w-[110px] bg-white/5 border-white/10 text-white focus:ring-0 focus:ring-offset-0 focus:border-(--accent)">
          <SelectValue placeholder="País">
             {country && flags[country] ? (
               <div className="flex items-center gap-2">
                 {React.createElement(flags[country], { title: country, className: "w-6 h-4 rounded-sm" })}
                 <span className="text-xs text-white/70">+{RPNInput.getCountryCallingCode(country)}</span>
               </div>
             ) : (
               <span className="text-xs">País</span>
             )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#1A1A1A] border-white/10 text-white max-h-[300px]">
           {RPNInput.getCountries().map((c) => (
             <SelectItem key={c} value={c} className="focus:bg-white/10 focus:text-white cursor-pointer">
               <div className="flex items-center gap-2">
                 {flags[c] && React.createElement(flags[c], { title: c, className: "w-5 h-3 rounded-sm" })}
                 <span className="text-white/70">+{RPNInput.getCountryCallingCode(c)}</span>
                 <span className="text-white ml-1 text-xs truncate max-w-[100px]">{c}</span>
               </div>
             </SelectItem>
           ))}
        </SelectContent>
      </Select>
      <Input
        international
        country={country}
        value={value}
        onChange={onChange}
        inputComponent={ShadcnInput}
        className={cn("flex-1 bg-white/5 border-white/10 text-white focus:border-(--accent)")}
        placeholder="Número de celular"
        {...props}
      />
    </div>
  )
})
PhoneInput.displayName = "PhoneInput"

export { PhoneInput }
