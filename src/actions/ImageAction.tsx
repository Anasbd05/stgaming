"use server"
import {z} from "zod"
import {ImageGenerateformSchema} from "@/components/image-gen/Configurations"

interface imageRes {
    error: string | null,
    success: boolean,
    data: unknown | null
}

export async function generateImage(input: (z.infer<typeof ImageGenerateformSchema>)): imageRes {


}