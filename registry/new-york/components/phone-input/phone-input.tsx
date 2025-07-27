"use client";
import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import Fuse from "fuse.js";
import { Button } from "@/registry/new-york/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command";
import { Input } from "@/registry/new-york/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover";
import { ScrollArea } from "@/registry/new-york/ui/scroll-area";
import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, ...props }, ref) => {
      return (
        <RPNInput.default
          ref={ref}
          className={cn("flex", className)}
          flagComponent={FlagComponent}
          countrySelectComponent={CountrySelect}
          inputComponent={InputComponent}
          smartCaret={false}
          onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
          {...props}
          data-oid="hf5d41r"
        />
      );
    },
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
  <Input
    className={cn("rounded-e-lg rounded-s-none", className)}
    {...props}
    ref={ref}
    data-oid="hcjo-mx"
  />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = {
  label: string;
  value: RPNInput.Country | undefined;
  code: string;
};

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: rawCountryList,
  onChange,
}: CountrySelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const countryList = React.useMemo(
    () =>
      rawCountryList.map((country) => ({
        ...country,
        code: country.value
          ? `+${RPNInput.getCountryCallingCode(country.value)}`
          : "",
      })),
    [rawCountryList],
  );

  const fuse = React.useMemo(
    () =>
      new Fuse(countryList, {
        keys: ["label", "value", "code"],
        threshold: 0.3,
        ignoreLocation: true,
      }),
    [countryList],
  );

  const filteredCountries = React.useMemo(() => {
    if (!inputValue) return countryList;
    return fuse.search(inputValue).map((result) => result.item);
  }, [fuse, inputValue, countryList]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setInputValue("");
    }
  };

  const getCountryCode = (country: RPNInput.Country | undefined) => {
    try {
      return country ? `+${RPNInput.getCountryCallingCode(country)}` : "";
    } catch {
      return "";
    }
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange} data-oid="urv:-ba">
      <PopoverTrigger asChild data-oid="91s.xl-">
        <Button
          type="button"
          variant="outline"
          className="flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10"
          disabled={disabled}
          data-oid="p._nmxd"
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
            data-oid="l-gsing"
          />

          <span className="flex-1 text-sm px-1" data-oid="tlxmj06">
            {getCountryCode(selectedCountry)}
          </span>
          <ChevronDown
            className={cn(
              "-mr-2 size-4 opacity-50",
              disabled ? "hidden" : "opacity-100",
            )}
            data-oid="hh7.4sp"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start" data-oid="vg_bo0d">
        <Command shouldFilter={false} data-oid="ecas_ge">
          <CommandInput
            placeholder="Search country or code..."
            value={inputValue}
            onValueChange={setInputValue}
            data-oid="y3uqj6n"
          />

          <CommandList data-oid="mmjltx8">
            <ScrollArea className="h-72" data-oid="g_smueq">
              <CommandEmpty data-oid="l5gna:3">No country found.</CommandEmpty>
              <CommandGroup data-oid="uymkfuv">
                {filteredCountries.map(({ value, label, code }) =>
                  label && value ? (
                    <CommandItem
                      key={value}
                      onSelect={() => {
                        onChange(value);
                        setOpen(false);
                      }}
                      data-oid=".hw_w21"
                    >
                      <FlagComponent
                        country={value}
                        countryName={label}
                        data-oid="dp:y.47"
                      />
                      <span className="flex-1 text-sm" data-oid="vwcdin_">
                        {label}
                      </span>
                      <span
                        className="text-sm text-foreground/50"
                        data-oid="fxoqg-h"
                      >
                        {code}
                      </span>
                      <Check
                        className={`ml-auto size-4 ${
                          value === selectedCountry
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        data-oid="rawevna"
                      />
                    </CommandItem>
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span
      className="flex h-4 w-6 overflow-hidden rounded-sm"
      data-oid="__.-qpt"
    >
      {Flag && <Flag title={countryName} data-oid="fgkmtbs" />}
    </span>
  );
};

export { PhoneInput };
