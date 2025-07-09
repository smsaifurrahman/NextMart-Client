/** @format */
"use client";
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCategory } from "@/services/Category";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateCategoryModal = () => {
   const [imageFiles, setImageFiles] = useState<File[] | []>([]);
   const [imagePreview, setImagePreview] = useState<string[] | []>([]);
   const form = useForm();

   const {
      formState: { isSubmitting },
   } = form;

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      try {
         console.log('data', data);
         const formData = new FormData();
         formData.append("data", JSON.stringify(data));
         formData.append("icon", imageFiles[0] as File);

         const res = await createCategory(formData);
         console.log("res", res);
         if (res?.success) {
            toast.success(res?.message);
         } else {
            toast.error(res?.message);
         }
      } catch (err: any) {
         console.error(err);
      }
   };
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button>Create Category</Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Create Product Category</DialogTitle>
            </DialogHeader>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Name</FormLabel>
                           <FormControl>
                              <Input
                                 type="text"
                                 {...field}
                                 value={field.value || ""}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <div className="flex items-center justify-between mt-5 ">
                     <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                 <Textarea
                                    className="h-36 w-72"
                                    {...field}
                                    value={field.value || ""}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <div>
                        {imagePreview.length > 0 ? (
                           <ImagePreviewer
                              setImageFiles={setImageFiles}
                              setImagePreview={setImagePreview}
                              imagePreview={imagePreview}
                              className="mt-8"
                           />
                        ) : (
                           <div className="mt-8">
                              <NMImageUploader
                                 setImageFiles={setImageFiles}
                                 setImagePreview={setImagePreview}
                                 label="Upload Logo"
                              />
                           </div>
                        )}
                     </div>
                  </div>

                  <Button type="submit" className="mt-5 w-full">
                     {isSubmitting ? "Creating...." : "Create"}
                  </Button>
               </form>
            </Form>
         </DialogContent>
      </Dialog>
   );
};

export default CreateCategoryModal;
