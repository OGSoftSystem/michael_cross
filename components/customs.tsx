"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues,
} from "react-hook-form";
import { Field, FieldDescription, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { ComponentProps, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import ImageUploader from "./image-uploader";
import RichTextEditor from "./rich-text-editor";

const Items = ["mc1", "mc2", "mc3"];
export function CustomCarousel() {
  return (
    <Carousel
      className="w-full"
      // opts={{
      //   align: "start",
      //   loop: true,
      // }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {Items.map((i, index) => (
          <CarouselItem key={index}>
            <ImageContainer src={`${i}.jpeg`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

function ImageContainer({ src }: { src: string }) {
  return (
    <div className="w-[500px] h-[300px] relative">
      <Image
        src={`/assets/images/${src}`}
        alt="about"
        fill
        className="bg-cover"
      />
    </div>
  );
}

type TextInputProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  "render"
> & {
  control: Control<T>;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  min?: string;
  type?: ComponentProps<"input">["type"];
  icon?: IconType | LucideIcon | undefined;
  className?: string;
};

function Label({
  htmlFor,
  label,
  isRequired,
}: {
  htmlFor: string;
  label: string;
  isRequired: boolean;
}) {
  return (
    <FieldLabel htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
      {label} {isRequired && <span className="text-red-600">*</span>}
    </FieldLabel>
  );
}

export function CustomInput<T extends FieldValues>({
  control,
  label,
  isRequired = false,
  placeholder,
  min,
  type = "text",
  icon: Icon,
  className,
  disabled,

  ...props
}: TextInputProps<T>) {
  return (
    <Controller
      {...props}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <Label htmlFor={props.name} label={label} isRequired={isRequired} />
          <div className="relative">
            {Icon && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Icon className="w-5 h-5 text-gray-400" />
              </div>
            )}
            <Input
              {...field}
              placeholder={placeholder}
              id={props.name}
              type={type}
              min={min}
              disabled={disabled}
              className={cn(
                className,
                "transition-all duration-200 size text-gray-400",
                Icon && "pl-10", // Add padding when icon is present
                fieldState.error &&
                  "border-red-500 focus:border-red-500 focus:ring-red-500"
              )}
            />
          </div>
          {fieldState.error && (
            <FieldDescription className="text-red-500 text-xs mt-1">
              {fieldState.error.message}
            </FieldDescription>
          )}
        </Field>
      )}
    />
  );
}

type TextareaProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  "render"
> & {
  control: Control<T>;
  label: string;
  isRequired?: boolean;
  rows?: number;
};
export function CustomTextarea<T extends FieldValues>({
  control,
  label,
  isRequired = false,
  rows,
  ...props
}: TextareaProps<T>) {
  return (
    <Controller
      {...props}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <Label htmlFor={props.name} label={label} isRequired={isRequired} />
          <Textarea {...field} rows={rows} id={props.name} />
          {fieldState.error && (
            <FieldDescription className="text-red-500 text-xs">
              {fieldState.error.message}
            </FieldDescription>
          )}
        </Field>
      )}
    />
  );
}

type SelectProps<T extends FieldValues> = Omit<ControllerProps<T>, "render"> & {
  control: Control<T>;
  label: string;
  isRequired: boolean;
  items: { id: string; value: string }[];
};
export function CustomSelect<T extends FieldValues>({
  control,
  label,
  isRequired = false,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <Controller
      {...props}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <Label htmlFor={props.name} label={label} isRequired={isRequired} />

          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="select" />
              <SelectContent>
                {items.map((i) => (
                  <SelectItem key={i.id} value={i.value}>
                    {i.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectTrigger>
          </Select>
          {fieldState.error && (
            <FieldDescription className="text-red-500 text-xs">
              {fieldState.error.message}
            </FieldDescription>
          )}
        </Field>
      )}
    />
  );
}

type ImageProps<T extends FieldValues> = Omit<ControllerProps<T>, "render"> & {
  control: Control<T>;
  label: string;
  imageUrl: string;
  isRequired: boolean;
  setImageUrl: React.Dispatch<SetStateAction<string>>;
};

export function ImageUploadInput<T extends FieldValues>({
  control,
  imageUrl,
  setImageUrl,
  isRequired,
  label,
  ...props
}: ImageProps<T>) {
  return (
    <Controller
      {...props}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <Label htmlFor={props.name} label={label} isRequired={isRequired} />

          <ImageUploader
            publicId={field.value}
            onValueChange={(e) => field.onChange(e)}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
          />

          {fieldState.error && (
            <FieldDescription className="text-red-500 text-xs">
              {fieldState.error.message}
            </FieldDescription>
          )}
        </Field>
      )}
    />
  );
}

export function CustomRichTextArea<T extends FieldValues>({
  control,
  isRequired,
  label,
  ...props
}: TextareaProps<T>) {
  return (
    <Controller
      {...props}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <Label htmlFor={props.name} label={label} isRequired={isRequired!} />

          <RichTextEditor fieldValue={field.value} onChange={field.onChange} />

          {fieldState.error && (
            <FieldDescription className="text-red-500 text-xs">
              {fieldState.error.message}
            </FieldDescription>
          )}
        </Field>
      )}
    />
  );
}
