"use client"
import React from 'react'
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useForm} from 'react-hook-form'
import {Input} from '../ui/input'
import {Slider} from '../ui/slider'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {InfoIcon} from 'lucide-react'


export const ImageGenerateformSchema = z.object({
    model: z.string({
        required_error: "Model is required"
    }),
    prompt: z.string({
        required_error: "Prompt is required"
    }),
    guidance: z.number({
        required_error: "Guidance is required"
    }),
    num_outputs: z.number().min(1,{message: "Number of outputs should be atleast 1"}).max(4,{message: "Number of outputs should be less than 4"}),
    aspect_ratio: z.string({
        required_error: "Aspect_ratio is required"
    }),
    output_format: z.string({
        required_error: "Output_format is required"
    }),
    output_quality: z.number().min(1,{message: "Output Quality should be atleast 1"}).max(100,{message: " output Quality should be less than or equal to 100"}),
    num_inference_steps: z.number().min(20,{message: "Number of inference should be atleast 20"}).max(50,{message: "Number of inference should be less than 50"}),
})

const Configurations = () => {
    const form = useForm<z.infer<typeof ImageGenerateformSchema>>({
        resolver: zodResolver(ImageGenerateformSchema),
        defaultValues: {
            model: "black-forest-labs/flux-dev",
            prompt: "",
            guidance: 3.5,
            num_outputs: 1,
            aspect_ratio: "1.1",
            output_format: "jpg",
            output_quality: 80,
            num_inference_steps: 28,

        },
    })
    function onSubmit(values: z.infer<typeof ImageGenerateformSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <TooltipProvider>

            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-2/6">
                    <fieldset className='grid gap-4 p-4 bg-background rounded-lg border'>
                        <legend className='text-sm -ml-1 px-1 font-medium'>
                            Settings
                        </legend>
                        <FormField
                            control={form.control}
                            name="model"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"flex items-center gap-2"}>Model
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <InfoIcon className='w-4 h-4' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>You can select any model from the dropdown menu </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <FormControl className='w-full'>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a model" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="black-forest-labs/flux-dev">Flux Dev</SelectItem>
                                            <SelectItem value="black-forest-labs/flux-schnell">Flux Schnell </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="aspect_ratio"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={"flex items-center gap-2"}>Aspect Ratio
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <InfoIcon className='w-4 h-4' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Aspect ratio for the generated image</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a model" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1.1">1:1</SelectItem>
                                                <SelectItem value="16:9">16:9</SelectItem>
                                                <SelectItem value="9:16">9:16</SelectItem>
                                                <SelectItem value="21:9">21:9</SelectItem>
                                                <SelectItem value="9:21">9:21</SelectItem>
                                                <SelectItem value="4:5">4:5</SelectItem>
                                                <SelectItem value="5:4">5:4</SelectItem>
                                                <SelectItem value="4:4">4:4</SelectItem>
                                                <SelectItem value="3:4">3:4</SelectItem>
                                                <SelectItem value="2:3">2:3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="num_outputs"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={"flex items-center gap-2"}>Outputs
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <InfoIcon className='w-4 h-4' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Number of images you want to generate</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} min={1} max={4} type='number'
                                                onChange={(e) => field.onChange(+e.target.value)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="guidance"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='flex items-center justify-between '>
                                        <div className='flex items-center gap-2'>
                                            Guidance
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <InfoIcon className='w-4 h-4' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Prompt Guidance for generated image</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <span>
                                            {field.value}
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Slider defaultValue={[field.value]} min={0} max={10} step={.5}
                                            onValueChange={value => field.onChange(value[0])} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="num_inference_steps"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='flex items-center justify-between '>
                                        <div className='flex items-center gap-2'>
                                            Number of Inference Steps
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <InfoIcon className='w-4 h-4' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Number Inference steps to generate the image </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <span>
                                            {field.value}
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Slider defaultValue={[field.value]} min={1} max={50} step={1}
                                            onValueChange={value => field.onChange(value[0])} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="output_quality"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='flex items-center justify-between '>
                                        <div className='flex items-center gap-2'>
                                            Output Quality
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <InfoIcon className='w-4 h-4' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Choose the Quality of your generated image</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <span>
                                            {field.value}
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Slider defaultValue={[field.value]} min={50} max={100} step={1}
                                            onValueChange={value => field.onChange(value[0])} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="output_format"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='flex items-center gap-2'>Output Format
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <InfoIcon className='w-4 h-4' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Select format for generated image</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className='w-full'>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a format" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="webp">Webp</SelectItem>
                                            <SelectItem value="png">png</SelectItem>
                                            <SelectItem value="jpg">jpg</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="prompt"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='flex gap-2 items-center'>Prompt
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <InfoIcon className='w-4 h-4' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>How you want the image to be</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </FormLabel>
                                    <FormControl>
                                        <textarea {...field} rows={6} className='border rounded-md border-input px-1.5 py-1' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </fieldset>

                    <Button className='font-medium' type="submit">Generate</Button>
                </form>
            </Form>
        </TooltipProvider>

    )
}

export default Configurations
